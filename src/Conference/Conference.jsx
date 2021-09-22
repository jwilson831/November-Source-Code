import React, {useState,useEffect} from 'react';
import './styles.css';
import { useParams } from 'react-router';
import ConfNav from './components/ConfNav';
import ConfCard from './components/ConfCard';

import About from './components/ConfInfo/About';
import Agenda from './components/ConfInfo/Agenda';
import Speakers from './components/ConfInfo/Speakers';
import Delegates from './components/ConfInfo/Delegates';
import PageLoader from '../util/Loader';
import { sendGAPageView } from '../util/GoogleAnalytics';
import Venue from './components/ConfInfo/Venue';


function Conference(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const [info,setInfo] = useState(null);
    const [key,setKey] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        sendGAPageView(window.location.pathname);    
        const selectCurrentConference = (conferences) => {
            try{
                const data = (conferences.find(conf => conf.id === parseInt(id)));
                setData(data);
                setInfo([
                    <About key={0} name="ABOUT" data={data} engage={data.acf.engage} discover={data.acf.discover} apply={data.acf.apply}/>,
                    <Agenda key={1} name="AGENDA" agenda={data.content.rendered}/>,
                    <Speakers key={2} name="SPEAKERS"speakers={data.acf.speakers}/>,
                    <Delegates key={3} name="DELEGATES" delegates={data.acf.delegates}/>
                ])

            }catch(err){
                console.error("No conference found");
            }
            setLoaded(true);
        }
        selectCurrentConference(props.conferences);
    },[])

    const clickHandler = (key) => {
        setKey(key);
    }

    return(
        <>
            {loaded ?
                <div className="conference-container" >
                    <ConfCard 
                        imgUrl={data.acf.location_image  ? data.acf.location_image : data._embedded["wp:featuredmedia"][0].source_url}
                        title={data.title.rendered}
                        tagline={data.acf.tagline}
                        city={data.acf.city}
                        date={data.acf.date}
                        custom_date={data.acf.custom_date}
                        product_id={data.acf.event_ticket[0]["ID"]}
                    />    
                    <ConfNav clickHandler={clickHandler} active={key} info={info}/>
                    <div className="mt-3 text-left conf-content">
                        {info[key]}
                    </div>
                </div>
            : <PageLoader/>}
        </>
    )
}

export default Conference;