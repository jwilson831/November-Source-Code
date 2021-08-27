import axios from 'axios';
import React, {useState,useEffect} from 'react';
import PageLoader from '../util/Loader';
import './styles.css';

function Cart(){
    const [products,setProducts] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const { data }= await axios(`https://skytop-strategies.com/wp-json/wc/v3/products?consumer_key=ck_d753a6a74fd14580135ae44ed3099362db977b0f&consumer_secret=cs_fcb999ebf5754c8c1f678f7f55d620a05f11da0e&_fields[]=id&_fields[]=price&_fields[]=name&_fields[]=images&per_page=100`);
                setProducts(data);
            }catch(e){
                console.error(e)
            }
        }
        fetchProducts();
    })

    const renderProducts = (products) => {
        return products.map(prod => 
            <div className="card mb-3 product-card">
                <div className="row">
                    <img className="product-img card-img-top col-md-5" src={prod.images[0].src}></img>    
                    <div className="card-body col-md-7 prod-body">
                        <h3>{prod.name}</h3>
                        <p className="edit-text">Price: ${prod.price}</p>
                        <a className="text-light" href={`https://skytop-strategies.com/cart/?add-to-cart=${prod.id}`} target="_blank">
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