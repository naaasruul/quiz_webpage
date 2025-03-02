import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
     <Router>
     <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Router>
    
    </>
  );
}

export default App
