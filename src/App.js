import './App.scss';
import { LoremIpsum} from 'react-lorem-ipsum';
import Message from './Message';

const messageItem = "Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis libero feugiat semper aliquet eget phasellus. Inceptos fringilla ultrices eu libero cubilia tortor amet. Phasellus habitasse urna maecenas eget suscipit; leo rhoncus. Ultrices habitasse ultricies bibendum diam turpis nostra."

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>My first App</h1>
        </div>
      </header>
      <div class="container">
        <LoremIpsum p={3}/>
        <div class="mes">
          <Message mes={messageItem}/>
        </div>
      </div>
    </div>
  );
}

export default App;
