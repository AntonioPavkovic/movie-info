import React from "react";
import Row from "../components/Row/Row";
import requests from "../requests/requests";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import "./Browse.css"

function Browse() {
    return (
        <div className="browse">
          {/* Nav bar */}
          <Nav />
          {/* Banner */}
          <Banner />
          {/* Rows */}
          <Row
            title={"NETFLIX ORIGINALS"}
            movie_request={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title={"Trending Now"} movie_request={requests.fetchTrending} />
          <Row title={"Top Rated"} movie_request={requests.fetchTopRated} />
          <Row title={"Action Movies"} movie_request={requests.fetchActionMovies} />
          <Row title={"Comedy Movies"} movie_request={requests.fetchComedyMovies} />
          <Row title={"Horror Movies"} movie_request={requests.fetchHorrorMovies} />
          <Row
            title={"Romance Movies"}
            movie_request={requests.fetchRomanceMovies}
          />
          <Row
            title={"Documentaries"}
            movie_request={requests.fetchDocumentaries}
          />
        </div>
      );
}

export default Browse;