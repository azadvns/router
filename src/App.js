

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

import Up from './components/Up';
import Lucknow from './components/Lucknow';
import Allahabad from './components/Allahabad';
import Banaras from './components/Banaras';
import India from './components/India';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/india" element={<India />} />
        <Route path="/up" element={<Up />} />
        <Route path="/lucknow" element={<Lucknow />} />
        <Route path="/allahabad" element={<Allahabad />} />
        <Route path="/banaras" element={<Banaras />} />
        
      </Routes>
    </Router>
  );
}


export default App;
