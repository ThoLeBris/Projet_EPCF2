import React from 'react'

const Nav = () => {
    return (
        <div className="nav-bloc">
            <ul className="nav-left">
                <li className="nav-item">A propos</li>
                <li className="nav-item">Catalogue</li>
                <li className="nav-item">Contact</li>
            </ul>
            <div className="nav-right">
                <div className="commander">Commander</div>
            </div>
        </div>
    )
}

export default Nav
