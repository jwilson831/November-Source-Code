import axios from 'axios';
import { Markup } from 'interweave';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageLoader from '../util/Loader';
import './styles.css';

function Search(props){
    const [searchData,setSearchData] = useState(null);
    const [input,setInput] = useState("");

    const searchResults = async (searchTerm) => {
        try{
            const {data} = await axios(`https://skytop-strategies.com/wp-json/swp_api/search?s=${searchTerm}i&per_page=100`);
            setSearchData(data);
        }catch(e){
            console.log(e);
        }
    }
    console.log(searchData);

    const submitHandler = (e) => {
        e.preventDefault();
        searchResults(input);
    }
    const renderLink = (data) => {
        if(data.type=== "people"){
            return `/authors/${data.id}`
        }else if(data.type === "articles" || data.type === "conferences"){
            return `/${data.type}/${data.id}`
        }else{
            return ""
        }
    }

    const renderSearchResults = (results) => {
        console.log(results)
        return results.map(result => 
            <a href={renderLink(result)}>
                <div className="card result-container">
                    <div className="row">
                        <div className="col-md-4">
                            {result.acf.image ? <img className={"search-img"}src={result.acf.image}></img> : ""}
                        </div>
                        <div className="search-info col-md-8">
                            <p> <Markup content={result.title.rendered}></Markup></p>
                            {result.acf.author ? 
                                <p>By: {result.acf.author[0].post_title}</p>
                                :    
                            ""}
                        </div>
                    </div>
                </div>    
            </a>
        )
    }

    return(
        <div className="search-container">
            <h2>Search</h2>
            <form onSubmit={(e) => submitHandler(e) }>
                <input onChange={(e) => setInput(e.target.value) } className="search-input" value={input}></input>
            </form>
            <hr></hr>
            <div className="search-results">
                {searchData ? renderSearchResults(searchData) : ""}
            </div>
        </div>
    )
}

export default Search;