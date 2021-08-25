import React from 'react';
import './styles.css';


function Poll(){
    const submitHandler = (e) => {
        console.log(e.target)
        e.preventDefault();
    }
    return(
        <div className="poll-container text-left">
            <div className="category poll-title"><p>Weigh In With Us</p></div>
            <form onSubmit={(e) => submitHandler(e)}>
                <p className="question">How realistic do you think it is that meaningful climate change will happen in your lifetime?</p>
                <select className="form-select" multiple aria-label="multiple select example">
                    <option selected>Very</option>
                    <option value="1">Somewhat</option>
                    <option value="2">Not at all</option>
                </select>
                <p className="question">
                    How will we reconcile the fact that most of the clean energy methods require resources and 
                    materials that must be obtained from other countries and climates that have their own issues?
                </p>
                <select className="form-select" multiple aria-label="multiple select example">
                    <option selected>It's possible</option>
                    <option value="1">It's questionable</option>
                    <option value="2">Not going to happen</option>
                </select>
                <p className="question">The energy storage of the future is:</p>
                <select className="form-select" multiple aria-label="multiple select example">
                    <option selected>Better battery technology</option>
                    <option value="1">Iron batteries</option>
                    <option value="2">Expansion of underwater current energy generation</option>
                </select>
                <div>
                    <button className="btn sky-submit"type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Poll;