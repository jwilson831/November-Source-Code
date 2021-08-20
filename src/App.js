import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home/Home';
import Section from './Section/Section';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import PrimaryMenu from './PrimaryMenu/PrimaryMenu';
import Conference from './Conference/Conference';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Article from './Article/Article';
import ConferenceMenu from './Conference/ConferenceMenu/ConferenceMenu';
import Author from './Author/AuthorContainer';
import AuthorContainer from './Author/AuthorContainer';
import AuthorMenu from './Author/AuthorMenu/AuthorMenu';
import ViewAll from './ViewAll/ViewAll';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PageLoader from './util/Loader';
import ArticleMenu from './Article/ArticleMenu';


function App() {
  const [articles, setArticles] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [comments,setComments] = useState([]);
  const [editorial, setEditorial] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Home");

  useEffect(() => {
    const fetchData = async () => {
      try{
        const articles = await axios("https://skytop-strategies.com/wp-json/wp/v2/articles?_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=date&_fields[]=id&_fields[]=_links&_embed=wp:featuredmedia&per_page=100");
        const conferences = await axios("https://skytop-strategies.com/wp-json/wp/v2/conferences?_fields[]=id&_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=_links&_embed=wp:featuredmedia&per_page=100&order=asc");
        const comments = await axios("https://skytop-strategies.com/wp-json/wp/v2/comments?per_page=100");
        const editorials = await axios("https://skytop-strategies.com/wp-json/wp/v2/editorials?_embed=wp:featuredmedia")
        
        setArticles(articles.data);
        setConferences(conferences.data);
        setComments(comments.data);
        setEditorial(editorials.data[0]);
      }catch (err){
        console.error(err);
      }
      setLoaded(true);
    }
    fetchData();
  },[])

  const filterByCategory = (data, category) => {
    if(category === "Home"){
      return data;
    }else{
      return data.filter((item) => item.acf.category === category )
    }
  }
  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  }

  

  return (
    <div className="App">
      <Header/>
      {loaded ? 
        <div className="main-container">
          <Nav changeActiveCategory={changeActiveCategory} activeCategory={activeCategory}/>
          <div className="main-grid">
            <Switch>
              <div className="section">
                <Route exact path="/">
                  <Home 
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv1-0euju2O2-keMsHj1mALV"} 
                    articles={articles} 
                    comments={comments}/>
                </Route>

                <Route exact path="/activism">
                  <Section
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv2uiwYOn97Uc8I8bW9ZaVxM"}
                    articles={filterByCategory(articles,"Activism")} 
                    comments={comments}/>
                </Route>

                <Route exact path="/investment">
                  <Section
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv3NCts2MmcWa-wzX_gUJoMg"} 
                    articles={filterByCategory(articles,"Investment Management")} 
                    comments={comments}/>
                </Route>

                <Route exact path="/CSR">
                  <Section
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv3vOIa9xSPbUAv1BT1SPfeG"} 
                    articles={filterByCategory(articles,"CSR and Sustainability")} 
                    comments={comments}/>
                </Route>

                <Route exact path="/cyber">
                  <Section
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv1cod0xuCi9VUdz7uSqw7uo"} 
                    articles={filterByCategory(articles,"Cyber Resilience")} 
                    comments={comments}/>
                </Route>

                <Route exact path="/capital-markets">
                  <Section
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv29i9uuPDdJM5WJ8U5nAAd-"} 
                    articles={filterByCategory(articles,"Capital Markets")} 
                    comments={comments}/>
                </Route>

                <Route exact path="/global-affairs">
                  <Section
                    video={"https://www.youtube.com/embed/videoseries?list=PL7NmqcDhuRv10zArc_uH8t0u1kdf-Ds6Q"} 
                    articles={filterByCategory(articles,"Global Affairs")} 
                    comments={comments}/>
                </Route>
                
                <Route exact path="/authors/:id"><AuthorContainer articles={articles} comments={comments}/></Route>
                <Route exact path="/articles/:id"><Article articles={articles} comments={comments}/></Route>
                <Route exact path="/editorial"><Article articles={editorial}/></Route>
                <Route exact path="/conferences/:id"><Conference conferences={conferences}/></Route>
                <Route exact path="/index/conferences"><ViewAll conferences={conferences} comments={comments}/></Route>
                <Route exact path="/index/articles"><ViewAll articles={articles} comments={comments}/></Route>

              </div>
            </Switch>

            <div className="side-menu">
              <Switch>
                <Route path={"/conferences/:id"}>
                  <ConferenceMenu conferences={conferences}/>
                </Route>
                <Route path={["/authors/:id","/editorial"]}>
                  <AuthorMenu conferences={conferences}/>
                </Route>
                <Route path={"/articles/:id"}>
                  <ArticleMenu articles={articles} filterByCategory={filterByCategory} conferences={conferences}/>
                </Route>
                <Route path={"*"}>
                  <PrimaryMenu conferences={filterByCategory(conferences,activeCategory)} editorial={editorial} comments={comments}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      : 
        <div className="loader">
          <PageLoader/>
        </div>
      }
        <Footer/>
    </div>
  );
}

export default App;
