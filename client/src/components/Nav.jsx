import React from 'react'

const Nav = () => {
    return (
        <nav className="nav" id="nav">
            <ul className="nav-left">
                <a href="#apropos"><li className="nav-item">A propos</li></a>
                <a href="#products"><li className="nav-item">Catalogue</li></a>
                <a href="#contact"><li className="nav-item">Contact</li></a>
            </ul>
            <div className="nav-right">
                <a href="#commander"><div className="commander">Commander</div></a>
            </div>
        </nav>
    )
}

export default Nav
