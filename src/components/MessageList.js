import { useParams } from "react-router"

const MessageList = ({chats}) => {
    let {chatId} = useParams()
    if(!chats[chatId]) return null
    const messages = chats[chatId].messages
    return <div>
        {messages.map((el, index) => (
            <div key={index}>
                <p>{el.text}</p>
                <p>{el.author}</p>
            </div>
        ))}
    </div>
}
export default MessageList