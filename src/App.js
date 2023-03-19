import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';
import LQApp from './components/LqApp';
import Digital from './components/digital';

// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Clone from './components/clone';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/Portfolio' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/lq' element={<LQApp />} />
        <Route path='/digital' element={<Digital />} />
        <Route path='/clone' element={<Clone />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
