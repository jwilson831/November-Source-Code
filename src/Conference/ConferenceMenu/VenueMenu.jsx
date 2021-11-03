import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../util/scrollToTop';
import './styles.css';

function VenueMenu(props){
    
    return(
        <div>
            <div className="category">
                <p className="cat-text">Venue</p>
            </div>
            <div className="register-box">
                <strong><h4>{props.venue_name}</h4></strong>
                <img alt="venue" className="venue-img" src={props.venue_image}></img>
                <Link to={`/conferences/${props.conf_id}/venues/${props.venue_id}`}>
                    <button onClick={() => scrollToTop()}className="btn btn-primary comment-btn">Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default VenueMenu;