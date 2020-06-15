import React from 'react';
import '../styles/Home.sass';
import Main from '../components/Main';
import { Link } from 'react-router-dom';

const Home = () => (
  <Main>
      <div className="Home">
        <div className="text-body">
          <h2 className="opening-text">In the U.S., African Americans are 2.5 times <span className="bold-text">more likely to be killed</span> by police than white people.</h2>
          <p className="secondary-text">Thousands more around the globe get subjected to racial discrimination each day.</p>
        </div>
        <Link to="/whattodo">
          <div className="learn-more-btn">
            <span className="learn-more-text">Learn what you can do to help</span>
          </div>
        </Link>
      </div>
  </Main>
);

export default Home;