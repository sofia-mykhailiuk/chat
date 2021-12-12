import './MessageForm.css'
import sendIcon from '../../assets/svg/send-msg-icon.svg'
import {useState} from 'react';

const MessageForm = (props) => {
    const [newMessageText, setNewMessageText] = useState('')

    const onNewMessageTextChange = (event) => {
        setNewMessageText(event.target.value)
    }

    const sendMessage = () =>{
        let sendDate = new Date()
        props.sendMessage(newMessageText, sendDate)
        setNewMessageText('')
    }

    const onSendMessageClick = () => {
        if (newMessageText !== '') {
           sendMessage()
        }
    }

    const onSendMessageKeyUp = (event) => {
        if (event.key === 'Enter' && newMessageText !== '') {
          sendMessage()
        }
    }

    return <div className='message-form'>
        <input type='text' value={newMessageText} onChange={onNewMessageTextChange} onKeyUp={onSendMessageKeyUp}/>
        <img onClick={onSendMessageClick} src={sendIcon} alt='' draggable='false'/>
    </div>
}

export default MessageForm