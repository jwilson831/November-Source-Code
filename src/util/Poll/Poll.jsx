import React, {useState,useEffect} from 'react';
import './styles.css';


function Poll(){
    const [closeModal,setCloseModal] = useState(false);
    const [visible,setVisible] = useState(false);
    
    useEffect(() => {
        if(sessionStorage.getItem('pollClosed') === 'true'){
            setCloseModal(true);
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
        <div 
            style={visible ? {visibility:"visible"} : {visibility: "hidden"}} 
            className={closeModal ? "modal" : "reveal modal"} 
            id="exampleModalLong" tabindex="-1" role="dialog" 
            aria-labelledby="exampleModalLongTitle" 
            aria-hidden="true"
        >
            <div className="modal-dialog poll-dialog" role="document">
                <div className="modal-content">
                <div className="poll-header">
                    <h5 className="modal-title" id="exampleModalLongTitle"><div className="category edit-category"><p className="m-0">Weigh In With Us</p></div></h5>
                    <button type="button" className="m-0 p-0 close" data-dismiss="modal" aria-label="Close">
                        <span onClick={() => modalClickHandler()} aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body poll-body text-center">
                <iframe title="poll" id="totalpoll-iframe-2271" src="https://skytop-strategies.com/poll/how-do-we-consider-a-woman-as-transformational/?embed=1" frameborder="0" allowtransparency="true" width="100%" height="600"></iframe>
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