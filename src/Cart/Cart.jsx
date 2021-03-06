import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { sendGAPageView } from '../util/GoogleAnalytics';
import PageLoader from '../util/Loader/Loader';
import './styles.css';

function Cart(){
    const [products,setProducts] = useState(null);
    useEffect(() => {
        sendGAPageView(window.location.pathname);

        const fetchProducts = async () => {
            try{
                const { data }= await axios(`https://skytop-strategies.com/wp-json/wc/v3/products?consumer_key=${process.env.REACT_APP_WOO_CK}&consumer_secret=${process.env.REACT_APP_WOO_CS}&_fields[]=id&_fields[]=price&_fields[]=name&_fields[]=images&per_page=100&order=asc`);
                setProducts(data);
            }catch(e){
                console.error(e);
            }
        }
        fetchProducts();
    },[])

    const renderProducts = (products) => {
        return products.map(prod => 
            <div className="card mb-3 product-card">
                <div className="row">
                    {prod.images[0] ? 
                        <img className="product-img card-img-top col-md-5" src={prod.images[0].src} alt="product"></img>    
                    :""}
                    <div className="card-body col-md-7 prod-body">
                        <h3>{prod.name}</h3>
                        <p className="edit-text">Price: ${prod.price}</p>
                        <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${prod.id}`} target="_blank" rel="noreferrer">
                            <button className="btn btn-primary register-button">Register</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="text-left">
            <h2 className="section-title">Skytop Strategies Products</h2>
            <div className="products-container">
                {products ? renderProducts(products) : <PageLoader/>}
            </div>
        </div>
    )
}

export default Cart;