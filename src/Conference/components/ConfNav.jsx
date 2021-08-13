import React from 'react';

function ConfNav(props){
    return(
        <div className="nav conf-nav">
            <div className="nav-item"> <a onClick={() => props.clickHandler(0)}>ABOUT</a></div>
            <div className="nav-item"> <a onClick={() => props.clickHandler(1)}>AGENDA</a></div>
            <div className="nav-item"> <a onClick={() => props.clickHandler(2)}>SPEAKERS</a></div>
            <div className="nav-item"> <a onClick={() => props.clickHandler(3)}>DELEGATES</a></div>
            <div className="nav-item"> <a onClick={() => props.clickHandler(4)}>SPONSORS</a></div>
        </div>
    )
}

export default ConfNav;