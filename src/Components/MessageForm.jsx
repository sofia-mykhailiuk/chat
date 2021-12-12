import './MessageForm.css'
import sendIcon from './../assets/svg/send-msg-icon.svg'
import {useState} from 'react';

const MessageForm = (props) => {
    const [newMessageBody, setNewMessageBody] = useState('')

    const onNewMessageBodyChange = (event) => {
        setNewMessageBody(event.target.value)
    }

    const onSendMessageClick = () => {
        if (newMessageBody !== '') {
            let sendDate = new Date().toLocaleTimeString().slice(0, -3)
            props.sendMessage(newMessageBody, sendDate)
            setNewMessageBody('')
        }
    }

    const onSendMessageKeyUp = (event) => {
        if (event.key === 'Enter' && newMessageBody !== '') {
            props.sendMessage(newMessageBody)
            setNewMessageBody('')
        }
    }

    return <div className='message-form'>
        <input type='text' value={newMessageBody} onChange={onNewMessageBodyChange} onKeyUp={onSendMessageKeyUp}/>
        <img onClick={onSendMessageClick} src={sendIcon} alt='' draggable='false'/>
    </div>
}

export default MessageForm