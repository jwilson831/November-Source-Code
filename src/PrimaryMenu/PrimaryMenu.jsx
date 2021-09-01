import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/News/NewsFeed';
import Poll from '../util/Poll/Poll';
import Editorial from '../util/Editorial/Editorial';
import Publisher from '../util/Publisher/Publisher';

function PrimaryMenu (props){
    const [currentWindow, setCurrentWindow] = useState(window.location.pathname);
    useEffect(() => {
        setCurrentWindow(window.location.pathname)
    },[window.location.pathname])
    return(
        <>
            <div className="side-menu-container text-left">
                <SideContainer conferences={props.conferences}/>
                {window.location.pathname === "/" ?
                <div>
                    <Editorial
                        id={props.editorial.id}
                        title={props.editorial.title.rendered}
                        img={props.editorial.acf.image}
                        excerpt={props.editorial.excerpt.rendered}
                        comments={props.comments}
                    />
                    <Publisher/>
                    </div>
                :""}
                <a href={props.ad_link} target="_blank">
                    <img className="menu-advert" src={props.ad}></img>
                </a>
                <Poll />
                <NewsFeed />
            </div>
        </>
    )
}

export default PrimaryMenu;