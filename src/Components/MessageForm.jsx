import './MessageForm.css'
import sendIcon from './../assets/svg/send-msg-icon.svg'
import {useState} from "react";

const MessageForm = (props) => {
    const [newMessageBody, setNewMessageBody] = useState('')

    const onNewMessageBodyChange = (event) => {
        setNewMessageBody(event.target.value)
    }

    const onSendMessageClick = () => {
        if(newMessageBody !== '') {
            let sendDate = new Date().toLocaleTimeString().slice(0,-3)
            props.sendMessage(newMessageBody, sendDate)
            setNewMessageBody('')
        }
    }

    return <div className="message-form">
        <input type="text" value={newMessageBody} onChange={onNewMessageBodyChange}/>
        <img onClick={onSendMessageClick} src={sendIcon} alt="" draggable='false'/>
    </div>
}

export default MessageForm