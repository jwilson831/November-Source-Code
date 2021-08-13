import React from 'react';
import ConfCard from '../Conference/components/ConfCard';
import Recents from '../PageComponents/Recents/Recents';
import './styles.css';

function ViewAll(props){

    const renderData = () => {
        if (props.articles){
            return(
                <>
                    <Recents articles={props.articles} comments={props.comments}/>
                </>
            )
        }else{
            return(
                <>
                    {props.conferences.map(conf => 
                        <ConfCard
                            id={conf.id} 
                            imgUrl={conf._embedded["wp:featuredmedia"][0].source_url}
                            title={conf.title.rendered}
                            tagline={conf.acf.tagline}
                            city={conf.acf.city}
                            date={conf.acf.date}
                        />
                    )}
                </>
            )
        }
    }
    return (
        <div class="view-all-container">
            {renderData()}
        </div>
    )
}

export default ViewAll;

