import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/NewsFeed';
import Poll from '../util/Poll/Poll';
import Editorial from '../util/Editorial/Editorial';
import Advert from '../util/Advert/Advert';
import ad from '../util/Advert/CMi2i.png'

function PrimaryMenu (props){
    const [currentWindow, setCurrentWindow] = useState(window.location.pathname);
    useEffect(() => {
        setCurrentWindow(window.location.pathname)
    },[window.location.pathname])
    console.log(props.editorial)
    return(
        <>
            <div className="side-menu-container text-left">
                <SideContainer conferences={props.conferences.slice(0,3)}/>
                {window.location.pathname === "/" ?
                
                    <Editorial
                        id={props.editorial.id}
                        title={props.editorial.title.rendered}
                        img={props.editorial.acf.image}
                        excerpt={props.editorial.excerpt.rendered}
                        comments={props.comments}
                    />
                :""}
                <img className="menu-advert" src={ad}></img>
                <Poll />
                <NewsFeed />
            </div>
        </>
    )
}

export default PrimaryMenu;