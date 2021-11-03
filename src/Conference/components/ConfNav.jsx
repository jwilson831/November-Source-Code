import React from 'react';

function ConfNav(props){
    const renderNavs = () => {
        return props.info.map(item => 
            <div className={`nav-item conf-nav-item ${parseInt(item.key) === props.active ? "category edit-category" : ""}`}> 
                <p className="m-0 p-0" onClick={() => props.clickHandler(parseInt(item.key))}>{(item.props.name).toUpperCase()}</p>
            </div>   
        )
    }
    return(
        <div className="nav conf-nav">
            {renderNavs()}
        </div>
    )
}

export default ConfNav;