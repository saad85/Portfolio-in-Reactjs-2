import React from 'react';

import './portfolio.css' 


class Portfoliio extends React.Component{

    render(){
        return(
                <section className="portfolio-section">
                    <h1 className="portfolio-header">My Portfolio</h1>

                    <div className="row portfolio-gallery">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-1">
                            <img className="portfolio-img" src="/img/nature-2.jpg"/>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-2">
                            <img className="portfolio-img" src="/img/city2.jpeg.jpeg"/>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-3">
                            <img className="portfolio-img" src="/img/greece.jpeg"/>
                        </div>
                    </div>
                    <div className="row portfolio-gallery">
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-4">
                            <img className="portfolio-img" src="/img/greece2.jpeg"/>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-5">
                            <img className="portfolio-img" src="/img/iceland.jpg"/>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-6">
                            <img className="portfolio-img" src="/img/iceland2.jpg"/>
                        </div>
                    </div>
                    <div className="row portfolio-gallery">
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-7">
                             <img className="portfolio-img" src="/img/nature-1.jpg"/>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-8">
                        
                        <img className="portfolio-img" src="/img/nature-2.jpg"/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 single-portfolio portfolio-9">
                        <img className="portfolio-img" src="/img/city2.jpeg.jpeg"/>
                        </div>
                    </div>

                </section>

        )
    }


}

export default Portfoliio;