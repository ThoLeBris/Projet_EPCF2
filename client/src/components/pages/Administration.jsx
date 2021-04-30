import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'

const Administration = () => {
    
    const {admin, setAdmin} = useContext(AdminContext);
    
    const [productName,setProductName] = useState("");
    const [productStock,setProductStock] = useState(true);
    const [productDescription,setProductDescription] = useState("");
    const [productPrice,setProductPrice] = useState("");
    const [product,setProduct] = useState([]);
    const [newProduct,setNewProduct] = useState([]);
    // const [setSubmit] = useState([]);

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
    
    //? Créer un produit
    async function createProduct(){
        try{
            const newProduct = await axios.post('http://localhost:8000/api/product/createProduct');
            console.log(newProduct.data);
            setNewProduct(newProduct.data);
        }catch(error){
            console.error('createProduct error')
        }
    }

    const handelNewProduct = (e)=>{
        e.preventDefault();
        console.log(product);
        // setSubmit(true);
        setProduct({
            ...{productName},
            ...{productStock},
            ...{productDescription},
            ...{productPrice}
        });
    }

    //? Afficher tous les produits au chargement de la page
    const getProduct = async (e)=>{
        try{
            const product = await axios.get('http://localhost:8000/api/product/getProduct');
            console.log(product.data);
            setProduct()
        }catch(error){
            console.error('getProduct error')
        }
    }
    useEffect(() => {
        getProduct()
    }, [product])

    const handelLoadProduct = (e)=>{
        e.preventDefault();
        console.log(product);
        setProduct({
            ...{productName},
            ...{productStock},
            ...{productDescription},
            ...{productPrice}
        });
    }

    //? Afficher UN produit
    const getOneProduct = async (e)=>{
        try{
            const product = await axios.get('http://localhost:8000/api/product/getProduct/:id');
            console.log(product.data);
            setProduct(product.data)
        }catch(error){
            console.error('getProduct error')
        }
    }

    //? Switch du stock : en stock / rupture
    const toggleStock = async (e)=>{

        await fetch('http://localhost:8000/api/product/toggleStock',
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
            },
        )
        setProductStock()
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

                <form method="POST" onSubmit={createProduct}>
                    <input type="text" value={productName} placeholder="nom" onChange={(e)=>setProductName(e.target.value)}/>
                    <label htmlFor="stock">Stock</label>
                    <input type="checkbox" value={productStock} onChange={(e)=>setProductStock(e.target.value)}/>
                    <input type="text" value={productDescription} placeholder="description"  onChange={(e)=>setProductDescription(e.target.value)}/>
                    <input type="text" value={productPrice} placeholder="prix"  onChange={(e)=>setProductPrice(e.target.value)}/>

                    <button onClick={handelNewProduct}>Créer prdt</button>
                </form>

                <table onLoad={getProduct}>
                    <thead>
                        <tr>
                            <th className="largeur-nom">Nom</th>
                            <th className="largeur-stock">Stock</th>
                            <th className="largeur-description">Description</th>
                            <th className="largeur-prix">Prix</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>{productName}</td>
                            <td onClick={toggleStock}>{productStock}</td>
                            <td>{productDescription}</td>
                            <td>{productPrice}</td>
                        </tr>
                        <tr>
                            <td>{handelLoadProduct.productName}</td>
                            <td onClick={toggleStock}>{productStock}</td>
                            <td>{productDescription}</td>
                            <td>{productPrice}</td>
                        </tr>
                        <tr>
                            <td onClick={getOneProduct} value={1} >nom2</td>
                            <td>
                                <input type="checkbox" name="checkStock" id="checkStock"
                                    value={productStock} onChange={toggleStock}/>{productStock ? "En Stock" : "Rupture"}
                            </td>
                            <td>description2</td>
                            <td>prix2</td>
                        </tr>
                        <tr>
                            <td>nom3</td>
                            <td>
                                <input type="checkbox" name="checkStock" id="checkStock"
                                    value={productStock} onChange={toggleStock}/>{productStock ? "En Stock" : "Rupture"}
                            </td>
                            <td>description3</td>
                            <td>prix3</td>
                        </tr>
                        <tr>
                            <td>nom4</td>
                            <td>
                                <input type="checkbox" name="checkStock" id="checkStock"
                                    value={productStock} onChange={toggleStock}/>{productStock ? "En Stock" : "Rupture"}
                            </td>
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
