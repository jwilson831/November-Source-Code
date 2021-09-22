import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PageLoader from '../../../util/Loader';
import './styles.css'

function Venue(props){
    const [data,setData] = useState(null);
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const selectCurrentConference = (conferences) => {
            try{
                const data = (conferences.find(conf => conf.id === parseInt(id)));
                setData(data);
                setLoaded(true);
            }catch(e){
                console.error(e)
            }
        }
        selectCurrentConference(props.conferences);
    },[])

    return(
        <>
        {loaded ? 
            <div className="text-center mb-5">
                <div className="text-left">
                    <Link to={`/conferences/${id}`}>
                        <button className="btn btn-primary comment-btn"><i class="fas fa-chevron-left"></i> Back</button>
                    </Link>
                </div>
                    <strong><h2>{data.acf.venue}</h2></strong>
                    <div id="registrationCarousel" className="carousel slide" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img className="venue-img" src={data.acf.venue_image}></img>
                            </div>
                            <div class="carousel-item">
                                <img className="venue-img" src={data.acf.venue_image_2}></img>
                            </div>
                            <div class="carousel-item">
                                <img className="venue-img" src={data.acf.venue_image_3}></img>
                            </div>
                            <div class="carousel-item">
                                {data.acf.venue_video ? 
                                    <iframe height="600" width="800" className="video" src={data.acf.venue_video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                :''}
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#registrationCarousel" role="button" data-slide="prev">
                            <i class="fas fa-chevron-circle-left"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#registrationCarousel" role="button" data-slide="next">
                            <i class="fas fa-chevron-circle-right"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <p className="venue-desc">{data.acf.venue_description}</p>
                    <hr></hr>
            </div>
        : <PageLoader/>}
        </>
    )
}

export default Venue;
