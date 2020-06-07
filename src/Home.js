import React, { Component } from 'react';
import fist from './fist.png';
import './Home.sass';

function App() {

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
    <div className="App">
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

export default App;
