

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Up from './components/Up';
// import Lucknow from './components/Lucknow';
// import Allahabad from './components/Allahabad';
// import Banaras from './components/Banaras';
// import India from './components/India';
// import Karnataka from './components/Karnataka';


import './App.css';
import Sign from './components/Sign';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignIn />} />
        <Route path="/sign" element={<Sign />} />
        
      </Routes>
    </Router>

    


  );
}


export default App;
