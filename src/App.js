import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './component/Header/header';
import Feature from './component/Feature/feature';
import Portfolio from './component/Portfolio/portfolio';
import Offer from './component/Offer/offer';
import Team from './component/Team/team';
import Footer from './component/Footer/footer';
import ScrollToTop from 'react-scroll-up'
import {Button } from 'react-bootstrap'

import {Route,
  NavLink,
  Router} from 'react-router-dom'


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

        <ScrollToTop showUnder={120} topPosition={0} >
         <Button bsStyle="info"> <span> UP</span></Button>
        </ScrollToTop>



      </div>
    );
  }
}

export default App;
