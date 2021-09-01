import React from 'react';
import moment from 'moment';
import {Markup} from "interweave";

import './styles.css';

function Feature (props){
    return(
        <div className="feature-container text-center">
            <iframe height="600" width="800" className="video" src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="sub-article-title">{props.title ? props.title : ""}</div>
            <div className="category edit-category  ml-auto mr-auto mt-5 mb-5"> <p className="standby-txt">* Standby as we initiate the expansion of our digital interview programming </p></div>

        </div>
    )
}

export default Feature;