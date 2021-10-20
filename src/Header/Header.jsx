import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './styles.css';

function Header (){
    const [searchClicked,setSearchClicked] = useState(false);

    const clickHandler = () => {
        setSearchClicked(!searchClicked);
    }

    return(
        <div>
            <div className="header-container">
                <Link to="/">
                    <img className="skytop-brand" src="https://utcoleca.sirv.com/SKYTOP/skytop%20logo%20FINAL.png" alt="" />
                </Link>
                <h5 className="tagline">Where Corporate Insight and Disruptive Ideas Converge</h5>
                
                    <div className="invest-button view-all comments-box">
                    <Link to="/invest-in-us">
                        <p className="m-0 p-0">Invest Now</p>
                    </Link>
                    </div>
                <Link to="/cart">
                    <img className="cart header-icon" src="https://utcoleca.sirv.com/SKYTOP/shopping-cart.png" />
                </Link>
                <img onClick={() => clickHandler()} className="search header-icon" src="https://utcoleca.sirv.com/SKYTOP/search.png" width="512" />
                {searchClicked ? <Search clickHandler={clickHandler}/> : ""}

            </div>
        </div>
    )
}

export default Header;