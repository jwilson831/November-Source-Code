import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function VenueMenu(props){
    return(
        <div>
            <div className="category">
                <p className="cat-text">Venue</p>
            </div>
            <div className="register-box">
                <strong><h4>{props.venue}</h4></strong>
                <img className="venue-img" src={props.venue_image}></img>
                <Link to={`/conferences/${props.id}/venue`}>
                    <button className="btn btn-primary comment-btn">Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default VenueMenu;