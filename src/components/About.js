import React from 'react';
import '../styles/Webpage.sass';
import Main from '../components/Main';

const About = () => (
    <Main>
        <div className="About">
            <h1 className="main-heading">About</h1>
            <div class="information-body">
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="about-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
        </div>
    </Main>
);
  
export default About;