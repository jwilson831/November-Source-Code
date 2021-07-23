import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home/Home';
import Section from './Section/Section';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import SideMenu from './SideMenu/SideMenu'
import axios from 'axios';
import { BrowserRouter as Router, Route , Switch, withRouter} from 'react-router-dom';
import Article from './Article/Article';


function App() {
  const [articles, setArticles] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const {data} = await axios("https://skytop-strategies.com/wp-json/wp/v2/articles?_embed=wp:featuredmedia&per_page=100")

        setArticles(data);
      }catch (error){
        console.log(error);
      }
      setLoaded(true);
    }
    fetchData();

  },[])

  const filteredData = (data, category) => {
    return data.filter((item) => item.acf.category === category )
  }

  
  return (
    <div className="App">
      {loaded ? 
        <div className="main-container">
          <Header/>
          <Nav />
          <div className="main-grid">
            <Switch>
              <div className="section">
                <Route exact path="/"><Home articles={articles}/></Route>
                <Route exact path="/activism"><Section articles={filteredData(articles,"Activism")}/></Route>
                <Route exact path="/investment"><Section articles={filteredData(articles,"Investment Management")}/></Route>
                <Route exact path="/CSR"><Section articles={filteredData(articles,"CSR & Sustainability")}/></Route>
                <Route exact path="/cyber"><Section articles={filteredData(articles,"Cyber Resilience")}/></Route>
                <Route exact path="/capital-markets"><Section articles={filteredData(articles,"Capital Markets")}/></Route>
                <Route exact path="/global-affairs"><Section articles={filteredData(articles,"Global Affairs")}/></Route>

                <Route exact path="/articles/:id" component={Article}></Route>

              </div>
            </Switch>
            <div className="side-menu"><SideMenu/></div>
          </div>
        </div>
      : 
      "Loading..."
      }
      
        <Footer/>
    </div>
  );
}

export default App;
