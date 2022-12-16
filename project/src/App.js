import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link">
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact</h3>
        <h3>Meet The Team</h3>
        <h3>Shop</h3>
        <h3>Blog</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
