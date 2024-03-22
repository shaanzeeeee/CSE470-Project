import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './login';
import Signup from "./signup";
import Home from "./Home";
import Features from './Features';
import About from "./about";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element = {<Home />} />
        <Route path ="/features" element = {<Features />} />
        <Route path="/about" element= {<About />} />
      </Routes>
    </Router>
  );
}

export default App;
