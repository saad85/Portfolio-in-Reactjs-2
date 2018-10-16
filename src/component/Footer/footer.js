import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render(){
        return (
            <section className="footer-section">
                <div className="footer-upper-section">
                     <h1 className="footer-header">My Portfolio footer</h1>
                     <h3 className="footer-secondary-header">simply dummy text of the printing and typesetting industry. but also the leap</h3>
                     <ul className = "social-media-list">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                     </ul>
                </div>
                <div className = "footer-bottom-section">
                    <div className = "row footer-bottom-section-row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer-bottom-col footer-col-left">
                            <h5>Contact</h5>
                            <div className="contact-parent-box">
                            <i className="fa fa-map-marker icon-left"></i>
                            <i className="fa fa-envelope icon-right"></i>
                            <div className="contact-box">
                                <p>Mirpur, Dhaka, Bangladelsh</p>
                            </div>
                            </div>
                            
                            
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer-bottom-col footer-col-middle">
                            <h5 className="working-hour-heading">Working Hour</h5>
                            <p>This is our woking time. We have a suitable working hour. Dummy content</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer-bottom-col footer-col-right">
                            <h5>Flicker gallery</h5>
                            <div className="row flicker-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 flicker-col">
                                    <img src="img\favourite-1.jpg"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 flicker-col">
                                    <img src="img\favourite-2.jpg"/>
                                </div>
                            </div>
                            <div className="row flicker-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 flicker-col">
                                    <img src="img\favourite-2.jpg"/>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 flicker-col">

                                  <img src="img\favourite-1.jpg"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;