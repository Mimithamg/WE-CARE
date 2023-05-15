
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import Settings from './pages/Settings';
import Team from './pages/Team';
import More from './pages/More'
import Home from './pages/Home'
import Messages from './pages/Messages'


function App() {
  
  return (
    
    <div className='App'>
      
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/settings"  element={<Settings/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/more" element={<More/>} />
        <Route exact path="/messages" element={<Messages/>} />
      
        </Routes>
      
      
      </div>
   
  );
}

export default App;
