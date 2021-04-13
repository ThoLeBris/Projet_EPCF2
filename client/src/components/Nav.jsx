import React from 'react'

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-left">
                <a href="#apropos"><li className="nav-item">A propos</li></a>
                <a href="#products"><li className="nav-item">Catalogue</li></a>
                <li className="nav-item">Contact</li>
            </ul>
            <div className="nav-right">
                <a href="#commander"><div className="commander">Commander</div></a>
            </div>
        </div>
    )
}

export default Nav
