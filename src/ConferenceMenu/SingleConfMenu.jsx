import React from 'react';
import NewsFeed from '../util/NewsFeed';
import Poll from '../util/Poll';


function SingleConfMenu(props){
    return(
        <div>
            <h1>single conference side menu</h1>
            <NewsFeed/>
            <Poll />
        </div>
        )
}

export default SingleConfMenu;