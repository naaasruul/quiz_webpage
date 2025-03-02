import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* add another page later.. */}
        </Routes>
      </Router>
    </>
  );
}

export default App
