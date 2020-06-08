import React from 'react';
import fist from './fist.png';
import './NavBar.sass';

function NavBar() {

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
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
            burger.classList.toggle('toggle');

        });
    }

    return (
        <div className="NavBar">
            <nav>
                <div className="logo">
                    <h1><img src={fist} className="fist-logo" alt="fist-logo" />BlackLives<span className="matter-text">Matter</span></h1>
                </div>
                <ul className="nav-links">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>What to do</a></li>
                    <li><a href='#'>Sources</a></li>
                </ul>
                <div className="burger" onClick={navSlide}>
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                    <div className="line-three"></div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
