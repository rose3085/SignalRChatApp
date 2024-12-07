import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MessageForm =({sendMessage}) =>
{

    const[msg,SetMsg] = useState('');
    return(<Form onSubmit={e=>
    {
        e.preventDefault();
        sendMessage(msg);
        SetMsg('');
    }
    }>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Chat</span>
        {/* <InputGroup.Text className="col">Chat</InputGroup.Text> */}
        <input type="text" class="form-control"  className="w-5" onChange={e=>SetMsg(e.target.value)} value={msg} aria-label="Username" aria-describedby="basic-addon1" placeholder="Enter your message"></input>
        <Button  className="col" variant="primary" type="submit" disabled={!msg}>Send</Button>

        </div>


    </Form>);

}
export default MessageForm;