import React from 'react';
import './styles.css';

function NewsFeed(){
    return(
        <div className="news-container">
            <p className='edit-title'>News Feed</p>
            <p className="nav-text">Join the Skytop News Mailing List!</p>
            <div>
                <iframe src="http://go.pardot.com/l/86842/2017-12-12/4wyy99" width="100%" height="500" type="text/html" frameborder="0" allowTransparency="true"></iframe>
            </div>
        </div>
    )
}

export default NewsFeed;