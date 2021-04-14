import React from 'react'
import rouge10L from '../assets/images/rouge10L.jpg'
import rouge5L from '../assets/images/rouge5L.jpg'
import triangleRouge from '../assets/images/triangle-rouge.png'
import rose5L from '../assets/images/rose5L.jpg'
import triangleClairet from '../assets/images/triangle-clairet.png'
import methodeRose from '../assets/images/COMTE DANDIRAN-1.png'
import triangleMethodeRose from '../assets/images/triangle-methode-rose.png'

const Produits = () => {
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
                                <p className="stock">En Stock</p>
                                <img src={triangleRouge} alt="triangle-rouge" className="triangle"/>
                                {/* stock ? "En Stock" : "Rupture" */}
                            </div>
                        </div>
                        <div className="product-title">
                            <div>
                                <h4>Cubi de vin Rouge</h4>
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
                                {/* stock ? "En Stock" : "Rupture" */}
                            </div>
                        </div>
                        <div className="product-title">
                            <div>
                                <h4>Cubi de vin Rouge</h4>
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
                            {/* stock ? "En Stock" : "Rupture" */}
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
                            {/* stock ? "En Stock" : "Rupture" */}
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

export default Produits
