import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <Router>

    <div className="App">
      <header className="header">
        <a
          className="logo"
          href="/"
          rel="noopener noreferrer"
        >
          Kalaimani
        </a>

        <nav>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
      </ul>
    </nav>
    </header>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
      path="*"
      element={<Navigate to="/" />}
    />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
