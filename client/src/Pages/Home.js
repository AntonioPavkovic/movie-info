import html5 from './../images/HTML5_logo.png';
import css3 from './../images/CSS3_logo.png';
import javascript from './../images/javascript_logo.png';
import react from './../images/React_logo.png';
import netflix from './../images/NetFlix_logo.png';
import sql from './../images/sql_logo.png';
import mysql from './../images/mysql_logo.png';
import node from './../images/node_logo.png';
import express from './../images/ExpressJS_logo.png'
import github from './../images/GitHubLogo.png'
import React from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  return (
    <div className="login__root">
      <div className="login__banner">
        <img
        onClick={() => window.location.reload()}
        className="login__logo"
        src={netflix}
        alt="Netflix Logo"
        />
        <button className="login__button"> <h3>Prijavite se!</h3> </button>
      </div>
      <div className="login__fade__top"></div>
      <div className="login__body">
            <div className="login__body__row">
              <h1 className="login__body__header"> Projekt Movie-Info </h1>
            </div>
            <div className="login__body__row">
              <h2 className="login__body__row2"> Antonio Pavković & Nikola Alerić </h2>
            </div>
            <div className="login__body__row">
              <h3 className="login__body__row2"> Ovaj projekt namjenjen je da sadrzi ukratko podatke i trailere o nekim svjetskim filmovima i TV emisijama na jednom mjestu. </h3>
            </div>
            <div className="login__body__row">
              <h3 className="login__body__row2"> Tehnologije koje koristimo: </h3>
            </div>
            <div className = "login__body__row" >

              <div className="col-teh">
                <a href="https://www.w3schools.com/html/" id="html"><img alt="" src={html5} className="tehimg" /></a>
              </div>
              
              <div className="col-teh">
                <a href="https://www.w3schools.com/css/"  id="css3"><img alt="" src={css3} className="tehimg" /></a>
              </div>

              <div className="col-teh">
                <a href="https://www.w3schools.com/js/" id="javascript"><img alt="" src={javascript} className="tehimg" /></a>
              </div>

              <div className="col-teh">
                <a href="https://www.w3schools.com/react/" id="react"><img alt="" src={react} className="tehimg" /></a>
              </div>

              <div className = "col-teh">
                <a href="https://www.w3schools.com/react/" id="react"><img alt="" src={sql} className="tehimg" /></a>
              </div>


              <div className = "col-teh">
                <a href="https://www.w3schools.com/react/" id="react"><img alt="" src={mysql} className="tehimg" /></a>
              </div>


              <div className = "col-teh">
                <a href="https://www.w3schools.com/react/" id="react"><img alt="" src={node} className="tehimg" /></a>
              </div>

              <div className = "col-teh">
                <a href="https://www.w3schools.com/react/" id="react"><img alt="" src={express} className="tehimg" /></a>
              </div>
          </div>
        <div className = "blog-post">
          <a href="https://github.com/AntonioPavkovic/movie-info" target="_blank" rel="noreferrer">
            <span className="githubContainer">
              <img alt='' src={github} className="github" />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
