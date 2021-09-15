import React from 'react';
import ViewAllBtn from '../../ViewAll/ViewAllBtn';
import '../styles.css';
import SideConference from './SideConference';

function SideContainer(props){
    const renderConferences = (conferences) => {
        return conferences.map(conference => 
            <SideConference 
                id={conference.id}
                title={conference.title.rendered}
                tagline={conference.acf.tagline}
                imgUrl={conference.acf.location_image ? conference.acf.location_image:  conference._embedded["wp:featuredmedia"][0].source_url}
                city={conference.acf.city}
                date={conference.acf.date}
                custom_date={conference.acf.custom_date}
            />    
        )
    }
    return(
        <div className="conference-container">
            <p className="section-title">Upcoming Conferences</p>
            <div className="side-conference-overflow">
                {props.conferences ? renderConferences(props.conferences) : ""}
            </div>
            <div className="text-right">
                <ViewAllBtn linkTo={"conference"}/>
            </div>
        </div>
    )
}

export default SideContainer;