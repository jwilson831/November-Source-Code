import React from "react";
import {Markup} from 'interweave';
import Countdown from "../../util/Countdown";
import {Link} from 'react-router-dom';

function ConfCard(props){
    return (
        <div className="card mr-3">
            <img className="card-img-top conf-img" src={props.imgUrl} alt="conference"></img>
            <div className="card-img-overlay text-light text-left conf-text">
                <div>
                    {props.id ?
                        <Link className="text-light" to={`/conferences/${props.id}`}><p className="conf-title"><Markup content={props.title}></Markup></p></Link>
                        :
                        <p className="conf-title"><Markup content={props.title}></Markup></p>
                    }

                    <p className="conf-tagline"><Markup content={props.tagline}></Markup></p>
                </div>
                {props.date !== "" ? <Countdown date={props.date}/> : ""}
                
                
                
                <div className="conf-date-locale text-right mr-5">
                    <p className="conf-side-data">{props.city}</p>
                    {props.custom_date ? 
                        <p className="conf-side-data">{props.custom_date}</p>
                    :
                        <p className="conf-side-data">{props.date}</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default ConfCard;