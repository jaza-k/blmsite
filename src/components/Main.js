import React from 'react';
import '../styles/Main.sass';
import fist from '../img/fist.png';
import protestfists from '../img/protest.svg';
import { Link } from 'react-router-dom';

// MAIN WRAPPER COMPONENT
const Main = ({children}) => {

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const hiddenDiv = document.querySelector('.hidden-div');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        // show menu
        hiddenDiv.classList.toggle('toggle-hidden-div');
        // toggle nav menu
        nav.classList.toggle('nav-active');
    
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle-menu');
    }

    return (
        <div className="Main">
            <div className="container">
                <div className="split-left">
                    <div className="hidden-div">
                        <ul className="nav-links">
                            <Link to="/home">
                                <li>Home</li>
                            </Link>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                            <Link to="/actions">
                                <li>What To Do</li>
                            </Link>
                            <Link to="/sources">
                                <li>Sources</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="burger" onClick={navSlide}>
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                        <div className="line-three"></div>
                    </div>
                    <div className="logo">
                        <img className="fist" src={fist} alt="fist" />
                        <h1 className="blacklives-text"><a href="/home" className="logo-link">BlackLives<span className="matter-text">Matter</span></a></h1>
                    </div>
                    <img className="protest-fists" src={protestfists} alt="protestfists"></img>

                    <div>
                        {children}
                    </div>
                    
                    <div className="NavBar">
                        <nav>
                            <ul className="nav-links">
                                <Link to="/home">
                                    <li>Home</li>
                                </Link>
                                <Link to="/about">
                                    <li>About</li>
                                </Link>
                                <Link to="/actions">
                                    <li>What To Do</li>
                                </Link>
                                <Link to="/sources">
                                    <li>Sources</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
                <section className="split-right"></section>
            </div>
        </div>
    );
};

export default Main;

