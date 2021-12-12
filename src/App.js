import './App.css';
import ChatContainer from './Components/Chat/ChatContainer';
import MessageFormContainer from './Components/MessageForm/MessageFormContainer';

function App() {
    return (
        <div className='app-wrapper'>
            <div className='chat-wrapper'>
                <ChatContainer />
                <MessageFormContainer />
            </div>
        </div>
    );
}

export default App;
