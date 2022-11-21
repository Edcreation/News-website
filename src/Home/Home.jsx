import React from 'react'
import {useState, useEffect} from "react";
import './style.css';
import { API_KEY } from '../base';
function Home() {
	const [home, setHome] = useState([]);
	useEffect(() => {
	const getNews = async () => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&category=business&number=3&apiKey=6365bddee90b498da97ff0a43e589791`
		);
		const data = await response.json();
		console.log(data.articles);
		setHome(data.articles);
	};
	getNews();
},[]);




  return (
	<div className="home">
      {home.map((articles)=>{
        return (
          <div className="container" key={articles.id} >
            <a href={articles.url} className="news-box">
              <div className="news-image">
                <img src={articles.urlToImage} alt="{articles.title}" />
              </div>
              <div className="news-title">
                <p>{articles.description}</p>
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Home 