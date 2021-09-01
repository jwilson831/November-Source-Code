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
import AuthorContainer from './Author/AuthorContainer';
import AuthorMenu from './Author/AuthorMenu/AuthorMenu';
import ViewAll from './ViewAll/ViewAll';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PageLoader from './util/Loader';
import ArticleMenu from './Article/ArticleMenu';
import { orderByDate } from './util/orderByDate';
import AboutUs from './Footer/About/AboutUs';
import Policy from './util/Policy/Policy';
import Cart from './Cart/Cart';


function App() {
  const [articles, setArticles] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [comments,setComments] = useState([]);
  const [editorial, setEditorial] = useState("");
  const [editCalendar,setCal] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Headlines");

  useEffect(() => {
    const fetchData = async () => {
      try{
        const articles = await axios("https://skytop-strategies.com/wp-json/wp/v2/articles?_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=date&_fields[]=id&_fields[]=_links&_embed=wp:featuredmedia&per_page=100");
        const conferences = await axios("https://skytop-strategies.com/wp-json/wp/v2/conferences?_fields[]=id&_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=_links&_embed=wp:featuredmedia&per_page=100");
        const comments = await axios("https://skytop-strategies.com/wp-json/wp/v2/comments?per_page=100");
        const editorials = await axios("https://skytop-strategies.com/wp-json/wp/v2/editorials?_embed=wp:featuredmedia")
        
        
        setArticles(articles.data);
        setConferences(orderByDate(conferences))
        setComments(comments.data);
        setEditorial(editorials.data[1]);
        setCal(editorials.data[0])
      }catch (err){
        console.error(err);
      }
      setLoaded(true);
    }
    fetchData();
  },[]);
  

  const filterByCategory = (data, category) => {
    const categories = [  
      "Activism", 
      "Capital Markets", 
      "Cyber Resilience", 
      "CSR and Sustainability", 
      "Investment Management", 
      "Washington & The World"]

    if(category === "Headlines" || !categories.includes(category)){
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
                    video={"https://www.youtube.com/embed/vhG9PNePKJE"} 
                    title={
                      <div className="video-title text-center">
                        <h5>The Big Debate</h5>
                        <p>Featuring</p>
                        <p>David Katz, Partner, Wachtell Lipton Rosen &amp; Katz</p>
                        <p>&amp;</p>
                        <p>Eleazer Klein, Partner, Schulte Roth &amp; Zabel </p>
                      </div>
                    }
                    articles={articles} 
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/cyberad.png"}
                    calendar={editCalendar}/>
                </Route>

                <Route exact path="/activism">
                  <Section
                    video={"https://www.youtube.com/embed/VnI4ox-lOEU"}
                    title={
                      <div className="video-title text-center">
                        <h5>Evolving Practices in Shareholder Engagement</h5>
                        <p>Jeremy Fielding, CEO Kekst CNC</p>
                      </div>
                    }
                    articles={articles}
                    ids={[1328,190,1322,627,593,596]}
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/investment">
                  <Section
                    video={"https://www.youtube.com/embed/sIMJfTE2NCM"} 
                    title={
                      <div className="video-title text-center">
                        <h5>ESG Investing, A Portfolio Perspective</h5>
                        <p>Rodrigo Garcia, CIO and CFO,  Illinois State Treasury</p>
                      </div>
                    }
                    articles={articles}
                    ids={[622,583,604,607,197,184]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/CSR">
                  <Section
                    video={"https://www.youtube.com/embed/WEvUO-l4d7w"} 
                    title={
                      <div className="video-title text-center">
                        <h5>Innovation and CSR Brand Strategy </h5>
                        <p>Joe Verrengia, Global Director, Corporate Social Responsibility</p>
                      </div>
                    }
                    articles={articles}
                    ids={[599,616,601,590,177,580]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/image.png"}/>
                </Route>

                <Route exact path="/cyber">
                  <Section
                    video={"https://www.youtube.com/embed/bcwb-BDxIZo"} 
                    title={
                      <div className="video-title text-center">
                        <h5>The Cognitive Hack</h5>
                        <p>James Bone, Executive Director and Founder GRC Index</p>
                      </div>
                    }
                    articles={articles}
                    ids={[187,1306,1309,1337,1319]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/capital-markets">
                  <Section
                    video={"https://www.youtube.com/embed/0KQJ3n7GgU4"} 
                    title={
                      <div className="video-title text-center">
                        <h5>Activists and Markets</h5>
                        <p>Rich Thomas, Director, Lazard</p>
                      </div>
                    }
                    articles={articles}
                    ids={[1303,585,630,612,181,1334]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/cyberad.png"}/>
                </Route>

                <Route exact path="/washington-world">
                  <Section
                    video={"https://www.youtube.com/embed/f8iBhyXnKrg"} 
                    title={
                      <div className="video-title text-center">
                        <h5>Child Labor-- A Global Challenge</h5>
                        <p>Rachel Phillips, Deputy Division Chief for Research and Policy, Office of Child Labor, US Department of Labor</p>
                      </div>
                    }
                    articles={articles}
                    ids={[624,609,218,215,200,193]}                    
                    comments={comments}
                    changeActiveCategory={changeActiveCategory}
                    ad={"https://utcoleca.sirv.com/skytop_ads/cyberad.png"}/>
                </Route>
                
                <Route exact path="/authors/:id"><AuthorContainer articles={articles} comments={comments}/></Route>
                <Route exact path="/articles/:id"><Article articles={articles} comments={comments}/></Route>
                <Route exact path="/editorial"><Article articles={editorial}/></Route>
                <Route exact path="/conferences/:id"><Conference conferences={conferences}/></Route>
                <Route exact path="/index/conferences"><ViewAll conferences={conferences} comments={comments}/></Route>
                <Route exact path="/index/articles"><ViewAll articles={articles} comments={comments}/></Route>
                <Route exact path="/about-us"><AboutUs changeActiveCategory={changeActiveCategory} activeCategory={activeCategory}/></Route>
                <Route exact path="/privacy"><Policy policy="Privacy"/></Route>
                <Route exact path="/cancel"><Policy policy="Cancel"/></Route>
                <Route exact path="/cart"><Cart/></Route>


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
                  <PrimaryMenu ad={"https://utcoleca.sirv.com/skytop_ads/CMi2i-2.png"} conferences={filterByCategory(conferences,activeCategory)} editorial={editorial} comments={comments}/>
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
        <Footer changeActiveCategory={changeActiveCategory}/>
    </div>
  );
}

export default App;
