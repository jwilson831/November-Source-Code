import axios from 'axios';
import { Markup } from 'interweave';
import React,{useState,useEffect} from 'react';
import PageLoader from '../util/Loader';
import './styles.css';

function SponsorsAndPartners(){
    const [sponsors,setSponsors] = useState(null);
    useEffect(() => {

        const fetchAllSponsors = async () => {
            try{
                const {data} = await axios("https://skytop-strategies.com/wp-json/wp/v2/sponsors?per_page=100");
                setSponsors(data);
            }catch(e){
                console.error(e);
            }
        }
        fetchAllSponsors();
    },[])

    const renderSponsors = (sponsors) => {
        return sponsors.map(sponsor => 
            <Markup content={sponsor.content.rendered}></Markup>
        )
    }

    return(
        <div className="sponsor-partner-container">
            <h5 style={{fontWeight:"400"}}>WE THANK OUR SPONSORS FOR SUPPORTING THIS PROGRAM!</h5>
            <hr></hr>
            <div className="sponsor-grid-3">
                {sponsors ? renderSponsors(sponsors) : <PageLoader/>}
            </div>
        </div>
    )
}

export default SponsorsAndPartners;