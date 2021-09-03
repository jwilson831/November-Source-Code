import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/News/NewsFeed';
import Poll from '../util/Poll/Poll';
import Editorial from '../util/Editorial/Editorial';

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
                        category={"Editor's Note"}
                        title={props.editorial.title.rendered}
                        img={props.editorial.acf.image}
                        author={props.editorial.acf.author}
                        excerpt={props.editorial.excerpt.rendered}
                        link={"/editorial"}
                        comments={props.comments}
                    />
                    <Editorial
                        id={props.publisher.id}
                        category={"Publisher's Note"}
                        title={props.publisher.title.rendered}
                        img={props.publisher.acf.image}
                        author={props.publisher.acf.author}
                        excerpt={props.publisher.excerpt.rendered}
                        link={"/publisher"}
                        comments={props.comments}
                    />
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