import axios from 'axios'

import React, { Component } from 'react'
import rouge10L from '../../assets/images/rouge10L.jpg'
import rouge5L from '../../assets/images/rouge5L.jpg'
import triangleRouge from '../../assets/images/triangle-rouge.png'
import rose5L from '../../assets/images/rose5L.jpg'
import triangleClairet from '../../assets/images/triangle-clairet.png'
import methodeRose from '../../assets/images/COMTE DANDIRAN-1.png'
import triangleMethodeRose from '../../assets/images/triangle-methode-rose.png'



export default class ProduitsV2 extends Component {

    constructor(props){
        super(props);

        // this.Produit1 = this.Produit1.bind(this);
        // this.Produit2 = this.Produit2.bind(this);
        // this.Produit3 = this.Produit3.bind(this);
        // this.Produit4 = this.Produit4.bind(this);
        // this.Produit1.productName = this.data.productName.bind(this);
        // this.Produit1.productStock = this.data.productStock.bind(this);
        // this.Produit1.productDescription = this.data.productDescription.bind(this);
        // this.Produit1.productPrice = this.data.productPrice.bind(this);

        this.state = {
            product1:[],
            
            productName1: '',
            productStock1: '',
            productDescription1: '',
            productPrice1: '',
            
            productName2: '',
            productStock2: '',
            productDescription2: '',
            productPrice2: '',
            }
        this.productName = this.props.productName;
        this.productStock = this.props.productStock;
        this.productDescription = this.props.productDescription;
        this.productPrice = this.props.productPrice;
        
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
            
    }
    
    // Produit3(){
    //     axios.get('http://localhost:8000/api/product/getProduct/6086be6bb9530b0c85263213')
    //     .then(response =>
    //         this.setState({
    //             productName: response.data.productName,
    //             productStock: response.data.productStock,
    //             productDescription: response.data.productDescription,
    //             productPrice: response.data.productPrice,
    //         })
    //     )
    //     .catch(error => console.error({ error }))
    // }
    // Produit4(){
    //     axios.get('http://localhost:8000/api/product/getProduct/6086be91b9530b0c85263214')
    //     .then(response =>
    //         this.setState({
    //             productName: response.data.productName,
    //             productStock: response.data.productStock,
    //             productDescription: response.data.productDescription,
    //             productPrice: response.data.productPrice,
    //         })
    //     )
    //     .catch(error => console.error({ error }))
    // }

    
    render() {
        // const Produit1 = this.props.product;
        // const = ;
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
                                <div>10 Litres</div>
                            </div>
                        </div>
                        <div className="product-info">
                            <p className="product-description">Bag in box de notre vin rouge, au format 10L.</p>
                            <div className="product-price">
                                <div className="product-price-content">35,00€</div>
                            </div>
                        </div>
                    </div>
                    <div className="demi-produit">
                        <div className="top-card">
                            <img src={rouge5L} alt="Vin rouge 5L" className="photo-produit"/>
                            <div>
                                <p className="stock">En Stock</p>
                                <img src={triangleRouge} alt="triangle-rouge" className="triangle"/>
                            </div>
                        </div>
                        <div className="product-title">
                            <div>
                                <h4>{this.state.productName2}</h4>
                                <div>5 Litres</div>
                            </div>
                        </div>
                        <div className="product-info">
                            <p className="product-description">Bag in box de notre vin rouge, au format 5L.</p>
                            <div className="product-price">
                                <div className="product-price-content">20,00€</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="full-produit">
                    <div className="top-card">
                        <img src={rose5L} alt="Vin clairet 5L" className="photo-full-produit clairet"/>
                        <div>
                            <p className="stock">En Stock</p>
                            <img src={triangleClairet} alt="triangle-clairet" className="triangle"/>
                        </div>
                    </div>
                    <div className="full-product-title">
                        <div>
                            <h4>Cubi de vin Clairet</h4>
                            <div>5 Litres</div>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="product-description">Bag in box de notre vin clairet, au format 5L.</p>
                        <div className="product-price">
                            <div className="product-price-content">17,50€</div>
                        </div>
                    </div>
                </div>

                <h3>Pour les bulles</h3>

                <div className="full-produit">
                    <div className="top-card">
                        <img src={methodeRose} alt="Vin clairet 5L" className="photo-full-produit"/>
                        <div>
                            <p className="stock">En Stock</p>
                            <img src={triangleMethodeRose} alt="triangle-clairet" className="triangle"/>
                        </div>
                    </div>
                    
                    <div className="full-product-title">
                        <div>
                            <h4>Méthode traditionnelle Rosé</h4>
                            <div>Caisse 6 bouteilles de 75cl</div>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="product-description">Notre méthode traditionnelle ravira vos papilles, en apéritif ou en dessert.</p>
                        <div className="product-price">
                            <div className="product-price-content">50,00€</div>
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
