import React from 'react';


const Navbar = (props) => {
  const { score, topScore } = props;

  return (
    <>
    <nav className="navbar">
      <div className="navbar__brand">Superheroes Memory Game</div>
      <div className="navbar__scores">
        <span className='score'>Score: {score}</span>
        <span className='top-score'>Top Score: {topScore}</span>
      </div>
    </nav>
    <div className='second-nav'>
      Get points by clicking on an image but don't click on any more than once!
    </div>
    </>
    
  );
};

export default Navbar;