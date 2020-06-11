import React from 'react';
import './Home.sass';
import fist from './fist.png'
import protestfists from './protest.svg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div className="split-left">
          <div className="burger">
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
          </div>
          <div className="logo">
            <img className="fist" src={fist} alt="fist" />
            <h1 className="blacklives-text">BlackLives<span className="matter-text">Matter</span></h1>
          </div>

          <div className="text-body">
            <h2 className="opening-text">In the U.S., African Americans are 2.5 times <span className="bold-text">more likely to be killed</span> by police than white people.</h2>
            <p className="secondary-text">Thousands more around the globe get subjected to racial discrimination each day.</p>
          </div>

          <Link to="/whattodo">
            <div className="learn-more-btn">
              <span className="learn-more-text">Learn what you can do to help</span>
            </div>
          </Link>

          <img className="protest-fists" src={protestfists} alt="protestfists"></img>

          <div className="NavBar">
            <nav>
              <ul className="nav-links">
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/whattodo">
                  <li>What To Do</li>
                </Link>
                <Link to="/sources">
                  <li>Sources</li>
                </Link>
              </ul>
            </nav>
          </div>

        </div>
        <section class="split-right"></section>
      </div>
    </div>
  );
}

export default Home;
