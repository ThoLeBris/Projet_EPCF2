import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <small className="copyright">©Copyright Thomas Le Bris</small>
            
            <small className="link-admin"><Link className="link-color" to="/login">Administration</Link></small>
            
        </footer>
    )
}

export default Footer
