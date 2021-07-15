import React from 'react';
import './styles.css'

function Nav (){
    return(
      <div className="nav">
          <div className="nav-item"><p className="nav-text">ACTIVISM</p></div>
          <div className="nav-item"><p className="nav-text">CAPITAL MARKETS</p></div>
          <div className="nav-item"><p className="nav-text">CYBER RESILIENCE</p></div>
          <div className="nav-item"><p className="nav-text">CSR &amp; SUSTAINABILITY</p></div>
          <div className="nav-item"><p className="nav-text">INVESTMENT MANAGEMENT</p></div>
      </div>
    )
}

export default Nav;