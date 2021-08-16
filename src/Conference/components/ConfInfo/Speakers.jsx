import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PageLoader from '../../../util/Loader';


function Speakers(props){
    const [speakers,setSpeakers] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(props.speakers) {
            const ids = props.speakers.toString();
            const fetch = async () => {
                try{
                    const {data}= await axios(`https://skytop-strategies.com/wp-json/wp/v2/people?include=${ids}`);
                    setSpeakers(data);
                    console.log(data);
                    setLoaded(true);
                }catch(err){
                    console.log(err);
                }
            }
            fetch()
        }
        
    },[])
    const renderSpeakers = (speakers) => {
        return speakers.map(speaker => 
            <div>
                <img className="speaker-img" src={speaker.acf.image}></img>
                <h3><u>{speaker.acf.name}</u></h3>
                <h5>{speaker.acf.job_title}</h5>
                <h5>{speaker.acf.company}</h5>
                <h5>{speaker.acf.location}</h5>
            </div>
        )
    }
    return(
        <div>
            <p className="category conf-info-title poll-title">speakers</p>
            <div className="speakers mt-5 mb-5">
                {loaded ? renderSpeakers(speakers) : <PageLoader/>}
            </div>
        </div>
    )
}

export default Speakers;