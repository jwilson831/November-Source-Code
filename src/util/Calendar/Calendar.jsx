import { Markup } from 'interweave';
import React from 'react';
import './styles.css';

function Calendar(props){
    return(
        <div className="cal-container">
            <div className="cal-header">
                <img className="cal-img"src="https://utcoleca.sirv.com/skytop%20logo%20FINAL.png" alt="" />
                <p className="section-title m-auto">2022 Editorial Calendar</p>
            </div>
            <div className="cal-dates">
                <p><Markup content={props.calendar.content.rendered}></Markup> </p>
            </div>
        </div>
    )
}

export default Calendar;