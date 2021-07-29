import React from 'react';
import moment from 'moment';
import {Markup} from "interweave";

import './styles.css';
import {Link} from 'react-router-dom';

function Feature (props){
    const renderArticles = (data) => {
        return data.map(data => 
            <div className="card">
                <img className="card-img-top" src={data._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap"></img>
                <div className="card-body">
                    {window.location.pathname === "/" ? <div className="category"><p className="cat-text">{data.acf.category} </p></div> : ""}
                    <Link to={`articles/${data.id}`}>
                        <h5 className="card-title"><Markup content={data.title.rendered}></Markup></h5>
                    </Link>
                    {/* <div className="excerpt">
                        {data.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
                    </div> */}
                    <div className="byline">
                        <p className="m-0">By {data.acf.author} / {moment(data.date).format("MMMM Do, YYYY")}</p>
                    </div>
                </div>
            </div>
        )
    }
    
    return(
        <div className="feature-container">
            {props.data ? renderArticles(props.data) : "Loading..."}
        </div>
    )
}

export default Feature;