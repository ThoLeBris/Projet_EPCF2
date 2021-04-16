import React from 'react'
import { Link } from 'react-router-dom'

const Administration = () => {
    return (
        <div>
            <Link to="/">Retourner sur le site</Link>
            <Link to="/register">Créer un nouvel administrateur</Link>
        </div>
    )
}

export default Administration
