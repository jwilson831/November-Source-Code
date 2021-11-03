import React from 'react';

function Advert(props){
    return(
        <div className="ad">
            <a href={props.link} target="_blank" rel="noreferrer" >
                <img className="advert" src={props.image} alt="ad"></img>
            </a>
        </div>
    )
}

export default Advert;