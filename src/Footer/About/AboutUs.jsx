import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { sendGAPageView } from '../../util/GoogleAnalytics';
import './styles.css';

function AboutUs(props){
    useEffect(() => {
        sendGAPageView(window.location.pathname);
    },[])
    const handleClick = (e) => {
        props.changeActiveCategory(e.target.innerHTML);        
    }
    return(
        <div>
            <div className="about-banner">
                <img className="abt-banner-img" src="http://skytop-strategies.com/wp-content/uploads/2021/08/integrated-reporting-web.jpeg"></img>
            </div>
            <h2 className="about-heading">The Nexus for Exclusive Insight, Empowering Executives to Navigate Change</h2>
            <div className="about-grid">
                <div className="abt-grid-item">
                    <p className="abt-sub-heading">COMPANY</p>
                    <span className="fa fa-users abt-fa"></span>
                    <p className="abt-sub-text">Skytop Strategies convenes companies through high-content programs designed to empower longevity within their respective industries and around the global marketplace.</p>
                </div>
                <div className="abt-grid-item">
                    <p className="abt-sub-heading">MISSION</p>
                    <span className="fa fa-comments-o abt-fa"></span>
                    <p className="abt-sub-text">We create an arena for experienced professionals to navigate large-scale concepts and implement sustainable, ethical and productive practices.</p>
                </div>
                <div className="abt-grid-item">
                    <p className="abt-sub-heading">PLATFORM</p>
                    <span className="fa fa-bar-chart abt-fa"></span>
                    <p className="abt-sub-text">Skytop Strategies provides a platform for market-moving dialogue by connecting decision makers through actionable exchange, revolutionizing the way 21st century companies create value.</p>
                </div>
            </div>
            <div className="about-grid-2">
                <img className="abt-chris-img" src="https://skytop-strategies.com/wp-content/uploads/2021/08/chris_s.jpeg"></img>
                <div className="abt-chris-txt">
                    <p className="abt-msg">
                        "We push aside passive classroom style experiences and combine peer discovery with 
                        the latest expert guidance on emerging practices. We convene. You engage, 
                        discover and apply."
                    </p>
                    <p className="abt-name">CHRISTOPHER P. SKROUPA</p>
                    <p className="abt-title">Founder and CEO</p>
                </div>
            </div>
            <div className="abt-chris-txt pb-0">
                <h2 className="abt-name abt-fa">Practice Areas</h2>
                <p className="abt-sub-text mb-5">
                    As the corporate landscape evolves around global, social, environmental and economic change, 
                    Skytop Strategies works to facilitate discussion with executive-level corporate leaders, 
                    institutional investors, stakeholders, reputable industry experts, and authoritative NGO/government 
                    agencies around corporate strategy. Find the program that’s right for you by choosing 
                    from one of our practice areas below.
                </p>
                <p className="abt-title pt-5">
                    <span ><Link onClick={(e) => handleClick(e)}to="/activism">Activism</Link> / </span>
                    <span ><Link onClick={(e) => handleClick(e)}to="/capital-markets">Capital Markets</Link> / </span>
                    <span ><Link onClick={(e) => handleClick(e)}to="/cyber">Cyber Resilience</Link> / </span>
                    <span ><Link onClick={(e) => handleClick(e)}to="/CSR">CSR &amp; Sustainability</Link> / </span>
                    <span ><Link onClick={(e) => handleClick(e)}to="/investment">Investment Management</Link> / </span>
                    <span ><Link onClick={(e) => handleClick(e)}to="/washington-world">Washington &amp; The World</Link></span>
                </p>
            </div>
        </div>
    )
}

export default AboutUs;