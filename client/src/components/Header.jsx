import React from 'react'
import Nav from './Nav'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <Nav/>
            <div className="title-bloc">
                <img src={logo} alt="logo" className="logo"/>
                <h1>Vindici</h1>
            </div>
            
        </div>
    )
}

export default Header
