import React,{useState,useEffect} from 'react';
import './styles.css';
import moment from 'moment';


function Countdown(props){
    
    return(
        <div>
            <p className="text-light">{moment(props.date).format("MMMM Do, YYYY")}</p> 
        </div>
    )
}

export default Countdown;