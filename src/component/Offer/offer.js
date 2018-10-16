import React from 'react';

import './offer.css';

class Offer extends React.Component{

render(){
    return (
            <section className="offer-section">
                <h1>What we offer</h1>
                <div className="row offer-container">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 single-offer-container">
                        <div className="single-offer single-offer-1">
                            <div className="single-offer-upper-section">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <div className="single-offer-bottom-section">
                                <h3>Demo offer one</h3>
                                <strong>Some dumyy for the demo offer. This is an nice offer. We are providing this offer snice 2011</strong>
                                <button className="btn btn-primary offer-btn">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 single-offer-container single-offer-2">
                        <div className="single-offer single-offer-2">
                        <div className="single-offer-upper-section">
                                <i className="fa fa-code"></i>
                            </div>
                            <div className="single-offer-bottom-section">
                                <h3>Demo offer one</h3>
                                <strong>Some dumyy for the demo offer. This is an nice offer. We are providing this offer snice 2011</strong>
                                <button className="btn btn-primary offer-btn">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 single-offer-container single-offer-3">
                        <div className="single-offer single-offer-3">
                        <div className="single-offer-upper-section">
                                <i className="fa fa-file"></i>
                            </div>
                            <div className="single-offer-bottom-section">
                                <h3>Demo offer one</h3>
                                <strong>Some dumyy for the demo offer. This is an nice offer. We are providing this offer snice 2011</strong>
                                <button className="btn btn-primary offer-btn">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        }


}

export default Offer;