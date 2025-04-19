

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import './App.css';
import Facebook from './components/Facebook';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Account />} />
      <Route path="/facebook" element={<Facebook />} />
        
        
      </Routes>
    </Router>

    


  );
}


export default App;
