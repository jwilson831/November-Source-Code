import React from 'react';
import Loader from 'react-loader-spinner';
import './styles.css';


function PageLoader(props){

    return(
        <div className="page-loader w-100 text-center">
            <Loader
                type="Bars"
                color="rgb(38,136,165)"
                height={props.search ? 50 : 100}
                width={props.search ? 50 : 100}
                timeout={10000}
            />
        </div>
    )
}

export default PageLoader;