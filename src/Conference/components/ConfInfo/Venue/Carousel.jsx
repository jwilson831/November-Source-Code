import React from 'react';
import '../styles.css';

function Carousel(props){
    const renderCarouselImages = (images) => {
        const imgArray = [];
        for(const img in images){
            imgArray.push(images[img])
        }
        return imgArray.slice(1).map(img =>
            <div className="carousel-item">
                <img alt="carousel" className="venue-img" src={img}></img>
            </div>
        )
    }

    return(
        <div id="registrationCarousel" className="carousel slide" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img alt="carousel" className="venue-img" src={props.main_images.image_1}></img>
                            </div>
                            {renderCarouselImages(props.main_images)}
                        </div>
                        <a className="carousel-control-prev" href="#registrationCarousel" role="button" data-slide="prev">
                            <i className="fas fa-chevron-circle-left"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#registrationCarousel" role="button" data-slide="next">
                            <i className="fas fa-chevron-circle-right"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
    )
}

export default Carousel;