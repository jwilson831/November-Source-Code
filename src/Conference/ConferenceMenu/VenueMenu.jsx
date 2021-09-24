import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function VenueMenu(props){
    console.log(props)
    return(
        <div>
            <div className="category">
                <p className="cat-text">Venue</p>
            </div>
            <div className="register-box">
                <strong><h4>{props.venue_name}</h4></strong>
                <img className="venue-img" src={props.venue_image}></img>
                <Link to={`/conferences/${props.conf_id}/venues/${props.venue_id}`}>
                    <button className="btn btn-primary comment-btn">Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default VenueMenu;