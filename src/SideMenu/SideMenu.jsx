import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from './components/NewsFeed';
import Poll from './components/Poll';

function SideMenu (props){
    return(
        <>
            <div className="side-menu-container text-left">
                <SideContainer conferences={props.conferences.slice(0,4)}/>
                <Poll />
                <NewsFeed />
            </div>

        </>
    )
}

export default SideMenu;