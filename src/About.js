import React from 'react';
import './Home.sass';

function About() {
    return (
        <div className="About">
            <h1>About page</h1>
            <svg viewBox='0 0 1024 768' preserveAspectRatio='none'>
                <path d='M0,750 C650,730 500,154 1024,154 L1024,0 0,0 0,750' fill='#1f1d22' />
            </svg>
        </div>
    );
}

export default About;