import { Markup } from 'interweave';
import React from 'react';
import './styles.css';

function Calendar(props){
    return(
        <>
        {props.calendar.content && 
            <div className="cal-container">
                <div className="cal-header text-center">
                    <img className="cal-img"src="https://utcoleca.sirv.com/skytop%20logo%20FINAL.png" alt="" />
                    <p className="section-title mt-auto mb-auto ml-4 mr-5">2022 Editorial Calendar</p>
                </div>
                <div className="cal-dates">
                    <p><Markup content={props.calendar.content.rendered}></Markup> </p>
                </div>
            </div>
        }
    </>
    )
}

export default Calendar;