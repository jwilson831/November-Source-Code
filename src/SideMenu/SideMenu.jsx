import React from 'react';
import ConferenceContainer from './components/ConferenceContainer';
import NewsFeed from './components/NewsFeed';
import Poll from './components/Poll';

function SideMenu (){
    return(
        <div className="side-menu-container">
            <ConferenceContainer />
            <Poll />
            <NewsFeed />
        </div>
    )
}

export default SideMenu;