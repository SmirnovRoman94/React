import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from "../pages/Home";
import Profile from '../pages/Profile'
import Chats from '../pages/Chats'
import { useState } from "react";
const initialChats = {
    id1: {
        name: 'chat 1',
        messages: [{text: 'message 1', author: 'author 1'}]
    },
    id2: {
        name: 'chat 2',
        messages: [{text: 'messagwc2', author: 'auth 2'}]
    }
}

const Router = () => {
    const [chats, setChats] = useState(initialChats)
    const addMessage = (chatId, message) => {
        setChats({...chats, [chatId]: {
            name: chats[chatId].name,
            messages: [...chats[chatId].messages, message]
        }})
    }
    return  <>
                <nav >
                    <ul className={'menu'}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/chats/:chatId" element={<Chats chats={chats} addMessage={addMessage}/>}/>
                    <Route path="/*" element={<Chats chats={chats}/>}/>
                </Routes>
            </>
}
export default Router
