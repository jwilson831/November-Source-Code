import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Nav (props){
  const handleClick = (e) =>{
    props.changeActiveCategory(e.target.id);
  }
    return(
      <div className="nav">
          <Link to="/"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="Headlines">HEADLINES</p></div></Link>
          <Link to="/activism"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="Activism">ACTIVISM</p></div></Link>
          <Link to="/capital-markets"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="Capital Markets">CAPITAL MARKETS</p></div></Link>
          <Link to="/cyber"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="Cyber Resilience">CYBER RESILIENCE</p></div></Link>
          <Link to="/CSR"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="CSR and Sustainability">CSR &amp; SUSTAINABILITY</p></div></Link>
          <Link to="/investment"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="Investment Management">INVESTMENT MANAGEMENT</p></div></Link>
          <Link to="/washington-world"><div className="nav-item" onClick={(e) => handleClick(e)}><p className="nav-text" id="Washington &amp; The World">WASHINGTON &amp; THE WORLD</p></div></Link>
      </div>
    )
}

export default Nav;