import React, {useState, useEffect} from 'react';
import '../styles.css';

function Register(props){
    const [liveStream, setLiveStream] = useState(null);
    const [mainProduct, setMainProduct] = useState(null);
    const [viewLater, setViewLater] = useState(null);

    useEffect(() => {
        console.log(props.products)
        renderRegisterButtons(props.products);
    },[])


    const renderRegisterButtons = (products) => {
        products.forEach(prod => {
            if(prod.post_content === "livestream"){
                setLiveStream(prod["ID"])
            }else if(prod.post_content === "view-later"){
                setViewLater(prod["ID"])
            }else{
                setMainProduct(prod["ID"])
            }
        })
    }
    console.log(liveStream);
    return(
        <>
        <div className="category">
            <p className="cat-text">Register</p>
        </div>
        <div id="registrationCarousel" className="carousel slide" data-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://utcoleca.sirv.com/SKYTOP/Skytop%20Register/live.jpg" alt="First slide"></img>
                    <div>
                        <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${mainProduct}`} target="_blank">
                            <button className="btn btn-primary comment-btn register-button">Join Us Live</button>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://utcoleca.sirv.com/SKYTOP/Skytop%20Register/streamed.jpg" alt="Second slide"></img>
                    <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${liveStream}`} target="_blank">
                        <button className="btn btn-primary comment-btn register-button">Virtual Live Stream</button>
                    </a>
                </div>
                <div className="carousel-item">
                    <img src="https://utcoleca.sirv.com/SKYTOP/Skytop%20Register/later.jpg" alt="Third slide"></img>
                    <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${viewLater}`} target="_blank">
                        <button className="btn btn-primary comment-btn register-button">View Later</button>
                    </a>
                </div>
            </div>
                <ol class="carousel-indicators">
                    <li data-target="#registrationCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#registrationCarousel" data-slide-to="1"></li>
                    <li data-target="#registrationCarousel" data-slide-to="2"></li>
                </ol>
            <a className="carousel-control-prev" href="#registrationCarousel" role="button" data-slide="prev">
                <i class="fas fa-chevron-circle-left"></i>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#registrationCarousel" role="button" data-slide="next">
                <i class="fas fa-chevron-circle-right"></i>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
    )
}

export default Register;