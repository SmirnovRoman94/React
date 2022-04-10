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
import { useContext } from 'react';
import { MyThemeContext } from '../App';




const ChatList = ({chats}, props) => {
    const contectValue = useContext(MyThemeContext)
    const deteleror = (chat) => {
        console.log(chat)
    }
    const setId = props
    return <div>
    <MyThemeContext.Consumer>
        {(theme) => (
            <div>
                <h1>{theme.theme}</h1>
                <button onClick={() => contectValue.setTheme(contectValue.theme === 'light' ? 'dark' : 'light')}>Chenge theme</button>
            </div>
        ) }
    </MyThemeContext.Consumer>
     <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        ChatList:
        My theme is <h1>{contectValue.theme}</h1>
    </Typography>
    <List>
    {Object.keys(chats).map((chat, index) => (
        <Link to={`/chats/${chat}`} key={index}>
        <ListItem key={index}
            secondaryAction={
            <IconButton onClick={()=> setId(chat)} edge="end" aria-label="delete">
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