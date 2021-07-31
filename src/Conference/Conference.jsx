import React, {useState,useEffect} from 'react';
import './styles.css';
import {Markup} from 'interweave';
import Countdown from '../util/Countdown/Countdown';
import GoogleMapReact from 'google-map-react';
import { useParams } from 'react-router';

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
                    <div className="nav">
                        <div className="nav-item"> <a href="/">ABOUT</a></div>
                        <div className="nav-item"> <a href="/1">AGENDA</a></div>
                        <div className="nav-item"> <a href="/3">SPEAKERS</a></div>
                        <div className="nav-item"> <a href="/4">DELEGATES</a></div>
                        <div className="nav-item"> <a href="/2">SPONSORS</a></div>

                    </div>
                </div>
                    <div className="mt-5 pr-5 pl-5 text-left">
                        <Markup content={data.content.rendered}></Markup>
                    </div>
            </div>

            : "loading..."}
        </div>
    )
}

export default Conference;