import './App.scss';
import React, { useEffect } from 'react';
import { useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';


function App(props) {
  const ListChat = [{ name: 'Обучение'}, {name:'Работа'}, {name:'Хобби'}, {name:'Все свои'}, {name:'Болталка'}]
  const [messageList, setMessageList] = useState ([])
  const [value, setValue] = useState ('')
  const [valueAuthor, setAuthor] = useState ('')
  const hendleChengeMes = (event) => {
      setValue(event.target.value)
  }
  const hendleChengeAuthor = (event) => {
      setAuthor(event.target.value)
  }
  
  const hendleClick = (event) => {
    event.preventDefault()
      const newMes = {text: value, author: valueAuthor}
      setMessageList([...messageList, newMes])
  }
  useEffect(() => {
    if(messageList.length > 0 && messageList[messageList.length -1].author !== null ){
      setTimeout(() => {
        alert("Введите имя автора!")
      },1500)
    }
    if(messageList.length > 0 && messageList[messageList.length -1].author){
      const aut = messageList[messageList.length -1].author
    console.log(aut)
    alert(`Спасибо за сообщение ${aut}`)
    }
  }, [messageList] )
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>My first App</h1>
        </div>
      </header>
      <div className="container">
        <div className="chate">
          <List sx={{ width: '100%', width: 300 }}>
            {ListChat.map((el, index) => (
              <ListItem
                color={'#fff'}
                key={index}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText style={{ color: '#FFFFFF' }} primary={el.name} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="chatItem">
          <form className="form_user">
              <TextField id="standard-basic" autoFocus={true} label="Введите сообщение"  variant="standard" color="secondary" margin="normal" value={value} onChange={hendleChengeMes}/>
              <TextField id="standard-basic" label="Введите имя автора"  variant="standard" color="secondary" margin="normal" value={valueAuthor} onChange={hendleChengeAuthor}/>
              <Button variant="outlined"  color="secondary" pt={2} onClick={hendleClick} disableElevation>
                Click!
              </Button>
          </form>
          <h3 className="message_header">Список сообщений:</h3>
            {messageList.map((el, index) => (
                <div className="message" key={index}>
                  <p className="message_text">{el.text}</p>
                  <p className="message_author">{el.author}</p>
                </div>
              ))}
        </div>
      </div>
  </div>

  );
}

export default App;
