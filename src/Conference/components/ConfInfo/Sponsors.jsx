import React from 'react';
import {Markup} from 'interweave';
import './styles.css';

function Sponsors(props){
    const renderSponsors = (sponsors) => {
        return (
            <div className={sponsors.length > 1? "sponsor-grid-2" : "sponsor-grid-1"}>
            {   sponsors.map(sponsor =>{ 
                    if(sponsor.post_content){
                        return <Markup content={sponsor.post_content}></Markup>
                    }else{
                        return sponsor.content.rendered
                    }
                })
            }
            </div>
        )
    }
    return(
        <div className="sponsors-container">
            <p>WE THANK OUR SPONSORS FOR SUPPORTING THIS PROGRAM!</p>
            <div className="sponsors">
                {props.all ?
                    <div>
                        <hr></hr>
                        {renderSponsors(props.all)}
                    </div> : ""
                } 
                {props.lead ?
                    <div>
                        <p className="sponsor-cat-txt">
                            Lead Sponsors
                            <hr></hr>
                        </p>
                        {renderSponsors(props.lead)}
                    </div> : ""
                } 
                {props.co_lead ?
                    <div className="sponsor-type">
                        <p className="sponsor-cat-txt">
                            Co-Lead Sponsors
                            <hr></hr>
                        </p>
                        {renderSponsors(props.co_lead)}
                    </div> : ""
                }
                {props.amb ?
                    <div className="sponsor-type">
                        <p className="sponsor-cat-txt">
                            Ambassador Sponsors
                            <hr></hr>
                        </p>
                            {renderSponsors(props.amb)}
                    </div> : ""
                }  
                {props.title_sponsors ?
                    <div className="sponsor-type">
                        <p className="sponsor-cat-txt">
                            Title Sponsors
                            <hr></hr>
                        </p>
                        {renderSponsors(props.title_sponsors)}

                    </div> : ""
                } 
                {props.program ?
                    <div className="sponsor-type">
                        <p className="sponsor-cat-txt">
                            Program Sponsors
                            <hr></hr>
                        </p>
                        {renderSponsors(props.program)}
                    </div> : ""
                } 
                {props.strategic ?
                    <div className="sponsor-type">
                        <p className="sponsor-cat-txt">
                            Strategic Partners
                            <hr></hr>
                        </p>
                        {renderSponsors(props.strategic)}

                    </div> : ""
                } 
                {props.network ?
                    <div className="sponsor-type">
                        <p className="sponsor-cat-txt">
                            Networking Partners
                            <hr></hr>                        
                        </p>
                            {renderSponsors(props.network)}
                    </div> : ""
                } 
                
            </div>
        </div>
    )
}

export default Sponsors;