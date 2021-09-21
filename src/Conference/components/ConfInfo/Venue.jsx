import React from 'react';
import './styles.css'

function Venue(props){
    return(
        <div className="text-center mb-5">
            {!props.venue || props.venue === "" ? 
                <h3 className="mt-5">Venue Details Coming Soon!</h3>
                :
                <>
                    <strong><h2 className="font-italic">{props.venue}</h2></strong>
                    <div id="registrationCarousel" className="carousel slide" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img className="venue-img" src={props.venue_image}></img>
                            </div>
                            <div class="carousel-item">
                                <img className="venue-img" src={props.venue_image_2}></img>
                            </div>
                            <div class="carousel-item">
                                <img className="venue-img" src={props.venue_image_3}></img>
                            </div>
                            <div class="carousel-item">
                                {props.venue_video ? 
                                    <iframe height="600" width="800" className="video" src={props.venue_video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <p className="venue-desc">{props.venue_description}</p>
                    <hr></hr>
                    <a href={props.venue_link} target="_blank"><button className="btn btn-primary comment-btn">More Info</button></a>
                </>
            }
        </div>
    )
}

export default Venue;
