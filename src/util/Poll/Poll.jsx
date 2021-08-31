import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PageLoader from '../Loader';
import './styles.css';


function Poll(){
    return(
        <div className="poll-container text-left">
            <div className="category edit-category"><p>Weigh In With Us</p></div>
            <iframe id="totalpoll-iframe-1300" src="https://skytop-strategies.com/poll/1300/?embed=1" frameborder="0" allowtransparency="true" width="100%" height="400"></iframe>
        </div>
    )
}

export default Poll;