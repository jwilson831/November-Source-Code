import React from 'react';
import './styles.css'

function Nav (){
    return(
      <div className="nav">
          <div className="nav-item"><a href="/"><p className="nav-text">ACTIVISM</p></a></div>
          <div className="nav-item"><a href="/"><p className="nav-text">CAPITAL MARKETS</p></a></div>
          <div className="nav-item"><a href="/"><p className="nav-text">CYBER RESILIENCE</p></a></div>
          <div className="nav-item"><a href="/"><p className="nav-text">CSR &amp; SUSTAINABILITY</p></a></div>
          <div className="nav-item"><a href="/"><p className="nav-text">INVESTMENT MANAGEMENT</p></a></div>
      </div>
    )
}

export default Nav;