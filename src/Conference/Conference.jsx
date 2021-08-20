import React, {useState,useEffect} from 'react';
import './styles.css';
import { Markup } from 'interweave';
import { useParams } from 'react-router';
import ConfNav from './components/ConfNav';
import ConfCard from './components/ConfCard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './components/ConfInfo/About';
import Agenda from './components/ConfInfo/Agenda';
import Speakers from './components/ConfInfo/Speakers';
import Delegates from './components/ConfInfo/Delegates';
import Sponsors from './components/ConfInfo/Sponsors';
import PageLoader from '../util/Loader';


function Conference(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const [info,setInfo] = useState(null);
    const [key,setKey] = useState(0);
    const { id } = useParams();

    useEffect(() => {    
        const selectCurrentConference = (conferences) => {
            try{
                const data = (conferences.find(conf => conf.id === parseInt(id)));
                setData(data);
                setInfo([
                    <About engage={data.acf.engage} discover={data.acf.discover} apply={data.acf.apply}/>,
                    <Agenda agenda={data.content.rendered}/>,
                    <Speakers speakers={data.acf.speakers}/>,
                    <Delegates delegates={data.acf.delegates}/>,
                    <Sponsors 
                        lead={data.acf.lead_sponsors}
                        co_lead={data.acf.co_lead_sponsors}
                        title_sponsors={data.acf.title_sponsors}
                        program={data.acf.program_sponsors}
                        strategic={data.acf.strategic_partners}
                        network={data.acf.networking_partners}
                        amb={data.acf.ambassador_sponsors}
                    />
                ])

            }catch(err){
                console.log("No conference found");
            }
            setLoaded(true);
        }
        selectCurrentConference(props.conferences);
    },[])

    const clickHandler = (key) => {
        setKey(key);
    }
    console.log(data);
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
                    product_id={data.acf.event_ticket[0]["ID"]}
                />    
                <ConfNav clickHandler={clickHandler}/>
                <div className="mt-3 pt-5 pr-5 pl-2 text-left conf-content">
                    {info[key]}
                </div>
            </div>

            : <PageLoader/>}
        </>
    )
}

export default Conference;