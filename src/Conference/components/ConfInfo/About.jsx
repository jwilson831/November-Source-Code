import React from 'react';
import {Markup} from 'interweave';
import Sponsors from './Sponsors';

function About(props){
    return(
        <div>
            <div className="about-grid">
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
            <div className="mt-5">
                <Sponsors 
                        lead={props.data.acf.lead_sponsors}
                        co_lead={props.data.acf.co_lead_sponsors}
                        title_sponsors={props.data.acf.title_sponsors}
                        program={props.data.acf.program_sponsors}
                        strategic={props.data.acf.strategic_partners}
                        network={props.data.acf.networking_partners}
                        amb={props.data.acf.ambassador_sponsors}
                    />
            </div>
        </div>
    )
}

export default About;