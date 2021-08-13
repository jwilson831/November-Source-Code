import React from 'react';
import {Markup} from 'interweave';

function About(props){
    return(
        <div>
            <div className="engage">
                <p>ENGAGE</p>
                <Markup content={props.engage}></Markup>
            </div>
            <div className="discover">
                <p>DISCOVER</p>
                <Markup content={props.discover}></Markup>
            </div>
            <div className="apply">
                <p>APPLY</p>
                <Markup content={props.apply}></Markup>
            </div>
        </div>
    )
}

export default About;