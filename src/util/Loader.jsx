import React from 'react';
import Loader from 'react-loader-spinner';


function PageLoader(props){

    return(
        <Loader
            type="Bars"
            color="rgb(38,136,165)"
            height={props.search ? 50 : 100}
            width={props.search ? 50 : 100}
            timeout={10000}
        />
    )
}

export default PageLoader;