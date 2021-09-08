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
        <div className="register-container">
            <p className="section-title register-title">Register</p>
            <div className="register-btn-grid">
                <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${mainProduct}`} target="_blank">
                    <button className="btn btn-primary comment-btn register-button">Join Us Live</button>
                </a>
                <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${liveStream}`} target="_blank">
                    <button className="btn btn-primary comment-btn register-button">Virtual Live Stream</button>
                </a>
                <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${viewLater}`} target="_blank">
                    <button className="btn btn-primary comment-btn register-button">View Later</button>
                </a>
            </div>
        </div>
    )
}

export default Register;