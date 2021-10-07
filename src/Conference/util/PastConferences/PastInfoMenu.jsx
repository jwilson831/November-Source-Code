import axios from 'axios';
import React, {useState,useEffect} from 'react';
import '../../styles.css';

function PastInfoMenu(props){
    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try{
                const ids = props.pastConf.map(conf => conf["ID"]);
                const { data } = await axios(`https://skytop-strategies.com/wp-json/wp/v2/past_conferences?include=${ids}`);
                setData(data);
                console.log(data);
            }catch(e){
                console.error(e);
            }
        }
        fetchInfo();
    },[])

    const renderOptions = (confs) => {
        return confs.map(conf =>
            conf.acf[props.info] ?
            <div 
                data-toggle="modal" 
                data-target="#exampleModalLong"
                onClick={() => props.pastInfoClickHandler(conf.acf[props.info].post_title, conf.acf[props.info].post_content)} 
                className="pl-2 pr-2"
            >
                {conf.acf[props.info].post_title}
            </div>
            : <div className="text-center">N/A</div>
        )
    }

    return(
        <>
        {props.pastConf &&
            <div className="text-right">
                <div class="dropdown">
                    <button class="btn edit-category show-past-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="text-capitalize">See Past {props.info}</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {data ? renderOptions(data) : ""}
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default PastInfoMenu;