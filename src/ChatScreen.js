import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: "https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg",
            message: "Whats up ♥️?"
        },
        {
            name: 'Ellen',
            image: "https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg",
            message: "Hows it going!"
        },
        {
            message: "Hi How are you Ellen!"
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((message) => (
                message.name? (
                    <div className="chatScreen__message">
                        <Avatar 
                        className="chatScreen__image"
                        alt={message.name} 
                        src={message.image} /> 
                        <p className="chatScreen__text">{message.message}</p>
                    </div>        
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
                
            ))}
            
            <form className="chatScreen__input">
                <input
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message" 
                    type="text"
                    className="chatScreen__inputField"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
