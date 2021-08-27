import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './styles.css';


function Poll(){
    const [loaded,setLoaded] = useState(false);
    const [data,setData] = useState([])

    const parsePollData = ({questions}) => {
        const data = []
        for(const question in questions){
            const choices = [];
            let currentQuestion = questions[question]
            let currentChoices = currentQuestion.choices;
            console.log(questions[question])

            for(const choice in currentChoices){
                choices.push(currentChoices[choice])
            }
            questions[question] = choices;
            data.push(questions[question]);

        }
        setData(data);
    }

   
    useEffect(() => {
        const fetchPoll = async () => {
            try{
                const {data : {data: {poll}}} = await axios('http://skytop-strategies.com/wp-json/totalpoll/v4/poll/1300');
                parsePollData(poll);
            }catch(e){
                console.log(e)
            }
            setLoaded(true);
        }
        fetchPoll();
    },[])
    console.log(data)
    return(
        <div className="poll-container text-left">
            <div className="category poll-title"><p>Weigh In With Us</p></div>
            <form>
                <p className="question">How realistic do you think it is that meaningful climate change will happen in your lifetime?</p>
                <select>
                    <option>Very</option>
                    <option>Somewhat</option>
                    <option>Not at all</option>
                </select>
                <p className="question">
                    How will we reconcile the fact that most of the clean energy methods require resources and 
                    materials that must be obtained from other countries and climates that have their own issues?
                </p>
                <select className="form-select">
                    <option selected>It's possible</option>
                    <option value="1">It's questionable</option>
                    <option value="2">Not going to happen</option>
                </select>
                <p className="question">The energy storage of the future is:</p>
                <select className="form-select">
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