import React from 'react';
import {Markup} from 'interweave';
function Agenda(props){
    return(
        <div className="agenda-container">
            <p className="category conf-info-title poll-title">Agenda</p>
            <Markup content={props.agenda}></Markup>
        </div>
    )
}

export default Agenda;