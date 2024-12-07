import { Row,Col} from "react-bootstrap"
import MessageContainer from './MessageContainer'
import MessageForm from "./MessageForm";

const ChatRoom =({messages,sendMessage}) => {
   return <div>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <h2>ChatRoom</h2>
            </Col>
        </Row>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <MessageContainer messages={messages}></MessageContainer>
            </Col>
            <Col sm={12}>
                <MessageForm sendMessage={sendMessage}></MessageForm>
            </Col>
        </Row>

    </div>
}
export default ChatRoom;