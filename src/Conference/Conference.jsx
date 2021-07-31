import React, {useState,useEffect} from 'react';
import './styles.css';
import { Markup } from 'interweave';
import { useParams } from 'react-router';
import ConfNav from './components/ConfNav';
import ConfCard from './components/ConfCard';
import Map from './components/Map';


function Conference(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {        
        const selectCurrentConference = (conferences) => {
            return (conferences.find(conf => conf.id === parseInt(id)))
        }
        setData(selectCurrentConference(props.conferences));
        setLoaded(true);
        console.log(selectCurrentConference(props.conferences))
    },[])

    return(
        <>
            {loaded ?
            <div className="conference-container" >
                <ConfCard 
                    imgUrl={data._embedded["wp:featuredmedia"][0].source_url}
                    title={data.title.rendered}
                    tagline={data.acf.tagline}
                    city={data.acf.city}
                    date={data.acf.date}
                />    
                <ConfNav />
                <div className="mt-3 pt-5 pr-5 pl-5 text-left conf-content">
                    <Markup content={data.content.rendered}></Markup>
                    <Map address={data.acf.street_address} city={data.acf.city}/>
                </div>
            </div>

            : "loading..."}
        </>
    )
}

export default Conference;