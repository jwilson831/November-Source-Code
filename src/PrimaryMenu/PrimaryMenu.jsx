import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/NewsFeed';
import Poll from '../util/Poll';
import Editorial from '../util/Editorial/Editorial';

function PrimaryMenu (props){
    console.log(props)
    return(
        <>
            <div className="side-menu-container text-left">
                <SideContainer conferences={props.conferences.slice(0,4)}/>
                <Editorial
                    id={props.editorial.id}
                    title={props.editorial.title.rendered}
                    img={props.editorial._embedded["wp:featuredmedia"][0].source_url}
                    excerpt={props.editorial.excerpt.rendered}
                    comments={props.comments}
                />
                <Poll />
                <NewsFeed />
            </div>
        </>
    )
}

export default PrimaryMenu;