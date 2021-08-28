import React from 'react';

function Advert(props){
    return(
        <div className="ad">
            <img className="advert" src={props.image}></img>
        </div>
    )
}

export default Advert;