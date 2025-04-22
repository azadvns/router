
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import SearchPage from './components/Search';

import './App.css';
 
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}


export default App;