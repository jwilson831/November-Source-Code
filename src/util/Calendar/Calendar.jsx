import { Markup } from 'interweave';
import React from 'react';
import './styles.css';

function Calendar(props){
    return(
        <div className="cal-container">
            <p className="section-title"><Markup content={props.calendar.title.rendered}></Markup></p>
            <div className="cal-dates">
                <p><Markup content={props.calendar.content.rendered}></Markup> </p>
            </div>
        </div>
    )
}

export default Calendar;