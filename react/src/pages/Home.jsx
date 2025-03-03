import React from "react";
import SplitText from "../components/SplitText";
import { Link } from "react-router-dom";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SplitText
        text="Hello!"
        className="text-9xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <Link to="/categories">Start</Link>
    </div>
  );
};

export default Home;
