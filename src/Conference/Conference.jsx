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
import PastInfoMenu from './util/PastConferences/PastInfoMenu';
import { Markup } from 'interweave';
import PastInfo from './util/PastConferences/PastInfo';


function Conference(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const [info,setInfo] = useState(null);
    const [pastTitle,setPastTitle] = useState("");
    const [pastContent,setPastContent] = useState("");
    const [key,setKey] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        sendGAPageView(window.location.pathname);    
        const selectCurrentConference = (conferences) => {
            try{
                const data = (conferences.find(conf => conf.id === parseInt(id)));
                setData(data);
                setInfo([
                    <About key={0} name="about" data={data} engage={data.acf.engage} discover={data.acf.discover} apply={data.acf.apply}/>,
                    <Agenda key={1} name="agenda" pastConf={data.acf.past_conferences} agenda={data.content.rendered}/>,
                    <Speakers key={2} name="speakers" pastConf={data.acf.past_conferences} speakers={data.acf.speakers}/>,
                    <Delegates key={3} name="delegates" pastConf={data.acf.past_conferences} delegates={data.acf.delegates}/>
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

    const pastInfoClickHandler = (title,content) => {
        setPastTitle(title);
        setPastContent(content);
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
                        {key !== 0 ? 
                            <div className="text-right">
                                <PastInfoMenu 
                                    info={info[key].props.name} 
                                    pastConf={data.acf.past_conferences}
                                    pastInfoClickHandler={pastInfoClickHandler}
                                />
                            </div> 
                        :"" }
                        {info[key]}
                    </div>
                    {<PastInfo title={pastTitle} content={pastContent}/>}
                </div>
            : <PageLoader/>}
        </>
    )
}

export default Conference;