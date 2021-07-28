import React from 'react';
import '../styles.css';
import SideConference from './SideConference';

function SideContainer(props){
    const renderConferences = (conferences) => {
        console.log(conferences)
        return conferences.map(conference => 
            <SideConference 
                title={conference.title.rendered}
                tagline={conference.acf.tagline}
                imgUrl={conference._embedded ? conference._embedded["wp:featuredmedia"][0].source_url : null}
            />    
        )
    }
    return(
        <div className="conference-container">
            <p id="side-conference-title" className="card-title">Conferences</p>
            {props.conferences ? renderConferences(props.conferences) : ""}
        </div>
    )
}

export default SideContainer;