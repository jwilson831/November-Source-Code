import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function PageNotFound(){
    return(
        <h3>Page Not Found...(<Link to="/">Back to Home</Link>)</h3>
    )
}

export default PageNotFound;