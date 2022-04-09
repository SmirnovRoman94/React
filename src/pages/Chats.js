import React  from 'react';
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';




const Chats = ({chats, addMessage}) => {
    const qw = (item) => {
        console.log(item)
    }
    return <div className={'wrapper'}>
        <ChatList chats = {chats} deteleror = {qw}/>
        <MessageList chats={chats}/>
        <ControlPanel addMessage={addMessage}/>
    </div>
}
export default Chats

