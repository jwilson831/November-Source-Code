import React,{useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Nav (props){
  const handleClick = (e) =>{
    props.changeActiveCategory(e.target.id);
  }
    return(
      <div className="nav">
          <Link to="/"><div className={`nav-item ${props.activeCategory === "Home" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="Home">HEADLINES</p></div></Link>
          <Link to="/activism"><div className={`nav-item ${props.activeCategory === "Activism" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="Activism">ACTIVISM</p></div></Link>
          <Link to="/capital-markets"><div className={`nav-item ${props.activeCategory === "Capital Markets" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="Capital Markets">CAPITAL MARKETS</p></div></Link>
          <Link to="/cyber"><div className={`nav-item ${props.activeCategory === "Cyber Resilience" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="Cyber Resilience">CYBER RESILIENCE</p></div></Link>
          <Link to="/CSR"><div className={`nav-item ${props.activeCategory === "CSR and Sustainability" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="CSR and Sustainability">CSR &amp; SUSTAINABILITY</p></div></Link>
          <Link to="/investment"><div className={`nav-item ${props.activeCategory === "Investment Management" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="Investment Management">INVESTMENT MANAGEMENT</p></div></Link>
          <Link to="/global-affairs"><div className={`nav-item ${props.activeCategory === "Global Affairs" ? 'active': ''}`} onClick={(e) => handleClick(e)}><p className="nav-text" id="Global Affairs">GLOBAL AFFAIRS</p></div></Link>
      </div>
    )
}

export default Nav;