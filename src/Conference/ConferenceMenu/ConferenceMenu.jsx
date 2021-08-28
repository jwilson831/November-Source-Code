import React, {useState,useEffect} from 'react';
import Map from '../../util/Map';
import Poll from '../../util/Poll/Poll';
import {useParams} from 'react-router-dom';
import './styles.css'
import PageLoader from '../../util/Loader';
import NewsFeed from '../../util/News/NewsFeed';


function ConferenceMenu(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {        
        const selectCurrentConference = (conferences) => {
            return (conferences.find(conf => conf.id === parseInt(id)))
        }
        setData(selectCurrentConference(props.conferences));
        setLoaded(true);
    },[])
    return(
    
        <div className="conf-menu-container">
            {loaded ? 
            <div>
                <Map address={data.acf.street_address}/>
                <div className="map-text">
                    <p className="convene">Convene</p>
                    <p className="convene-address">{data.acf.street_address}</p>
                </div>
            </div>
            : <PageLoader/>}
            <Poll />
            <NewsFeed/>
        </div>
        )
}

export default ConferenceMenu;