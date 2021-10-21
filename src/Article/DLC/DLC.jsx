import React from 'react';
import './styles.css';

function DLC(props){

    return (
        <div className="poll-container mt-0 text-center">
            <p className="section-title mb-0">{props.title}</p>
            <img className="card-img"src={props.image}></img>
            <a href={props.file} download>
                <button className="btn btn-primary comment-btn">Download <i class="fas fa-download"></i></button>
            </a>
        </div>
    )
}

export default DLC;