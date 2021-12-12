import {connect} from 'react-redux';
import {sendMessage} from '../../Redux/chat-reducer';
import MessageForm from './MessageForm';

let mapStateToProps = (state) => ({})

const MessageFormContainer = connect (mapStateToProps,{sendMessage})(MessageForm)

export default MessageFormContainer