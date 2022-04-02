import './App.scss';
import React, { useEffect } from 'react';
import { useState} from 'react';



function App(props) {
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
          <form className="form_user">
            <input type="text"  value={value} onChange={hendleChengeMes} placeholder={'Введите сообщение'}/>
            <input type="text" value={valueAuthor} onChange={hendleChengeAuthor} placeholder={'Введите имя автора'}/>
            <button onClick={hendleClick}>Click!</button>
          </form>
          {messageList.map(el => (
              <div className="message">
                <p>{el.text}</p>
                <p>{el.author}</p>
              </div>
            ))}
  </div>

  );
}

export default App;
