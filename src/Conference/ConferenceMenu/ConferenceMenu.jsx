import React, {useState,useEffect} from 'react';
import Map from '../../util/Map';
import Poll from '../../util/Poll/Poll';
import {useParams} from 'react-router-dom';
import './styles.css'
import PageLoader from '../../util/Loader';
import NewsFeed from '../../util/News/NewsFeed';
import Register from '../components/Register';


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
            <> 
                <div>
                    <Map address={data.acf.street_address}/>
                    <div className="map-text">
                        <p className="convene-address">{data.acf.street_address}</p>
                        <p className="convene-address">{data.acf.city}</p>
                    </div>
                </div>
                <Register products={data.acf.event_ticket}/>
            </>
            : <PageLoader/>}
            <Poll />
            <NewsFeed/>
        </div>
        )
}

export default ConferenceMenu;