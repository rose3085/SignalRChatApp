import { Row,Col,} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
const MessageContainer =({messages}) => {

    return <div>
        {

    <table striped bordered>
      <tbody>
        {messages.map((msg, index) => (
          <tr key={index}>
            <td>{msg.userName}:{msg.msg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
}

    </div>
}
export default MessageContainer;