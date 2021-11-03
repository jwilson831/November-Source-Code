import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function Footer (props){
    return(
        <div className="footer">
            <div className="top-footer">
                <img className="footer-brand" src="https://utcoleca.sirv.com/SKYTOP/skytop%20logo%20KO%20FINAL.png" alt="" />
                <div className="footer-text">
                    <Link className="foot-grid-item" to="/about-us">
                        <p className="foot-item about">ABOUT US</p>
                    </Link>
                    <Link className="foot-grid-item" to="/cancel">
                        <p className="foot-item cancel">CANCELLATION POLICY</p>
                    </Link>
                    <Link className="foot-grid-item" to="/privacy">
                        <p className="foot-item privacy">PRIVACY POLICY</p>
                    </Link>
                    <Link className="foot-grid-item" to="/sponsors-partners">
                        <p className="foot-item footer-sponsors">SPONSORS &amp; PARTNERS</p>
                    </Link>
                    <p className="foot-grid-item" id="address">141 West 36th Street, 8th Floor New York, NY 10018</p>
                    <span className="twitter">
                        <a className="social-link" href="https://twitter.com/skytopstrat" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </span>
                    <span className="linkedin">
                        <a className="social-link" href="https://www.linkedin.com/company/skytopstrategies/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </span>
                </div>
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