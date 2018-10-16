import React from 'react';
import './navbar.css';


class Navigationbar extends React.Component{
    
    render(){
        return(
        
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand"  href="#">SAMIUL</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav navbar-ul">
                                <li class="nav-item active">
                                    <a class="nav-link" to="/home" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" to="/feature" href="#">Feature</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" to="/portfolio" href="#">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Offer</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Team</a>
                                </li>
      
                            </ul>
                        </div>
                        </nav>




                    </div>
        )
        
        
    }
    


} 
export default Navigationbar;