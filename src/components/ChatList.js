// import { useParams } from "react-router"
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';


import { Link } from "react-router-dom";

const ChatList = ({chats}) => {
    const deteleror = (chat) => {
        console.log(chat)
    }
    return <div>
     <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        ChatList:
    </Typography>
    <List>
    {Object.keys(chats).map((chat, index) => (
        <Link to={`/chats/${chat}`} key={index}>
        <ListItem key={index}
            secondaryAction={
            <IconButton onClick={()=> deteleror(chat)} edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        }>
            <ListItemAvatar>
                <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={chats[chat].name}/>
        </ListItem>
        </Link>
    ))}
    </List>
    </div>
}
export default ChatList