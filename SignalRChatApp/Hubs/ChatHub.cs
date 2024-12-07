using Microsoft.AspNetCore.SignalR;
using SignalRChatApp.DataService;
using SignalRChatApp.Models;

namespace SignalRChatApp.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SharedDb _sharedDb;

        public ChatHub(SharedDb sharedDb)
        {
            _sharedDb = sharedDb;
        }
        public async Task JoinChat(UserConnection connection)
        {

            await Clients.All.SendAsync("Recieve Message",$"{connection.UserName}");
        }

        public async Task JoinSpecificChatRoom(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
            _sharedDb.connections[Context.ConnectionId] = connection;
            await Clients.Group(connection.ChatRoom).SendAsync("JoinSpecificChatRoom","admin", $"{connection.UserName} has joined the {connection.ChatRoom}");
        }

        public async Task SendMessage(string message)
        {

            if (_sharedDb.connections.TryGetValue(Context.ConnectionId, out UserConnection connection))
            {
                await Clients.Group(connection.ChatRoom).SendAsync("RecieveSpecificMessage",connection.UserName, message);
            
            }
        }
    }
}
