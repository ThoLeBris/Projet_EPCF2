import React from 'react'
import Nav from './Nav'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <Nav/>
            <div className="title-bloc">
                <img src={logo} alt="logo" className="logo"/>
                <h1>Vindici</h1>
            </div>
            
        </header>
    )
}

export default Header
