import React from 'react';
import './Home.sass';
import NavBar from './NavBar'

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="text-body">
        <h1 className="opening">In the U.S., African Americans are 2.5 more likely to be killed by police than white people.</h1>
        <h4 className="secondary">Thousands more around the world get subjected to other types of racial discriminaton each day.</h4>
        <p className="learn-more">Learn what you can do to help</p>
      </div>
      <svg viewBox='0 0 1024 768' preserveAspectRatio='none'>
        <path d='M0,750 C650,730 500,154 1024,154 L1024,0 0,0 0,750' fill='#1f1d22' />
      </svg>
    </div>
  );
}

export default Home;
