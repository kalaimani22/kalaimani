import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Learning from "./pages/learning";
import ImageSlider from "./pages/imageSlider";
import CountriesInfo from "./pages/countriesInfo";
import TextToSpeech from "./pages/textToSpeech";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <a className="logo" href="/" rel="noopener noreferrer">
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
              <li>
                <Link to="learning">learning</Link>
              </li>
              <li>
                <Link to="image-slider">Image slider</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="learning" element={<Learning />} />
          <Route path="image-slider" element={<ImageSlider />} />
          <Route path="country" element={<CountriesInfo />} />
          <Route path="text-speech" element={<TextToSpeech />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
