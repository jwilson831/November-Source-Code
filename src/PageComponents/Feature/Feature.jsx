import React from 'react';
import moment from 'moment';
import {Markup} from "interweave";

import './styles.css';
import {Link} from 'react-router-dom';

function Feature (props){
    // const renderArticles = (data) => {
    //     return data.map(data => 
    //         <div className="card">
    //             <img className="card-img-top" src={data._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap"></img>
    //             <div className="card-body">
    //                 {window.location.pathname === "/" ? <div className="category"><p className="cat-text">{data.acf.category} </p></div> : ""}
    //                 <Link to={`articles/${data.id}`}>
    //                     <h5 className="card-title"><Markup content={data.title.rendered}></Markup></h5>
    //                 </Link>
    //                 <div className="byline">
    //                     <p className="m-0">By {data.acf.author.post_title} / {moment(data.date).format("MMMM Do, YYYY")}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    return(
        <div className="feature-container">
            <iframe height="600" width="800" className="video" src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Feature;