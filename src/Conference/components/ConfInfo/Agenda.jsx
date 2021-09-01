import React from 'react';
import {Markup} from 'interweave';
function Agenda(props){
    return(
        <>
        <p className="category conf-info-title poll-title">Agenda</p>
        <div className="agenda-container">
            <Markup content={props.agenda}></Markup>
        </div>
        </>
    )
}

export default Agenda;