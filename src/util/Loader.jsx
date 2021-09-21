import React from 'react';
import Loader from 'react-loader-spinner';


function PageLoader(props){

    return(
        <div className="w-100 text-center">
            <Loader
                type="Bars"
                color="rgb(38,136,165)"
                height={props.search ? 50 : 100}
                width={props.search ? 50 : 100}
                timeout={1000000}
            />
        </div>
    )
}

export default PageLoader;