import React from 'react';

function ConfNav(props){
    const renderNavs = () => {
        return props.info.map(item => 
            <div className={`nav-item conf-nav-item ${parseInt(item.key) === props.active ? "category edit-category" : ""}`}> 
                <a onClick={() => props.clickHandler(parseInt(item.key))}>{item.props.name}</a>
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