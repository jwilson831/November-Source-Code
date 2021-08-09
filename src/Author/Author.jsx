import React from 'react';
import {Markup} from 'interweave';

function Author(props){
    return(
        <div className="author-content text-left">
            <img className="author-img" src={props.img}></img>
            <p className="author-name">{props.name}</p>
            <div className="p-3">
                <p className="author-text"><Markup content={props.bio}></Markup></p>
            </div>
        </div>
    )
}
export default Author;