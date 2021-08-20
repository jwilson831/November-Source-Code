import React from 'react';
import './styles.css';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import CommentsBox from '../CommentsBox/CommentsBox';

function Editorial(props){
    return(
        <div className="edit-container">
            <div className="category edit-category">
                <p className="cat-text">Editor's Note</p>
            </div>
            <img className="edit-img" src={props.img}></img>
            <p className="edit-title"><Markup content={props.title}></Markup></p>
            <p className="edit-text"><Markup content={props.excerpt}></Markup><span></span></p>
            <Link to="/editorial">
                <button className="btn sky-submit mb-3">See More</button>
            </Link>
            <p className="edit-name">By Christopher P. Skroupa, Editor in Chief</p>
            <div className="pl-3 recents-comments ">
                <CommentsBox comments={props.comments} id={props.id}/>
            </div>
        </div>
    )
}

export default Editorial;