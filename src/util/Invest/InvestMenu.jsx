import React from 'react';
import './styles/styles.css';
import { sponsorNames } from './sponsors';
import { SponsorName } from './styles/index.jsx';


function InvestMenu(){
    const renderSponsorTitles = (names) => {
        let nameArray = [];
        let tickerCount = 0;
        let delay = 0;

        for(const name of names){
            nameArray.push(
                <SponsorName tickerCount={tickerCount} delay={delay}>{name}</SponsorName>
            )
            tickerCount++;
            delay+= 0.5;
        }
        return nameArray;
    }

    return(
        <>
            <p className="section-title">Select Sponsors &amp; Partners</p>
            <div className="ticker-wrap invest-sponsors-list">
                    {renderSponsorTitles(sponsorNames)}
            </div>
        </>
    )
}

export default InvestMenu;