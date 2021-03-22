
import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

export function Header() {
    return (
        
            <div>
                <img src="/assets/logo_bookstore.png" width="150" height="100"></img>
                <div>
                <NavLink to='/' exact className="button" activeClassName='success'>Home</NavLink>
                <NavLink to='/about' className="button" activeClassName='success'>About</NavLink>
                <NavLink to='/contact' className="button" activeClassName='success'>Contact</NavLink>        
                <NavLink to='/services' className="button" activeClassName='success'>Services</NavLink>
                <NavLink to='/products' className="button" activeClassName='success'>Products</NavLink>
                <NavLink to="/dashboard" className="button" activeClassName='success' >Dashboard</NavLink>
                
                

            </div>
            <hr/>
            </div>
        )
    }
