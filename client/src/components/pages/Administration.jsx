import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'

const Administration = () => {
    
    const {admin, setAdmin} = useContext(AdminContext)
    
    const [productId,setProductId] = useState("");
    const [productName,setProductName] = useState("");
    const [productStock,setProductStock] = useState(true);
    const [productDescription,setProductDescription] = useState("");
    const [productPrice,setProductPrice] = useState("");
    const [product,setProduct] = useState([]);

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
    
    //? Afficher les produits au chargement de la page
    async function getProduct(){
        try{
            const res = await axios.get('http://localhost:8000/api/product/getProduct');
            console.log(res.data);
        }catch(error){
            console.error('getProduct error')
        }
    }
    useEffect(() => {
        getProduct()
    }, [product])

    //? Switch du stock : en stock / rupture
    const toggleStock = async (e)=>{

        await fetch('http://localhost:8000/api/product/toggleStock',
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
            },
        )
    }

    let page;

    //? Si l'utilisateur n'est pas administrateur le "if" s'affichera, autrement ce sera le "else"
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


                <table onLoad={getProduct}>
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
                            <td>{productName}</td>
                            <td onClick={toggleStock}>{getProduct.productStock}</td>
                            <td>{product.productDescription}</td>
                            <td>{getProduct.productPrice}</td>
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
