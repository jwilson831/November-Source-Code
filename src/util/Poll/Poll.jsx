import React, {useState,useEffect} from 'react';
import './styles.css';


function Poll(){
    const [closeModal,setCloseModal] = useState(false);
    const [visible,setVisible] = useState(false);

    
    useEffect(() => {
        if(sessionStorage.getItem('pollClosed') === 'true'){
            setCloseModal(true);
            console.log("closed");
        }
    },[])
    
    setTimeout(() => {
        setVisible(true);
    }, 10500);

    const modalClickHandler = () => {
        setCloseModal(true);
        sessionStorage.setItem('pollClosed','true');
    }

    return(
        <div style={visible ? {visibility:"visible"} : {visibility: "hidden"}}className={closeModal ? "modal" : "reveal modal"} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle"><div className="category edit-category"><p>Weigh In With Us</p></div></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span onClick={() => modalClickHandler()} aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="text-left">
                        <iframe title="poll-embed" id="totalpoll-iframe-1300" src="https://skytop-strategies.com/poll/1300/?embed=1" frameBorder="0" allowtransparency="true" width="100%" height="400"></iframe>
                    </div>
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