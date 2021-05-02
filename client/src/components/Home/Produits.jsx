import axios from 'axios'
import React, { Component } from 'react';

import rouge10L from '../../assets/images/rouge10L.jpg';
import rouge5L from '../../assets/images/rouge5L.jpg';
import triangleRouge from '../../assets/images/triangle-rouge.png';
import rose5L from '../../assets/images/rose5L.jpg';
import triangleClairet from '../../assets/images/triangle-clairet.png';
import methodeRose from '../../assets/images/COMTE DANDIRAN-1.png';
import triangleMethodeRose from '../../assets/images/triangle-methode-rose.png';
export default class ProduitsV2 extends Component {

    constructor(props){
        super(props);

        this.state = {
            productName1: '',
            productStock1: '',
            productDescription1: '',
            productPrice1: '',
            
            productName2: '',
            productStock2: '',
            productDescription2: '',
            productPrice2: '',
            
            productName3: '',
            productStock3: '',
            productDescription3: '',
            productPrice3: '',
            
            productName4: '',
            productStock4: '',
            productDescription4: '',
            productPrice4: '',
            }
    }
    
    componentDidMount(){

            axios.get('http://localhost:8000/api/product/getProduct/6086bc91b9530b0c85263211')
                .then(response =>
                    this.setState({
                        productName1: response.data.productName,
                        productStock1: response.data.productStock,
                        productDescription1: response.data.productDescription,
                        productPrice1: response.data.productPrice,
                    })
                )
                .catch(error => console.error({ error }));
            
            axios.get('http://localhost:8000/api/product/getProduct/6086bd86b9530b0c85263212')
                .then(response =>
                    this.setState({
                        productName2: response.data.productName,
                        productStock2: response.data.productStock,
                        productDescription2: response.data.productDescription,
                        productPrice2: response.data.productPrice,
                    })
                )
                .catch(error => console.error({ error }));
            
            axios.get('http://localhost:8000/api/product/getProduct/6086be6bb9530b0c85263213')
                .then(response =>
                    this.setState({
                        productName3: response.data.productName,
                        productStock3: response.data.productStock,
                        productDescription3: response.data.productDescription,
                        productPrice3: response.data.productPrice,
                    })
                )
                .catch(error => console.error({ error }))
            
                axios.get('http://localhost:8000/api/product/getProduct/6086be91b9530b0c85263214')
                .then(response =>
                    this.setState({
                        productName4: response.data.productName,
                        productStock4: response.data.productStock,
                        productDescription4: response.data.productDescription,
                        productPrice4: response.data.productPrice,
                    })
                )
                .catch(error => console.error({ error }))
}

    render() {
        return (
            <div id="products">
            <div className="largeur">
                <h2>Nos Produits</h2>
                <h3>Vins tranquilles</h3>
                <div className="top-line">

                    <div className="demi-produit">
                        <div className="top-card">
                            <img src={rouge10L} alt="Vin rouge 10L" className="photo-produit"/>
                            <div>
                                <p className="stock">{this.state.productStock1}</p>
                                <img src={triangleRouge} alt="triangle-rouge" className="triangle"/>
                            </div>
                        </div>
                        <div className="product-title">
                            <div>
                                <h4>{this.state.productName1}</h4>
                            </div>
                        </div>
                        <div className="product-info">
                            <p className="product-description">{this.state.productDescription1}</p>
                            <div className="product-price">
                                <div className="product-price-content">{this.state.productPrice1}</div>
                            </div>
                        </div>
                    </div>
                    <div className="demi-produit">
                        <div className="top-card">
                            <img src={rouge5L} alt="Vin rouge 5L" className="photo-produit"/>
                            <div>
                                <p className="stock">{this.state.productStock2}</p>
                                <img src={triangleRouge} alt="triangle-rouge" className="triangle"/>
                            </div>
                        </div>
                        <div className="product-title">
                            <div>
                                <h4>{this.state.productName2}</h4>
                            </div>
                        </div>
                        <div className="product-info">
                            <p className="product-description">{this.state.productDescription2}</p>
                            <div className="product-price">
                                <div className="product-price-content">{this.state.productPrice2}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="full-produit">
                    <div className="top-card">
                        <img src={rose5L} alt="Vin clairet 5L" className="photo-full-produit clairet"/>
                        <div>
                            <p className="stock">{this.state.productStock3}</p>
                            <img src={triangleClairet} alt="triangle-clairet" className="triangle"/>
                        </div>
                    </div>
                    <div className="full-product-title">
                        <div>
                            <h4>{this.state.productName3}</h4>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="product-description">{this.state.productDescription3}</p>
                        <div className="product-price">
                            <div className="product-price-content">{this.state.productPrice3}</div>
                        </div>
                    </div>
                </div>

                <h3>Pour les bulles</h3>

                <div className="full-produit">
                    <div className="top-card">
                        <img src={methodeRose} alt="Vin clairet 5L" className="photo-full-produit"/>
                        <div>
                            <p className="stock">{this.state.productStock4}</p>
                            <img src={triangleMethodeRose} alt="triangle-clairet" className="triangle"/>
                        </div>
                    </div>
                    
                    <div className="full-product-title">
                        <div>
                            <h4>{this.state.productName4}</h4>
                            <div>Caisse 6 bouteilles de 75cl</div>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="product-description">{this.state.productDescription4}</p>
                        <div className="product-price">
                            <div className="product-price-content">{this.state.productPrice4}</div>
                        </div>
                    </div>
                </div>

                <h2>Livraison</h2>
                <div className="fond-rouge">
                    <h3>Les zones de livraisons régulières :</h3>
                    <div className="ligne-container">
                        <div className="ligne-livraison">
                            <p>- Gironde: </p>
                            <p>2 fois par mois</p>
                        </div>
                        <div className="ligne-livraison">
                            <p>- Charente, Vendée, Bretagne:</p>
                            <p>1 fois tous les 2 mois</p>
                        </div>
                    </div>
                    <p>Livraison Hors Zone selon le volume, sur devis.</p>
                    <p>Réglement à le livraison.</p>
                </div>
            </div>
        </div>
        )
    }
}
