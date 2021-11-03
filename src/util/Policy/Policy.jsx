import axios from 'axios';
import { Markup } from 'interweave';
import React, {useEffect,useState} from 'react';
import PageLoader from '../Loader';
import './styles.css'

function Policy(props){
    const [policy,setPolicy] = useState(null);
   
    useEffect(() => {
        const fetchPolicy =  async () => {
            try{
                const {data} = await axios('https://skytop-strategies.com/wp-json/wp/v2/policies');
                if(props.policy === "Privacy"){
                    setPolicy(data[0])
                }else{
                    setPolicy(data[1])
                }
            }catch(e){
                console.error(e);
            }
        }
        fetchPolicy();
    },[props.policy])
    return(
        <div className="text-left">
            {policy ?
                <div className="pl-5 pr-5 ml-5 mr-5">
                    <p className="section-heading">
                        <Markup content={policy.title.rendered}></Markup>
                    </p>
                    <p className="policy-txt">
                        <Markup content={policy.content.rendered}></Markup>
                    </p>
                </div> 
            : <PageLoader/>}
        </div>

    )
}

export default Policy;