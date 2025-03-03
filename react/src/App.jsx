import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          {/* add another page later.. */}
        </Routes>
      </Router>
    </>
  );
}

export default App
