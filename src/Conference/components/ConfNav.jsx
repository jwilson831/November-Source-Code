import React from 'react';

function ConfNav(){

    const scrollToSection = (className) => {
        document.querySelector(`.${className}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    };
    return(
        <div className="nav conf-nav">
            <div className="nav-item"> <a onClick={() => scrollToSection("about")}>ABOUT</a></div>
            <div className="nav-item"> <a onClick={() => scrollToSection("agenda")}>AGENDA</a></div>
            <div className="nav-item"> <a onClick={() => scrollToSection("speakers")}>SPEAKERS</a></div>
            <div className="nav-item"> <a onClick={() => scrollToSection("delegates")}>DELEGATES</a></div>
            <div className="nav-item"> <a onClick={() => scrollToSection("sponsors")}>SPONSORS</a></div>
        </div>
    )
}

export default ConfNav;