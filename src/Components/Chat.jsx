import './Chat.css'

const Chat = (props) => {
    const onMessageClick = (event) => {
        event.target.className === 'message ' || event.target.className === 'message right' ?
            props.removeMessage(event.target.id) :
            props.removeMessage(event.target.parentElement.id)
    }

    let messagesItems = props.messages.map((msg) => {
        return <div key={msg.id}
                    id={msg.id}
                    className={`message ${msg.authorId === 0 ? 'right' : ''}`}
                    onClick={onMessageClick}
        >
            <div className='message-text'>{msg.message}</div>
            <span className='message-date'>{msg.sendDate}</span>
        </div>
    })

    return <div className='chat'>
        {messagesItems}
    </div>
}

export default Chat