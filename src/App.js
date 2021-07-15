import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header/>
        <Nav />
        <Home/>
      </div>
    </div>
  );
}

export default App;
