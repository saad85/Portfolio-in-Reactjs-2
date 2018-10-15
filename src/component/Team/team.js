import React from 'react';
import './team.css';

class Team extends React.Component {
    render(){
        return(
            <section className="team-section">
                <h3>Our Team</h3>
                <div className="row team-container">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 single-team-container">
                       
                        <img src="img/developer1.jpg" />
                        <p>Jonas Smith</p>
                        <p>Web Designer</p>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 single-team-container">
                       
                        <img src="img/developer2.jpg" />
                        <p>Jonas Smith</p>
                        <p>Web Designer</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 single-team-container">
                       
                        <img src="img/developer3.jpg" />
                        <p>Jonas Smith</p>
                        <p>Web Designer</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team