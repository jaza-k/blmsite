import React from 'react';
import './Home.sass';
import fist from './fist.png'

function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div className="split-left">
          <div className="logo">
            <img className="fist" src={fist} alt="fist" />
            <h1 className="blacklives-text">BlackLives<span className="matter-text">Matter</span></h1>
          </div>
        </div>
        <section class="split-right">

        </section>
      </div>
    </div>
  );
}

export default Home;
