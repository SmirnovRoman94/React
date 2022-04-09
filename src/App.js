import './App.scss';
import Router from './pages/Router'




function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Render props</h1>
          <Router/>
        </div>
      </header>
  </div>

  );
}

export default App;
