import React, {useState, useEffect} from 'react';
import '../styles.css';

function Register(props){
    const [liveStream, setLiveStream] = useState(null);
    const [mainProduct, setMainProduct] = useState(null);
    const [viewLater, setViewLater] = useState(null);

    useEffect(() => {
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
    return(
        <>
        <div className="category">
            <p className="cat-text">Register</p>
        </div>
        <div>
            <div className="register-box">
                <img src="https://utcoleca.sirv.com/SKYTOP/Skytop%20Register/live.jpg" alt="First slide"></img>
                <div>
                    <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${mainProduct}`} target="_blank">
                        <button className="btn btn-primary comment-btn register-button">Live</button>
                    </a>
                </div>
            </div>
            <div className="register-box">
                <img src="https://utcoleca.sirv.com/SKYTOP/Skytop%20Register/streamed.jpg" alt="Second slide"></img>
                <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${liveStream}`} target="_blank">
                    <button className="btn btn-primary comment-btn register-button">Streamed</button>
                </a>
            </div>
            <div className="register-box">
                <img src="https://utcoleca.sirv.com/SKYTOP/Skytop%20Register/later.png?cy=78" alt="Third slide"></img>
                <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${viewLater}`} target="_blank">
                    <button className="btn btn-primary comment-btn register-button">Later</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Register;