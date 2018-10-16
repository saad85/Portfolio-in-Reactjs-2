import React, { Component } from 'react';
import logo from './logo.svg';


import Header from './component/Header/header';
import Feature from './component/Feature/feature';
import Portfolio from './component/Portfolio/portfolio';
import Offer from './component/Offer/offer';
import Team from './component/Team/team';
import Footer from './component/Footer/footer';

import {Button } from 'react-bootstrap'





class App extends Component {
  render() {
    return (
      <div className="App">


        <Header/>
        <Feature/>
        <Portfolio/>
        <Offer/>
        <Team/>
        <Footer/>

       



      </div>
    );
  }
}

export default App;
