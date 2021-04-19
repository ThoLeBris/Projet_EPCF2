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
            <button><Link to="/login" className="">Se connecter</Link></button>
        )
    }else{
        link = (
            <div>
                <Link to="/">Retourner sur le site</Link>
                <Link to="/register">Créer un nouvel administrateur</Link>
                <button onClick={logOut} className="">
                    <Link to="/administration">Se déconnecter</Link>
                </button>
            </div>
        )
    }
    return (
        <div className="flex-center">
            <h2>Administration</h2>
            <div>
                {admin ? `Bonjour ${admin.adminName}` : `Connectez-vous pour avoir accès à l'interface`}
            </div>
            
            {link}

        </div>
    )
}

export default Administration
