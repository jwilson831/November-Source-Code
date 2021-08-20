import React from 'react';
import {Markup} from 'interweave';
import './styles.css';

function Sponsors(props){
    const renderSponsors = (sponsors) => {
        return sponsors.map(sponsor => 
            <Markup content={sponsor.post_content}></Markup>
        )
    }
    return(
        <div className="sponsors-container">
            <p className="category conf-info-title poll-title mb-5">Sponsors</p>
            <p className="conf-info-title">WE THANK OUR SPONSORS FOR SUPPORTING THIS PROGRAM!</p>
            <div className="sponsors">
                {props.lead ?
                    <div>
                        <p className="sponsor-cat-txt">Lead Sponsors</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.lead)}
                        </div>
                    </div> : ""
                } 
                {props.co_lead ?
                    <div>
                        <p className="sponsor-cat-txt">Co-Lead Sponsors</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.co_lead)}
                        </div>
                    </div> : ""
                } 
                {props.title_sponsors ?
                    <div>
                        <p className="sponsor-cat-txt">Title Sponsors</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.title_sponsors)}
                        </div>
                    </div> : ""
                } 
                {props.program ?
                    <div>
                        <p className="sponsor-cat-txt">Program Sponsors</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.program)}
                        </div>
                    </div> : ""
                } 
                {props.strategic ?
                    <div>
                        <p className="sponsor-cat-txt">Strategic Partners</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.strategic)}
                        </div>
                    </div> : ""
                } 
                {props.network ?
                    <div>
                        <p className="sponsor-cat-txt">Networking Partners</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.network)}
                        </div>
                    </div> : ""
                } 
                {props.amb ?
                    <div>
                        <p className="sponsor-cat-txt">Ambassador Sponsors</p>
                        <hr></hr>
                        <div className="sponsor-grid">
                            {renderSponsors(props.amb)}
                        </div>
                    </div> : ""
                } 
            </div>
        </div>
    )
}

export default Sponsors;