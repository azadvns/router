

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import './App.css';
import Facebook from './components/Facebook';
import Account from './components/Account';
import Forget from './components/Forget';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Account />} />
      <Route path="/facebook" element={<Facebook />} />
      <Route path='/forget' element={<Forget></Forget>}></Route>
        
        
      </Routes>
    </Router>

    


  );
}


export default App;
