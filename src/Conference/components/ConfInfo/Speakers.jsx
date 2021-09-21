import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './styles.css'
import PageLoader from '../../../util/Loader';


function Speakers(props){
    const [speakers,setSpeakers] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(props.speakers) {
            const ids = props.speakers.toString();
            const fetch = async () => {
                try{
                    const {data}= await axios(`https://skytop-strategies.com/wp-json/wp/v2/people?include=${ids}&per_page=100`);
                    setSpeakers(data);
                    setLoaded(true);
                }catch(err){
                    console.error(err);
                }
            }
            fetch()
        }
        
    },[])
    const renderSpeakers = (speakers) => {
        return speakers.map(speaker => 
            <div className="speaker">
                <img className="speaker-img" src={speaker.acf.image}></img>
                <h5><u>{speaker.acf.name}</u></h5>
                <p>{speaker.acf.job_title}</p>
                <p>{speaker.acf.company}</p>
                <p>{speaker.acf.location}</p>
            </div>
        )
    }
    return(
        <div>
            <div className="speakers mt-5 mb-5">
                {loaded ? renderSpeakers(speakers) : <PageLoader/>}
            </div>
        </div>
    )
}

export default Speakers;