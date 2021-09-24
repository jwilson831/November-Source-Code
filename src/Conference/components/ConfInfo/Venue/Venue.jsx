import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PageLoader from '../../../../util/Loader';
import '../styles.css'
import Amenities from './Amenities';
import Carousel from './Carousel';

function Venue(){
    const [data,setData] = useState(null);
    const { confId, id } = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchVenue = async () => {
            try{
                const {data :{acf}} = await axios(`https://skytop-strategies.com/wp-json/wp/v2/venues/${id}`);
                setData(acf);
                setLoaded(true)
            }catch(e){
                console.error(e)
            }
        }
        fetchVenue();
    },[])
    console.log(id,confId);

    return(
        <>
        {loaded ? 
            <div className="text-center mb-5">
                <div className="text-left">
                    <Link to={`/conferences/${confId}`}>
                        <button className="btn btn-primary comment-btn"><i class="fas fa-chevron-left"></i> Back</button>
                    </Link>
                </div>
                    <strong><h2>{data.name}</h2></strong>
                    <Carousel main_images={data.main_images}/>
                    <p className="venue-desc">{data.description}</p>
                    <hr></hr>
                    <div>
                        {data.video_link ? 
                            <iframe height="600" width="800" className="video" src={data.video_link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        :''}
                    </div>
                    <Amenities amenities={data.amenities}/>
                    <div className="mt-5">
                        <h6>Contact us about highly incentivized room rates for Skytop participants!</h6>
                        <a href="mailto:info@skytopstrategies.com?subject=Skytop Participant Hotel Booking">
                            <button className="btn btn-danger">Book Now</button>
                        </a>
                    </div>
            </div>
        : <PageLoader/>}
        </>
    )
}

export default Venue;
