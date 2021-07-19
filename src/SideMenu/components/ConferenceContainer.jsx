import React from 'react';
import '../styles.css';
import Conference from './Conference';

function ConferenceContainer(){
    return(
        <div className="conference-container">
            <p id="side-conference-title" className="card-title">Conferences</p>
            <Conference/>
        </div>
    )
}

export default ConferenceContainer;