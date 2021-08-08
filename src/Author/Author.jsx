import React from 'react';
import Recents from '../PageComponents/Recents/Recents';

function Author(props){
    return(
        <div>
            <h1>Author Page</h1>
            <div className="recent"><Recents articles={props.articles.slice(1,4)} comments={props.comments}/></div>
        </div>
    )
}

export default Author;