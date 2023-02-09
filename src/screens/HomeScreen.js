import React from 'react'
import "./homeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import Row from "../Row.js";
import requests from "../Request.js";
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>

        <Banner/>

        <Row title ={"Netflix Originals"} request ={requests.fetchNetflixOriginals} isLarge ={true}/>
        <Row title ={"Trending"} request ={requests.fetchTrending}/>
        <Row title ={"Top Rated"} request ={requests.fetchTopRated}/>
        <Row title ={"Action Movies"} request ={requests.fetchActionMovies}/>
        <Row title ={"Comedy Movies"} request ={requests.fetchComedyMovies}/>
        <Row title ={"Romance hits"} request ={requests.fetchRomanceMovies}/>
        <Row title ={"Horror Movies"} request ={requests.fetchHorrorMovies}/>
        <Row title ={"Documentaries"} request ={requests.fetchDocumentaries}/>


    </div>
  )
}

export default HomeScreen