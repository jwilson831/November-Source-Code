import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Nav (){
    return(
      <div className="nav">
          <div className="nav-item"><Link to="/activism"><p className="nav-text">ACTIVISM</p></Link></div>
          <div className="nav-item"><Link to="/capital-markets"><p className="nav-text">CAPITAL MARKETS</p></Link></div>
          <div className="nav-item"><Link to="/cyber"><p className="nav-text">CYBER RESILIENCE</p></Link></div>
          <div className="nav-item"><Link to="/CSR"><p className="nav-text">CSR &amp; SUSTAINABILITY</p></Link></div>
          <div className="nav-item"><Link to="/investment"><p className="nav-text">INVESTMENT MANAGEMENT</p></Link></div>
          <div className="nav-item"><Link to="/global-affairs"><p className="nav-text">GLOBAL AFFAIRS</p></Link></div>

      </div>
    )
}

export default Nav;