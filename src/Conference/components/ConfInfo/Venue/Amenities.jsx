import React from 'react';
import '../styles.css';

function Amenities(props){
    const renderAmenities = (amens) => {
        let amenArray = [];
        for(const amen in amens){ amenArray.push(amens[amen])};

        return amenArray.map(amen =>
            <div className="row mb-4">
                <div className="col-lg-6 col-sm-12 ">
                    <img className="amen-img" src={amen.image}></img>
                </div>
                <div className="col-6 pt-4">
                    <h4>{amen.title}</h4>
                    <p>{amen.description}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="text-left mt-4">
            <h2>Amenities</h2>
            {renderAmenities(props.amenities)}
        </div>
    )
}

export default Amenities;