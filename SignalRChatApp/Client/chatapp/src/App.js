
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Container,Row} from "react-bootstrap";
import WaitingRoom from './component/WaitingRoom';
import { useState } from 'react';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import ChatRoom from './component/ChatRoom';

function App() {

  const[connection,SetConnection] = useState();
  const[messages, SetMessages] = useState([]);

  const joinChatRoom = async(userName,chatRoom) =>
  {
    
    try{

      var connection =new HubConnectionBuilder()
                        .withUrl('https://localhost:7031/chat-hub')
                        .configureLogging(LogLevel.Information)
                        .build();
      connection.on('JoinSpecificChatRoom',(userName,msg)=>
        {
console.log("msg: ",msg);
SetMessages(messages => [...messages,{userName,msg}])
        });

        connection.on('RecieveSpecificMessage',(userName,msg)=>
          {
            SetMessages(messages => [...messages,{userName,msg}])
          });

        await connection.start();
        await connection.invoke("JoinSpecificChatRoom",{userName,chatRoom});
        //await connection.invoke("RecieveSpecificMessage",{messages});
        SetConnection(connection);

    }
    catch(e)
    {
      console.log(e);
    }
  }

  const sendMessage = async(message)=>
  {
    try{
      await connection.invoke("SendMessage",message);
    }
    catch(e)
    {
      console.log(e);
    }
  }


  return (
    <div>
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
            <h1 className='font-weight-light'>
              Welcome to my chat app.
              </h1></Col>
          </Row>
          {!connection ? 
          <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
          :<ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
}
        </Container>
      </main>
     
    </div>
  );
}

export default App;
