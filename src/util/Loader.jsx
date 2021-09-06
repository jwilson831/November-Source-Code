import React from 'react';
import Loader from 'react-loader-spinner';


function PageLoader(){
    return(
        <Loader
            type="Bars"
            color="rgb(38,136,165)"
            height={100}
            width={100}
            timeout={10000}
        />
    )
}

export default PageLoader;