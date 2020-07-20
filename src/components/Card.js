import React from 'react';
import '../styles/Webpage.sass';

// CARD WRAPPER COMPONENT
const Card = ({children, heading}) => {          
    return (
        <div className="section-box">
            <h3 className="section-heading">{heading}</h3>
            {children}
        </div>
    );
};

export default Card;