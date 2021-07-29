import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Nav (props){
    const handleClick = (e) =>{
      props.changeActiveCategory(e.target.id)
    }
    return(
      <div className="nav">
          <div className="nav-item" onClick={(e) => handleClick(e)}><Link to="/activism"><p id="Activism" className="nav-text">ACTIVISM</p></Link></div>
          <div className="nav-item" onClick={(e) => handleClick(e)}><Link to="/capital-markets"><p id="Capital Markets"className="nav-text">CAPITAL MARKETS</p></Link></div>
          <div className="nav-item" onClick={(e) => handleClick(e)}><Link to="/cyber"><p id="Cyber Resilience"className="nav-text">CYBER RESILIENCE</p></Link></div>
          <div className="nav-item" onClick={(e) => handleClick(e)}><Link to="/CSR"><p id="CSR and Sustainability"className="nav-text">CSR &amp; SUSTAINABILITY</p></Link></div>
          <div className="nav-item" onClick={(e) => handleClick(e)}><Link to="/investment"><p id="Investment Management"className="nav-text">INVESTMENT MANAGEMENT</p></Link></div>
          <div className="nav-item" onClick={(e) => handleClick(e)}><Link to="/global-affairs"><p id="Global Affairs"className="nav-text">GLOBAL AFFAIRS</p></Link></div>

      </div>
    )
}

export default Nav;