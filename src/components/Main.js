import React from 'react';
import '../styles/Main.sass';
import Home from '../components/Home';
import fist from '../img/fist.png';
import protestfists from '../img/protest.svg';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="Main">
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
                    <img className="protest-fists" src={protestfists} alt="protestfists"></img>
                    <Home />
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

export default Main;
