import React from 'react';
import { Link } from 'react-router-dom';

function ViewAllBtn(props){
    return(
        <div className="view-all-container">
            <div className="view-all comments-box">
                {props.linkTo === "article" ?
                    <Link to="/index/articles"><p className="com-text text-light">View All</p></Link>
                    :
                    <Link to="/index/conferences"><p className="com-text text-light">View All</p></Link>
                }
            </div>
        </div>
    )
}

export default ViewAllBtn;