import './App.css';
import MessageForm from "./Components/MessageForm/MessageForm";
import Chat from "./Components/Chat/Chat";

function App() {
    return (
        <div className='app-wrapper'>
            <div className='chat-wrapper'>
                <Chat />
                <MessageForm />
            </div>
        </div>
    );
}

export default App;
