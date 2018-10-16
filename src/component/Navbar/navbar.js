import React from 'react';
import {Navbar,Nav, NavItem}  from 'react-bootstrap'
import './navbar.css';
import  ReallySmoothScroll from 'really-smooth-scroll';
ReallySmoothScroll.shim();


class Navigationbar extends React.Component{
   


    render(){

        


        return(<div>
            








        
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand"  href="#">SAMIUL</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav navbar-ul">
                                <li className="nav-item active">
                                    <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Feature</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Offer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Team</a>
                                </li>
      
                            </ul>
                        </div>
                        </nav>




                    </div>

                </div> 
        )
        
        
    }
    


} 
export default Navigationbar;