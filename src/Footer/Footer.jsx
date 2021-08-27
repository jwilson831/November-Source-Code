import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function Footer (props){
    return(
        <div className="footer">
            <div className="top-footer">
                <img className="footer-brand" src="https://utcoleca.sirv.com/skytop%20logo%20KO%20FINAL.png" alt="" />
                <div className="footer-text">
                    <Link to="/about-us">
                        <p onClick={() => props.changeActiveCategory("About Us")} className="about">ABOUT US</p>
                    </Link>
                    <Link to="/cancel">
                        <p className="cancel">CANCELLATION POLICY</p>
                    </Link>
                    <Link to="/privacy">
                        <p className="privacy">PRIVACY POLICY</p>
                    </Link>
                    <p id="address">475 Park Ave South Suite 920 New York, NY 10016</p>
                </div>
                    <span className="twitter"><i class="fab fa-twitter"></i></span>
                    <span className="linkedin"><i class="fab fa-linkedin-in"></i></span>
            </div>
            <div className="mt-5">
                <div className="locations">
                    <p>NEW YORK</p>
                    <p>CHICAGO</p>
                    <p>SAN FRANCISCO</p>
                    <p>WASHINGTON DC</p>
                    <p>BOSTON</p>
                    <p>TORONTO</p>
                    <p>TOKYO</p>
                    <p>HONG KONG</p>
                    <p>TEL AVIV</p>
                    <p className="end-item">ROME</p>
                </div>
                <div className="locations">
                    <p>FRANKFURT</p>
                    <p>STOCKHOLM</p>
                    <p>LONDON</p>
                    <p className="end-item">MUMBAI</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;