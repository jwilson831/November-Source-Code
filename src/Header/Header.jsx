import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';


function Header (props){
    const clickHandler = () => {
        props.changeActiveCategory("Home");
    }
    return(
        <div>
            <div className="header-container" onClick={() => clickHandler()}>
                <Link to="/">
                    <img className="skytop-brand" src="https://utcoleca.sirv.com/skytop%20logo%20FINAL.png" alt="" />
                </Link>
                <h5 className="tagline">Where Corporate Insight and Disruptive Ideas Converge</h5>
                <img className="cart header-icon" src="https://utcoleca.sirv.com/shopping-cart.png" />
                <img className="search header-icon" src="https://utcoleca.sirv.com/search.png" width="512" />
            </div>
        </div>
    )
}

export default Header;