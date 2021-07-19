import React from 'react';
import '../styles.css';

function Poll(){
    return(
        <div className="poll-container text-left">
            <div className="category poll-title"><p>Opinion</p></div>
                <p className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                <p>Aenean mollis lobortis sem eget varius. Fusce quis eros eu dui viverra pharetra et in orci. </p>
                <select className="form-select" multiple aria-label="multiple select example">
                    <option selected>Answer 1</option>
                    <option value="1">Answer 2</option>
                    <option value="2">Answer 3</option>
                    <option value="3">Answer 4</option>
                </select>
        </div>
    )
}

export default Poll;