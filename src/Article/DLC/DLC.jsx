import React from 'react';
import './styles.css';

function DLC(props){

    return (
        <div className="dlc-box poll-container mt-5 text-center">
            <p className="section-title mb-0">{props.title}</p>
            <img className="dlc-img mt-3"src={props.image} alt="dlc"></img>
            <a href={props.file} download>
                <button className="btn btn-primary comment-btn mt-4">Download <i className="fas fa-download"></i></button>
            </a>
        </div>
    )
}

export default DLC;