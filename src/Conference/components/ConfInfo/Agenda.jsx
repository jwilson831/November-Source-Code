import React from 'react';
import {Markup} from 'interweave';

function Agenda(props){
    return(
        <>
        <div className="agenda-container">
            <Markup content={props.agenda}></Markup>
        </div>
        </>
    )
}

export default Agenda;