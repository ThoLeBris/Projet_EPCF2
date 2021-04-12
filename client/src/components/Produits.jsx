import React from 'react'
import rouge10L from '../assets/images/rouge10L.jpg'
import rouge5L from '../assets/images/rouge5L.jpg'
import rose5L from '../assets/images/rose5L.jpg'

const Produits = () => {
    return (
        <div id="products">
            <div className="largeur">
                <h2>Nos Produits</h2>
                <h3>Vins tranquilles</h3>
                <div className="top-line">
                    <div className="demi-produit">
                        <img src={rouge10L} alt="Vin rouge 10L" className="photo-produit rouge10L"/>
                        <div className="triangle-rouge">
                            <p className="stock">En Stock</p>
                            {/* stock ? "En Stock" : "Rupture" */}
                        </div>
                        <h4 className="product-title">Cubi de vin Rouge</h4>
                        <div className="product-quantity decal">10 Litres</div>
                        <div className="product-info">
                            <p className="product-description">Bag in box de notre vin rouge, au format 10L.</p>
                            <div className="product-price">
                                <div className="product-price-content">35,00€</div>
                            </div>
                        </div>
                    </div>
                    <div className="demi-produit">
                        <img src={rouge5L} alt="Vin rouge 5L" className="photo-produit rouge5L"/>
                        <div className="triangle-rouge">
                            <p className="stock">En Stock</p>
                            {/* stock ? "En Stock" : "Rupture" */}
                        </div>
                        <h4 className="product-title">Cubi de vin Rouge</h4>
                        <div className="product-quantity decal decal-right">5 Litres</div>
                        <div className="product-info">
                            <p className="product-description">Bag in box de notre vin rouge, au format 5L.</p>
                            <div className="product-price">
                                <div className="product-price-content">20,00€</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Pour les bulles</h3>
                <div className="clairet">
                    <img src={rose5L} alt="Vin rouge 5L" className="photo-produit rouge5L"/>
                    <div className="triangle-clairet">
                        <p className="stock">En Stock</p>
                        {/* stock ? "En Stock" : "Rupture" */}
                    </div>
                    <h4 className="product-title">Cubi de vin Clairet</h4>
                    <div className="product-quantity decal decal-right">5 Litres</div>
                    <div className="product-info">
                        <p className="product-description">Bag in box de notre vin clairet, au format 5L.</p>
                        <div className="product-price">
                            <div className="product-price-content">17,50€</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produits
