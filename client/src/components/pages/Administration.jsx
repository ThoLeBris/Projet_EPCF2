import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'

import ProductList from '../Administration/productList'
import CreateProduct from '../Administration/createProduct'

const Administration = () => {
    
    const {admin, setAdmin} = useContext(AdminContext);

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
      
    let page;

    //? Si l'utilisateur n'est pas administrateur le "if" s'affichera (demande de connexion ou retour au site), autrement ce sera le "else" (interface administrateur)
    if(!admin){
        page = (
            <>
                <Link to="/login" className="btn-connect">Se connecter</Link>
                <Link to="/" className="btn-connect">Retourner sur le site</Link>
            </>
        )
    }else{
        page = (
            <div>
                <div className="bar-btn">
                    <Link to="/" className="btn-connect">Retourner sur le site</Link>
                    <Link to="/register" className="btn-connect">Créer un nouvel administrateur</Link>
                    <Link to="/administration" onClick={logOut} className="disconnect">Se déconnecter</Link>
                </div>

                <ProductList/>

                <CreateProduct/>
                
            </div>
        )
    }

    return (
        <div id="administration" className="flex-center">
            <h2>Administration</h2>
            <div>
                {admin ? `Bonjour ${admin.adminName}` : `Si vous êtes administrateur, connectez-vous pour avoir accès à l'interface.`}
            </div>
            
            {page}
            
        </div>
    )
}

export default Administration
