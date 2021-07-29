import React from 'react';
import '../styles.css';
import SideConference from './SideConference';

function SideContainer(props){
    const renderConferences = (conferences) => {
        return conferences.map(conference => 
            <SideConference 
                title={conference.title.rendered}
                tagline={conference.acf.tagline}
                imgUrl={conference._embedded ? conference._embedded["wp:featuredmedia"][0].source_url : null}
                city={conference.acf.city}
                date={conference.acf.date}
            />    
        )
    }
    return(
        <div className="conference-container">
            <p className="section-title">Conferences</p>
            {props.conferences ? renderConferences(props.conferences) : ""}
        </div>
    )
}

export default SideContainer;