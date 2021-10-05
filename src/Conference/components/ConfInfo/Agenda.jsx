import React from 'react';
import {Markup} from 'interweave';
import PastInfoMenu from '../../util/PastConferences/PastInfoMenu';
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