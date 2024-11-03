import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A cooler <code>michaeldaviddunlap.com</code> coming soon.
        </p>
        <p>In the meantime...</p>
        <p>
          <a
            className="App-link"
            href="https://www.modscholar.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>modscholar.io</code>
          </a>
        </p>
        <p>Also, check out my proof-of-concept e-commerce app:</p>
        <p>
        <a
          className="App-link"
          href="https://www.garb-n-go.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>garb-n-go.com</code>
        </a>
        </p>
      </header>
      <ul className="projects">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
}

export default App;
