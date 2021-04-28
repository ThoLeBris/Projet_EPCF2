import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'

const Administration = () => {
    
    const {admin, setAdmin} = useContext(AdminContext)

    const [productName,setProductName] = useState("");
    const [productStock,setProductStock] = useState(true);
    const [productDescription,setProductDescription] = useState("");
    const [productPrice,setProductPrice] = useState("");


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

    const product = fetch('http://localhost:8000/api/product/',
            {
                method:'GET',
                headers: {'Content-Type':'application/json'},
            }
        )
        const product1 = [
            {productId = 1 },
            {productName = setProductName},
            {productStock = setProductStock},
            {productDescription = setProductDescription},
            {productPrice = setProductPrice}
        ];
    let page;

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
                <div>
                    <Link to="/" className="btn-connect">Retourner sur le site</Link>
                    <Link to="/register" className="btn-connect">Créer un nouvel administrateur</Link>
                    <Link to="/administration" onClick={logOut} className="disconnect">Se déconnecter</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Prix</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product1.productName}</td>
                            <td>{product1.productStock}</td>
                            <td>{product1.productDescription}</td>
                            <td>{product1.productPrice}</td>
                        </tr>
                        <tr>
                            <td>nom2</td>
                            <td>stock1</td>
                            <td>description1</td>
                            <td>prix1</td>
                        </tr>
                        <tr>
                            <td>nom3</td>
                            <td>stock1</td>
                            <td>description1</td>
                            <td>prix1</td>
                        </tr>
                        <tr>
                            <td>nom4</td>
                            <td>stock1</td>
                            <td>description1</td>
                            <td>prix1</td>
                        </tr>
                        
                    </tbody>
                </table>
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
