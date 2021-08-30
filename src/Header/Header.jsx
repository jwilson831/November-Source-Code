import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './styles.css';

function Header (){
    const [searchClicked,setSearchClicked] = useState(false);
    return(
        <div>
            <div className="header-container">
                <img className="skytop-brand" src="https://utcoleca.sirv.com/skytop%20logo%20FINAL.png" alt="" />
                <h5 className="tagline">Where Corporate Insight and Disruptive Ideas Converge</h5>
                <Link to="/cart">
                    <img className="cart header-icon" src="https://utcoleca.sirv.com/shopping-cart.png" />
                </Link>
                <img onClick={() => setSearchClicked(!searchClicked)} className="search header-icon" src="https://utcoleca.sirv.com/search.png" width="512" />
                {searchClicked ? <Search/> : ""}

            </div>
        </div>
    )
}

export default Header;