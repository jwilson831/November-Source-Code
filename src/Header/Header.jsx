import React from 'react';
import './styles.css'

function Header (){
    return(
        <div>
            <div className="header-container">
                <img className="skytop-brand" src="https://utcoleca.sirv.com/skytop%20logo%20FINAL.png" alt="" />
                <h6 className="tagline">Where Corporate Insight and Disruptive Ideas Converge</h6>
                <img className="cart header-icon" src="https://utcoleca.sirv.com/shopping-cart.png" />
                <img className="search header-icon" src="https://utcoleca.sirv.com/search.png" width="512" />
            </div>
            <h1>Header</h1>
        </div>
    )
}

export default Header;