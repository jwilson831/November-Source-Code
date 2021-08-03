import React from "react";
import {Markup} from 'interweave';
import Countdown from "../../util/Countdown";

function ConfCard(props){
    return (
        <div className="card mr-3">
            <img className="card-img-top conf-img" src={props.imgUrl} alt="Card image cap"></img>
            <div className="conf-info card-img-overlay text-light text-left conf-text">
                <div>
                    <p className="conf-title"><Markup content={props.title}></Markup></p>
                    <p className="conf-tagline"><Markup content={props.tagline}></Markup></p>
                </div>
                <Countdown date={props.date}/>
                <button className="btn btn-primary register-button">
                    <a className="text-light" href="https://skytop-strategies.com/cart/?add-to-cart=428" target="_blank">Register</a>
                </button>
                
                <div className="conf-date-locale text-right mr-5">
                    <p className="conf-side-data">{props.city}</p>
                    <p className="conf-side-data">{props.date}</p>
                </div>
            </div>
        </div>
    )
}
export default ConfCard;