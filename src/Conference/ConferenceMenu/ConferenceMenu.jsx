import React, {useState,useEffect} from 'react';
import Map from '../../util/Map';
import {useParams} from 'react-router-dom';
import './styles.css'
import PageLoader from '../../util/Loader/Loader';
import Register from '../util/Register';
import VenueMenu from './VenueMenu';


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
    },[id,props.conferences])
    return(
    
        <div className="conf-menu-container">
            {loaded ?
            <> 
                <div>
                    <Map address={data.acf.street_address}/>
                    <div className="map-text">
                        {data.acf.street_address === data.acf.city ? 
                            <p className="convene-address">{data.acf.city}</p>
                        
                    :   <>
                            <p className="convene-address">{data.acf.street_address}</p>
                            <p className="convene-address">{data.acf.city}</p>
                        </>
                    }   
                    </div>
                </div>
                {data.acf.venue_info ? 
                    <VenueMenu
                        conf_id={id}
                        venue_id={data.acf.venue_info["ID"]} 
                        venue_image={data.acf.venue_image}
                        venue_name={data.acf.venue_info.post_title}
                    />
                    : ""
                }
                <Register products={data.acf.event_ticket}/>
            </>
            : <PageLoader/>}
        </div>
        )
}

export default ConferenceMenu;