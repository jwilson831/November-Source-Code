import React from 'react';
import {Markup} from 'interweave';
import Sponsors from './Sponsors';

function About(props){
    return(
        <div>
            <div className="about-grid mr-3">
                <div className="about-box engage">
                    <p className="about-title">ENGAGE</p>
                    <p className="about-txt"><Markup content={props.engage}></Markup></p>
                    
                </div>
                <div className="about-box discover">
                    <p className="about-title">DISCOVER</p>
                    <p className="about-txt"><Markup content={props.discover}></Markup></p>
                    
                </div>
                <div className="about-box apply">
                    <p className="about-title">APPLY</p>
                    <p className="about-txt"><Markup content={props.apply}></Markup></p>
                </div>
            </div>
        </div>
    )
}

export default About;