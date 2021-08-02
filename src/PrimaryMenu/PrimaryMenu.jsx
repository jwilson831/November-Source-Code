import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/NewsFeed';
import Poll from '../util/Poll';

function PrimaryMenu (props){
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

export default PrimaryMenu;