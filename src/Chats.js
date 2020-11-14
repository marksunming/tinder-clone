import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Sarah"
                message="Hey! How are you 😄"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />
            <Chat 
                name="Ellen"
                message="Whats up ♥️?"
                timestamp="55 minutes ago"
                profilePic="https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg"
            />
            <Chat 
                name="Sandra"
                message="Ola"
                timestamp="3 days ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg"
            />
            <Chat 
                name="Natasha"
                message="Oops there is he is ... 🐱"
                timestamp="1 week ago"
                profilePic="https://m.media-amazon.com/images/M/MV5BMTEyMzc2MTE2MzheQTJeQWpwZ15BbWU4MDUwNTY0ODYx._V1_UX214_CR0,0,214,317_AL_.jpg"
            />
        </div>
    )
}

export default Chats

