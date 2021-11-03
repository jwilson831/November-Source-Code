import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PageLoader from '../../../util/Loader';

function Delegates(props){
    const [delegates,setDelegates] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(props.delegates){
            const ids = props.delegates.toString();
            const fetch = async () => {
                try{
                    const {data}= await axios(`https://skytop-strategies.com/wp-json/wp/v2/people?include=${ids}&per_page=100`);
                    setDelegates(data);
                    setLoaded(true);
                }catch(err){
                    console.error(err);
                }
            }
            fetch()
        }
    },[props.delegates])
    const renderDelegates = (delegates) => {
        return delegates.map(del => 
            <div className="delegate">
                <h5><u>{del.acf.name}</u></h5>
                <p>{del.acf.job_title}</p>
                <p>{del.acf.company}</p>
                <p>{del.acf.location}</p>
            </div>
        )
    }
    return(
        <div>
            <div className="delegates mt-1 mb-2">
                {loaded ? renderDelegates(delegates) : <PageLoader/>}
            </div>
        </div>
    )
}

export default Delegates;