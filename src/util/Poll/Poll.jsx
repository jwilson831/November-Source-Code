import React, {useState,useEffect} from 'react';
import Markup from 'interweave';
import axios from 'axios';
import './styles.css';


function Poll(){
    const [closeModal,setCloseModal] = useState(false);
    const [visible,setVisible] = useState(false);
    const [pollData,setPollData] = useState(null);

    
    useEffect(() => {
        if(sessionStorage.getItem('pollClosed') === 'true'){
            setCloseModal(true);
        }else{
            try{
                const fetchPoll = async () => {
                    const {data} = await axios("https://skytop-strategies.com/wp-json/wp/v2/poll_summaries?per_page=100");
                    setPollData(data);
                    console.log(data[0])
                }
                fetchPoll();
            }catch(e){
                console.error(e);
            }
        }
    },[])
    
    setTimeout(() => {
        setVisible(true);
    }, 10500);

    const modalClickHandler = () => {
        setCloseModal(true);
        sessionStorage.setItem('pollClosed','true');
    }
    const renderPolls = (polls) => {
        return polls.map(poll =>
            <>
                <iframe title="poll-embed" src={`https://skytop-strategies.com/poll/${poll.acf.poll.ID}/?embed=1`} frameBorder="0" allowtransparency="true" width="100%" height="800"></iframe>
                <div className="mt-5 p-4">
                    <h3><Markup content={poll.title.rendered}></Markup></h3>
                    <h6>By {poll.acf.author[0].post_title}, Skytop Reporter</h6>
                    <div className="text-left mt-5">
                        <Markup content={poll.content.rendered}></Markup>
                    </div>
                </div>
            </> 
        )
    }

    return(
        <div style={visible ? {visibility:"visible"} : {visibility: "hidden"}}className={closeModal ? "modal" : "reveal modal"} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog poll-dialog" role="document">
                <div className="modal-content">
                <div className="poll-header">
                    <h5 className="modal-title" id="exampleModalLongTitle"><div className="category edit-category"><p className="m-0">Weigh In With Us</p></div></h5>
                    <button type="button" className="m-0 p-0 close" data-dismiss="modal" aria-label="Close">
                        <span onClick={() => modalClickHandler()} aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body poll-body text-center">
                    {pollData && renderPolls(pollData)}
                </div>
                <div className="modal-footer">
                    <button onClick={() => modalClickHandler()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Poll;