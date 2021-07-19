import React, {useState, useEffect} from 'react';
import './styles.css';
import Feature from './components/Feature/Feature';
import Recents from './components/Recents/Recents';
import SubFeatures from './components/SubFeatures/SubFeatures';
import SideMenu from '../SideMenu/SideMenu';

function Home (props){
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        if(props.articles){
            setArticles(props.articles)
        }
    })

    return(
        <div className="home-grid">
            <div className="feature"><Feature data={articles[0]}/></div>
            <div className="subfeature"><SubFeatures articles={articles}/></div>
            <div className="recent"><Recents/></div>
        </div>
    )
}

export default Home;