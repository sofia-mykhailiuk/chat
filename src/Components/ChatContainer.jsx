import Chat from "./Chat";
import {connect} from "react-redux";
import {removeMessage} from "../Redux/chat-reducer";

let mapStateToProps = (state) => ({
    messages: state.messages,
    newMessageBody: state.newMessageBody
})

const ChatContainer = connect (mapStateToProps,{removeMessage})(Chat)

export default ChatContainer