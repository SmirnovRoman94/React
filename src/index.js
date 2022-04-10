import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';


// const theme = createTheme({
  // status: {
  //   danger: orange[500],
  // },
//   palette: {
//     primary: 'light',
//   },
// });
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  status: {
    danger: orange[500],
  }
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




