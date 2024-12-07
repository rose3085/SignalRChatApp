using SignalRChatApp.Models;
using System.Collections.Concurrent;

namespace SignalRChatApp.DataService
{
    public class SharedDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new();

        public ConcurrentDictionary<string, UserConnection> connections => _connections;
    }
}
