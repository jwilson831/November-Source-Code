import React, {useState,useEffect} from 'react';
import './styles.css';
import {Markup} from 'interweave';
import Countdown from '../util/Countdown/Countdown';
import GoogleMapReact from 'google-map-react';
import { useParams } from 'react-router';
import { scroller } from "react-scroll";
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

function Conference(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {        
        const selectCurrentConference = (conferences) => {
            return (conferences.find(conf => conf.id === parseInt(id)))
        }
        setData(selectCurrentConference(props.conferences));
        setLoaded(true);
    },[])

    const scrollToSection = (className) => {
        document.querySelector(`.${className}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    };

    return(
        <div className="" >
            {loaded ?
            <div>    
                <div className="card mr-3">
                    <img className="card-img-top conf-img" src={data._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap"></img>
                    <div className="conf-info card-img-overlay text-light text-left conf-text">
                        <div>
                            <p className="conf-title"><Markup content={data.title.rendered}></Markup></p>
                            <p className="conf-tagline"><Markup content={data.acf.tagline}></Markup></p>
                        </div>
                        <span className="countdown">00 : 00 : 00</span>
                        <button className="btn btn-primary register-button">Register</button>
                        {/* <Countdown date={data.acf.date}/> */}
                        <div className="conf-date-locale text-right mr-5">
                            <p className="side-data">{data.acf.city}</p>
                            <p className="side-data">{data.acf.date}</p>
                        </div>

                    </div>
                    <div className="nav conf-nav">
                        <div className="nav-item"> <a onClick={() => scrollToSection("about")}>ABOUT</a></div>
                        <div className="nav-item"> <a onClick={() => scrollToSection("agenda")}>AGENDA</a></div>
                        <div className="nav-item"> <a onClick={() => scrollToSection("speakers")}>SPEAKERS</a></div>
                        <div className="nav-item"> <a onClick={() => scrollToSection("delegates")}>DELEGATES</a></div>
                        <div className="nav-item"> <a onClick={() => scrollToSection("sponsors")}>SPONSORS</a></div>

                    </div>
                </div>
                    <div className="mt-3 pt-5 pr-5 pl-5 text-left conf-content">
                        <Markup content={data.content.rendered}></Markup>
                    </div>
            </div>

            : "loading..."}
        </div>
    )
}

export default Conference;