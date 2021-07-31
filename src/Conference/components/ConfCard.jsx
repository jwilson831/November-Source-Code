import React from "react";
import {Markup} from 'interweave';

function ConfCard(props){
    return (
        <div className="card mr-3">
            <img className="card-img-top conf-img" src={props.imgUrl} alt="Card image cap"></img>
            <div className="conf-info card-img-overlay text-light text-left conf-text">
                <div>
                    <p className="conf-title"><Markup content={props.title}></Markup></p>
                    <p className="conf-tagline"><Markup content={props.tagline}></Markup></p>
                </div>
                <button className="btn btn-primary register-button">Register</button>
                
                <div className="conf-date-locale text-right mr-5">
                    <p className="side-data">{props.city}</p>
                    <p className="side-data">{props.date}</p>
                </div>
            </div>
        </div>
    )
}
export default ConfCard;