import React from 'react';
import './styles.css';

function NewsFeed(){
    return(
        <div className="news-container mt-5">
            <p className='edit-title'>News Feed</p>
            <p className="nav-text">Join the Skytop News Mailing List!</p>
            <div>
                <iframe title="news-feed-embed" src="https://go.pardot.com/l/86842/2017-12-12/4wyy99" width="100%" height="500" type="text/html" frameBorder="0" allowtransparency="true"></iframe>
            </div>
        </div>
    )
}

export default NewsFeed;