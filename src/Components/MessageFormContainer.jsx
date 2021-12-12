import {connect} from "react-redux";
import {sendMessage} from "../Redux/chat-reducer";
import MessageForm from "./MessageForm";

let mapStateToProps = (state) => ({
    newMessageBody: state.newMessageBody
})

const MessageFormContainer = connect (mapStateToProps,{sendMessage})(MessageForm)

export default MessageFormContainer