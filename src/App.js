import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import SideMenu from './SideMenu/SideMenu'
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try{
        const {data} = await axios("https://skytop-strategies.com/wp-json/wp/v2/articles?_embed=wp:featuredmedia")

        setArticles(data);
      }catch (error){
        console.log(error);
      }
    }
    fetchArticles();
  },[])

  
  return (
    <div className="App">
      <div className="main-container">
        <Header/>
        <Nav />
        <div className="main-grid">
          <div className="section"><Home articles={articles}/></div>
          <div className="side-menu"><SideMenu/></div>
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
