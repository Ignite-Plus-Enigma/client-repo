import React, { Component, useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo.png'
import Search from './Search'
import './Navbar.css'
class Navbar extends Component {
    
    render(){
        
        
        return(
            <nav className="app">
                
                <ul>
                    <img src={logo} alt="logo" width="130" height="90"/>
                    <li><NavLink exact activeClassName="current" to='/' aria-label="Home">Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/PDFBooks/" aria-label="PDF Books" >Books</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/AudioBooks/" aria-label="AudioBooks">Audio Books </NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/Saved/" aria-label="Saved Books">Saved </NavLink></li>
                    <li><Search/></li>
                    {/* <li><NavLink exact activeClassName="current" to="/Donate/" aria-label="Donate Page">Donate </NavLink></li> */}
                    <li> <a href ="https://www.samarthanam.org/donate/">Donate</a></li>
                    <li><NavLink exact activeClassName="current" to="/SignIn/" aria-label="Signin Page">Sign In</NavLink></li>
                    <hr></hr>
                        
                </ul>
            </nav>
        );
    }
}
export default Navbar;