import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/NewsFeed';
import Poll from '../util/Poll';
import Editorial from '../util/Editorial/Editorial';

function PrimaryMenu (props){
    const [currentWindow, setCurrentWindow] = useState(window.location.pathname);
    useEffect(() => {
        setCurrentWindow(window.location.pathname)
    },[window.location.pathname])
    console.log(props.editorial)
    return(
        <>
            <div className="side-menu-container text-left">
                <SideContainer conferences={props.conferences.slice(0,4)}/>
                {currentWindow === "/" ?
                    <Editorial
                        id={props.editorial.id}
                        title={props.editorial.title.rendered}
                        img={props.editorial.acf.image}
                        excerpt={props.editorial.excerpt.rendered}
                        comments={props.comments}
                    />
                :""}
                <Poll />
                <NewsFeed />
            </div>
        </>
    )
}

export default PrimaryMenu;