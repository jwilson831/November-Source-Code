import React from 'react';

function Advert(props){
    return(
        <div className="ad">
            <a href={props.link} target="_blank">
                <img className="advert" src={props.image}></img>
            </a>
        </div>
    )
}

export default Advert;