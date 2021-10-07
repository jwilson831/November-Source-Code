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
import Sponsors from './components/ConfInfo/Sponsors';


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
                    // <About  name="sponsors" data={data} engage={data.acf.engage} discover={data.acf.discover} apply={data.acf.apply}/>,
                    <Sponsors 
                    key={0}
                        name="sponsors" 
                        lead={data.acf.lead_sponsors}
                        co_lead={data.acf.co_lead_sponsors}
                        title_sponsors={data.acf.title_sponsors}
                        program={data.acf.program_sponsors}
                        strategic={data.acf.strategic_partners}
                        network={data.acf.networking_partners}
                        amb={data.acf.ambassador_sponsors}
                    />,
                    <Agenda key={1} name="agenda" agenda={data.content.rendered}/>,
                    <Speakers key={2} name="speakers" speakers={data.acf.speakers}/>,
                    <Delegates key={3} name="delegates" delegates={data.acf.delegates}/>
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
                    <About  name="sponsors" data={data} engage={data.acf.engage} discover={data.acf.discover} apply={data.acf.apply}/>
    
                    <ConfNav clickHandler={clickHandler} active={key} info={info}/>
                    <div className="mt-3 text-left conf-content">
                        <div className="text-right">
                            <PastInfoMenu 
                                info={info[key].props.name} 
                                pastConf={data.acf.past_conferences}
                                pastInfoClickHandler={pastInfoClickHandler}
                            />
                        </div> 
                        {info[key]}
                    </div>
                    {<PastInfo title={pastTitle} content={pastContent}/>}
                </div>
            : <PageLoader/>}
        </>
    )
}

export default Conference;