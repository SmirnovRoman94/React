import './App.scss';
import Router from './pages/Router'
import {BrowserRouter} from 'react-router-dom'
import React, { useState } from 'react';

export const MyThemeContext = React.createContext({ theme: 'dark'})





function App(props) {
  const [theme, setTheme] = useState('dark')
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Render props</h1>
          <MyThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            <BrowserRouter>
              <Router/>
            </BrowserRouter>
          </MyThemeContext.Provider>
        </div>
      </header>
  </div>

  );
}

export default App;
