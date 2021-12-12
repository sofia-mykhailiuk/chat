import './App.css';
import ChatContainer from './Components/ChatContainer';
import MessageFormContainer from './Components/MessageFormContainer';

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
