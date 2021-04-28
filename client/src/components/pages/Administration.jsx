import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'

const Administration = () => {
    
    const {admin, setAdmin} = useContext(AdminContext)

    const {productId,setProductId} = useState("");
    const {productName,setProductName} = useState("");
    const {productStock,setProductStock} = useState(true);
    const {productDescription,setProductDescription} = useState("");
    const {productPrice,setProductPrice} = useState("");


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
            },
        )
    // const product = [
    //     {productId : setProductId},
    //     {productName : setProductName},
    //     {productStock : setProductStock},
    //     {productDescription : setProductDescription},
    //     {productPrice : setProductPrice}
    // ];
        // const listProduct = [];

        // const product1 = [
        //     {productId : 1 },
        //     {productName : setProductName},
        //     {productStock : setProductStock},
        //     {productDescription : setProductDescription},
        //     {productPrice : setProductPrice}
        // ];
        // const product2 = [
        //     {productId : 2 },
        //     {productName : setProductName},
        //     {productStock : setProductStock},
        //     {productDescription : setProductDescription},
        //     {productPrice : setProductPrice}
        // ];

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
                
                {/* {
                    products.map(({product}) => {
                        return(
                            <>
                                <div>{product.productName}</div>
                                <div>{product.productStock}</div>
                                <div>{product.productDescription}</div>
                                <div>{product.productPrice}</div>
                            </>
                        )
                    })
                } */}


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
                            <td>{product.productName}</td>
                            <td>{product.productStock}</td>
                            <td>{product.productDescription}</td>
                            <td>{product.productPrice}</td>
                        </tr>
                        <tr>
                            <td>nom2</td>
                            <td>stock2</td>
                            <td>description2</td>
                            <td>prix2</td>
                        </tr>
                        <tr>
                            <td>nom3</td>
                            <td>stock3</td>
                            <td>description3</td>
                            <td>prix3</td>
                        </tr>
                        <tr>
                            <td>nom4</td>
                            <td>stock4</td>
                            <td>description4</td>
                            <td>prix4</td>
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
