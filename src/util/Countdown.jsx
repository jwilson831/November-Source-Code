import React,{useState,useEffect} from 'react';

function Countdown(props){
    const [date,setDate] = useState(new Date());
    const now = Date.now();

    useEffect(() => {
        const timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    })

    const tick = () => setDate(new Date());

    const msToTime = (duration) => {
        let days = Math.floor(duration/(1000*60*60*24)),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return days + ' : ' + hours + " : " + minutes + " : " + seconds;
      }

    return (
        <div className="countdown">
            <p className="countdown-text">{msToTime(Date.parse(props.date) + 28800000 - now)}</p>
        </div>
    )
}

export default Countdown;