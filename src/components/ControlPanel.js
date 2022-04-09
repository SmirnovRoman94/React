import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react';
// import {useEffect} from 'react'
import { useParams } from 'react-router';


const ControlPanel = ({addMessage}) => {
    let {chatId} = useParams()
    // const [messageList, setMessageList] = useState ([])
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
        addMessage(chatId, newMes)
    }
    // useEffect(() => {
    //     if(messageList.length > 0 && messageList[messageList.length -1].author !== null ){
    //       setTimeout(() => {
    //         alert("Введите имя автора!")
    //       },1500)
    //     }
    //     if(messageList.length > 0 && messageList[messageList.length -1].author){
    //       const aut = messageList[messageList.length -1].author
    //     console.log(aut)
    //     alert(`Спасибо за сообщение ${aut}`)
    //     }
    //   }, [messageList] )


    return <div>ControlPanel
    <form className="form_user">
              <TextField id="standard-basic" autoFocus={true} label="Введите сообщение"  variant="standard" color="secondary" margin="normal" value={value} onChange={hendleChengeMes}/>
              <TextField id="standard-basic" label="Введите имя автора"  variant="standard" color="secondary" margin="normal" value={valueAuthor} onChange={hendleChengeAuthor}/>
              <Button variant="outlined"  color="secondary" pt={2} onClick={hendleClick} disableElevation>
                Click!
              </Button>
    </form>
    </div>
}
export default ControlPanel