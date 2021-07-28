import React from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from './components/NewsFeed';
import Poll from './components/Poll';

function SideMenu (props){
    return(
        <div className="side-menu-container">
            <SideContainer conferences={props.conferences}/>
            <Poll />
            <NewsFeed />
        </div>
    )
}

export default SideMenu;