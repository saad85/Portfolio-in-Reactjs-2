import React from 'react';
import './header.css';

import Navigationbar from '../Navbar/navbar';


class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(

            <section className = "header-section">
            <Navigationbar/>
                <div className = "header-section-headings-container">
                    <h1 className = "header-primary">My name is Samiul Islam Saad</h1>
                    <h1 className = "header-secondary">This Portfolio is developed to reflect my accomplishments, skills, experiences in ReactJs.</h1>
                </div>    
            </section>
        )
    }
}

export default Header;