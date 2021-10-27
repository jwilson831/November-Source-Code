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
                    <a href={"https://www.spglobal.com/en/"} target="_blank">
                        <img className="menu-advert" src={"https://utcoleca.sirv.com/SKYTOP/S_P%20Global%20S1%20Climate%20Week-Event%20Collaterals-01_Climate%20Week%20Event%20Page-800x800%202.png"}></img>
                    </a>
                    <Editorial
                        id={props.editorial.id}
                        category={"Editor's Note"}
                        title={props.editorial.title.rendered}
                        img={props.editorial.acf.image}
                        author={props.editorial.acf.author}
                        excerpt={props.editorial.excerpt.rendered}
                        link={"/editorial"}
                        comments={props.comments}
                        email={"cskroupa@skytopstrategies.com"}
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
                        email={"asullivan@skytopstrategies.com"}
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