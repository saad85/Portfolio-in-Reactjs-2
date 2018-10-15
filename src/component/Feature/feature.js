import React from 'react';
import './feature.css';
import 'font-awesome/css/font-awesome.min.css';



class Feature extends React.Component {
    render(){
        return (
            <section className = "feature-section">
                <h1>Feature</h1>
                <div className = "row feature-container">
                    <div className = "col-lg-4 col-md-4 col-sm-4 col-12 single-feature single-feature-left">
                        <div className="feature-item-div">
                            <section className="feature-detail align-left">
                                <h1>Demo Feature</h1>
                                <p>This is a demo feature. This feature is very useful and awesome</p>
                            </section>
                            <section className = "feature-icon">
                            <i class="fa fa-cogs"></i>
                            </section>
                        </div>
                        <div className="feature-item-div">
                            <section className="feature-detail align-left">
                                <h1>Demo Feature</h1>
                                <p>This is a demo feature. This feature is very useful and awesome</p>
                            </section>
                            <section className="feature-icon">
                            <i class="fa fa-cogs"></i>
                            </section>
                        </div>
                        <div className="feature-item-div">
                            <section className="feature-detail align-left">
                                <h1>Demo Feature</h1>
                                <p>This is a demo feature. This feature is very useful and awesome</p>
                            </section>
                            <section className="feature-icon">
                            <i class="fa fa-cogs"></i>
                             </section>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-md-4 col-sm-4 col-12 single-feature-middle">
                        <img className = "feature-img" src = "/img/technology.jpeg"/>
                    </div>
                    <div className = "col-lg-4 col-md-4 col-sm-4 col-12 single-feature-right">
                    <div className="feature-item-div">
                            
                            <section className="feature-icon-right">
                            <i class="fa fa-cogs"></i>


                            </section>
                            <section className="feature-detail align-right">
                            <h1>Demo Feature</h1>
                                <p>This is a demo feature. This feature is very useful and awesome</p>
                            </section>
                        </div>
                        <div className="feature-item-div">
                        <section className="feature-icon-right">
                        <i class="fa fa-cogs"></i>

                                </section>
                                <section className="feature-detail align-right">
                                <h1>Demo Feature</h1>
                                <p>This is a demo feature. This feature is very useful and awesome</p>
                                </section>
                        </div>
                        <div className="feature-item-div">
                        <section className="feature-icon-right">
                        <i class="fa fa-cogs"></i>


                                </section>
                                <section className="feature-detail align-right">
                                <h1>Demo Feature</h1>
                                <p>This is a demo feature. This feature is very useful and awesome</p>
                                </section>
                        </div>



                       
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;