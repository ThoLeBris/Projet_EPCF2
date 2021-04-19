import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../AdminContext'

const Administration = () => {

    const {admin, setAdmin} = useContext(AdminContext) 

    //? Fonction Log Out qui va déconnecter l'utilisateur actuel
    const logOut = async (e)=>{

        await fetch('http://localhost:8000/api/admin/logout', 
            {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                credentials:'include'
            }
        )
        setAdmin(null);
    }

    let link;

    if(!admin){
        link = (
            <Link to="/login" className="btn-connect">Se connecter</Link>
        )
    }else{
        link = (
            <div>
                <Link to="/" className="btn-connect">Retourner sur le site</Link>
                <Link to="/register" className="btn-connect">Créer un nouvel administrateur</Link>
                <Link to="/administration" onClick={logOut} className="disconnect">Se déconnecter</Link>
            </div>
        )
    }
    return (
        <div id="administration" className="flex-center">
            <h2>Administration</h2>
            <div>
                {admin ? `Bonjour ${admin.adminName}` : `Connectez-vous pour avoir accès à l'interface`}
            </div>
            
            {link}

        </div>
    )
}

export default Administration
