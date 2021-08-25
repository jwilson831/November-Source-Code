import React, {useState} from 'react';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import CommentsBox from '../CommentsBox/CommentsBox';

function Publisher(props){
    const [show, setShow] = useState(false);

    return(
        <div className="edit-container">
            <div className="category edit-category">
                <p className="cat-text">Publisher's Note</p>
            </div>
            <img className="edit-img" src="https://utcoleca.sirv.com/angela.jpg"></img>
            <p className="edit-title">Letter from the Publisher</p>
            <p className="edit-text">Dear Friends and Partners,</p>
            <p className="edit-text">
                A little over a year ago, I left my 20+ career in the film industry to join Skytop Strategies. 
                What a year it has been! I do not think any of us could have predicted we would still be talking about Covid, 
                and when we could convene in person. Although I would have loved to have met many of you in person, 
                I do value the relationships we have formed in such a short period of time. 
            </p>
            {show ? 
            <p className="edit-text">
                One of the main reasons I joined Skytop was because I love building relationships. I love connecting with people and bringing others together. 
                I have seen firsthand how much Chris values our relationships, and I am excited to continue to build on them.
                At Skytop relationships and customization of partnerships are paramount to us. We will never “sell” you something you don’t need, 
                and we will make sure you are always blown away by our results. We will always listen to your needs and collaborate with you to come up with a 
                partnership that works for you.  We respect our speakers, sponsors, contributing authors and delegates. YOU are what make Skytop unique and powerful. 
                YOU are the key to our success.I am so thrilled to have you be a part of our journey. I look forward to meeting you in person soon and figuring out ways to cultivate our partnerships even more!
            </p>
            : ""}
                <button onClick={() => setShow(!show)} className="btn sky-submit mb-3">{show ? "See Less" : "See More"}</button>
            <p className="edit-name">By Angela Sullivan, Skytop Publisher</p>
        </div>
    )
}

export default Publisher;