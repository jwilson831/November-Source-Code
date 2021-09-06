import axios from 'axios';
import { Markup } from 'interweave';
import React,{useState,useEffect} from 'react';
import PageLoader from '../util/Loader';
import './styles.css';

function Search(props){
    const [searchData,setSearchData] = useState(null);
    const [input,setInput] = useState("");

    const searchResults = async (searchTerm) => {
        try{
            const {data} = await axios(`https://skytop-strategies.com/wp-json/swp_api/search?s=${searchTerm}i&per_page=100&_embed=wp:featuredmedia`);
            setSearchData(data);
        }catch(e){
            console.error(e);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        searchResults(input);
    }
    const renderLink = (data) => {
        if(data.type=== "people"){
            return `/authors/${data.id}`;
        }else if(data.type === "articles" || data.type === "conferences"){
            return `/${data.type}/${data.id}`;
        }else if(data.type=== "sponsors"){
            return data.acf.link;
        }else{
            return "";
        }
    }
    const renderImage = (data) => {
        if(data.acf.image){
            return <img className={"search-img"} src={data.acf.image}></img> 
        }else if(data._embedded){
            return <img className={"search-img"} src={data._embedded["wp:featuredmedia"][0].source_url}></img> 
        }else if(data.type === "sponsors"){
            return <Markup content={data.content.rendered}></Markup>
        }
        else{
            return ""
        }
    }

    const renderSearchResults = (results) => {
        return results.map(result => 
            <a href={renderLink(result)}>
                <div className="card result-container">
                    <div className="row">
                        <div className="col-md-4">
                            {/* {result.acf.image ? <img className={"search-img"}src={result.acf.image}></img> : ""} */}
                            {renderImage(result)}
                        </div>
                        <div className="search-info col-md-8">
                            <h3> <Markup content={result.title.rendered}></Markup></h3>
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
    console.log(searchData)
    return(
        <div className="search-container">
            <h2>Search</h2>
            <form onSubmit={(e) => submitHandler(e) }>
                <input type="search"onChange={(e) => setInput(e.target.value) } className="form-control search-input" value={input}></input>
            </form>
            <hr></hr>
            <div className="search-results">
                {searchData ? renderSearchResults(searchData) : ""}
            </div>
        </div>
    )
}

export default Search;