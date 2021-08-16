import React from 'react';


function NewsFeed(){
    return(
        <div className="news-container">
            <p className="card-title">News Feed</p>
            <p>Join the Skytop News Mailing List!</p>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Email</span>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
                <div className="pt-3">
                    <button type="submit" class="btn btn-warning">Subscribe</button>
                </div>
        </div>
    )
}

export default NewsFeed;