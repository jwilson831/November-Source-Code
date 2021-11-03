import axios from 'axios';
import { Markup } from 'interweave';
import React,{useState} from 'react';
import PageLoader from '../util/Loader';
import './styles.css';

function Search(props){
    const [searchData,setSearchData] = useState(null);
    const [input,setInput] = useState("");
    const [loading,setLoading] = useState(true);

    const searchResults = async (searchTerm) => {
        try{
            const {data} = await axios(`https://skytop-strategies.com/wp-json/swp_api/search?s=${searchTerm}i&per_page=100&_embed=wp:featuredmedia`);
            setSearchData(data);
            setLoading(true);
        }catch(e){
            console.error(e);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(false);
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
            return <img className={"search-img"} src={data.acf.image} alt="search"></img> 
        }else if(data._embedded){
            return <img className={"search-img"} src={data.acf.location_image ? data.acf.location_image : data._embedded["wp:featuredmedia"][0].source_url} alt="search"></img> 
        }else if(data.type === "sponsors"){
            return <Markup content={data.content.rendered}></Markup>;
        }
        else{
            return "";
        }
    }

    const renderSearchResults = (results) => {
        if(results.length === 0){
            return <p>0 search results...</p>
        }else{
            return results.map(result => 
                <a href={renderLink(result)}>
                    <div className="card result-container">
                        <div className="row">
                            <div className="col-md-4">
                                {renderImage(result)}
                            </div>
                            <div className="search-info col-md-8">
                                <h3><Markup content={result.title.rendered}></Markup></h3>
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
    }
    return(
        <div className="search-container">
            <div onClick={() => props.clickHandler()} className="text-right search-exit">✖️</div>
            <h2>Search</h2>
            <form onSubmit={(e) => submitHandler(e)}>
                {loading ? 
                    <input type="search"onChange={(e) => setInput(e.target.value) } className="form-control search-input" value={input}></input> 
                    : 
                    <PageLoader search={true}/>
                }
            </form>
            <hr></hr>
            <div className="search-results">
                {searchData ? renderSearchResults(searchData) : ""}
            </div>
        </div>
    )
}

export default Search;