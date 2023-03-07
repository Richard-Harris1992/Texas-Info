import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Views/Home';
import Cities from './Views/Cities';
import City from './Views/City';
// import Sources from './Views/Sources';
import Contact from './Views/Contact';


function App() {
  return (
   <Router>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/sources">Sources</Link>
        <Link to="/contact">Contact Us</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:city" element={<City />} />
        {/* <Route path="/sources" element={<Sources />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <footer>
        <p>&copy; Page Footer</p>
      </footer>
   </Router>
  );
}

export default App;
