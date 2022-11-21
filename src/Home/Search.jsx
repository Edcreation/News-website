import React, { useState } from 'react'
import { useEffect } from 'react';
import './style.css'
function Search() {
    const [search, setsearch] = useState([]);

    useEffect(()=>{
        const search = async () => {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&number=3&apiKey=6365bddee90b498da97ff0a43e589791`);
            const data = await response.json();
            setsearch(data.articles);
        };
        search();
    },[]);



  return (
    <div className="home">
      {home.map((articles)=>{
        return (
          <div className="container" key={articles.id} >
            <div className="news-box">
              <div className="news-image">
                <img src={articles.urlToImage} alt="{articles.title}" />
              </div>
              <div className="news-title">
                <p>{articles.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Search