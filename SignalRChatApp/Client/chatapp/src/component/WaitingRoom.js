import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const WaitingRoom = ({joinChatRoom}) =>
{
const[userName,SetUserName] =useState();
const[chatRoom,SetChatRoom] =useState();

return(<Form onSubmit={e=>
{
    e.preventDefault();
    joinChatRoom(userName,chatRoom);
}
}>

<Row className='px-5 my-5'>
    <Col sm={12}>
    <Form.Group>
        <Form.Control placeholder='UserName' onChange={e => SetUserName(e.target.value)}/>
        <Form.Control  placeholder='ChatRoom' onChange={e => SetChatRoom(e.target.value)} />
    </Form.Group></Col>
    <Col sm={12}>
        <Button variant="success" type='submit'>Join</Button>
    </Col>
</Row>

</Form>);

}
export default WaitingRoom;