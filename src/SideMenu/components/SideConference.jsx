import React from 'react';
import '../styles.css';

function SideConference(props){
    return(
        <div className="side-conference card">
            <img className="card-img" src={props.imgUrl}></img>
            <div className="card-img-overlay text-light">
                <p className="side-conf-title">{props ? props.title: ""}</p>
                <p className="side-conf-tagline">{props ? props.tagline: ""}</p>
            </div>
        </div>
    )
}

export default SideConference;