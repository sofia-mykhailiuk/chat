import './MessageForm.css'
import {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import {sendMessageAC} from "../../Redux/chat-reducer";

const MessageForm = () => {
    const [newMessageText, setNewMessageText] = useState('')

    const dispatch = useDispatch()

    const sendMessage = useCallback((msgTxt)=>{
        let sendDate = new Date()
        dispatch(sendMessageAC(msgTxt, sendDate))
        setNewMessageText('')
    }, [dispatch])

    const onNewMessageTextChange = (event) => {
        setNewMessageText(event.target.value)
    }

    const onSendMessageSubmit = (event) => {
        event.preventDefault()
        if (newMessageText !== '') {
            sendMessage(newMessageText)
        }
    }

    return <form className='message-form' onSubmit={onSendMessageSubmit}>
        <input type='text' value={newMessageText} onChange={onNewMessageTextChange} />
        <button type='submit'/>
    </form>
}

export default MessageForm