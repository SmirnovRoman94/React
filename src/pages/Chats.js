import React, { useState }  from 'react';
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';




const Chats = ({chats, addMessage}) => {
    const [id, setId] = useState('')
    const setingId =(item) => {
        setId(item)
    }
    return <div className={'wrapper'}>
        <ChatList chats = {chats} deleter = {setingId}/>
        <MessageList chats={chats}/>
        <ControlPanel addMessage={addMessage}/>
    </div>
}
export default Chats

