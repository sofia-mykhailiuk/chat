import './Chat.css'
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeMessageAC} from "../../Redux/chat-reducer";

const Chat = () => {
    const sendMessageDate = (date) => date.toLocaleString().slice(-8,-3);

    const messages = useSelector((state) => state.messages)
    const dispatch = useDispatch()

    const removeMessage = useCallback((id)=>{
        dispatch(removeMessageAC(id))
    }, [dispatch])

    const onMessageClick = (id) => () => {
            removeMessage(id)
    }

    let messagesItems = messages.map((msg) => {
        return <div key={msg.id}
                    id={msg.id}
                    className={`message ${msg.authorId === 0 ? 'right' : ''}`}
                    onClick={onMessageClick(msg.id)}
        >
            <div className='message-text'>{msg.text}</div>
            <span className='message-date'>{sendMessageDate(msg.sendDate)}</span>
        </div>
    })

    return <div className='chat'>
        {messagesItems}
    </div>
}

export default Chat