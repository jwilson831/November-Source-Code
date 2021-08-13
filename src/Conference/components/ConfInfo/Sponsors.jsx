import React from 'react';
import {Markup} from 'interweave';
import './styles.css';

function Sponsors(props){
    const renderSponsors = (sponsors) => {
        return sponsors.map(sponsor => <Markup content={sponsor.post_content}></Markup>)
    }
    return(
        <div className="sponsors-container">
            <p className="conf-info-title">WE THANK OUR SPONSORS FOR SUPPORTING THIS PROGRAM</p>
            <div className="sponsors"> 
                {props.sponsors ? renderSponsors(props.sponsors): ""}
            </div>
        </div>
    )
}

export default Sponsors;