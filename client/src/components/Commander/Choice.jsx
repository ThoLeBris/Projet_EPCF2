import React from 'react'

const choice = () => {

    return (
        <div>
            <p className="gras">Laisser vide les champs inutilisés.</p>
            <div className="form-item">
                <div>
                    <label htmlFor="orderProduct">Produit: </label>
                    <select name="orderProduct" id="orderProduct" className="liste-produit" 
                    required
                    >

                        <option hidden >Choisissez</option>
                        <option value="rouge10L">Cubi de Rouge 10L</option>
                        <option value="rouge5L">Cubi de Rouge 5L</option>
                        <option value="clairet5L">Cubi de Clairet 5L</option>
                        <option value="caisseMethode">Caisse de Méthode</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="orderProductQuantity">Quantité: </label>
                    <input type="number" name="orderProductQuantity" id="orderProductQuantity"
                        className="number"
                        required
                        min="1"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} />
                </div>
            </div>

            <div className="line-container"><div className="line"></div></div>

            <div className="form-item">
                <div>
                    <label htmlFor="orderProduct2">Produit: </label>
                    <select name="orderProduct2" id="orderProduct2" className="liste-produit">

                        <option hidden >Choisissez</option>
                        <option value="rouge10L">Cubi de Rouge 10L</option>
                        <option value="rouge5L">Cubi de Rouge 5L</option>
                        <option value="clairet5L">Cubi de Clairet 5L</option>
                        <option value="caisseMethode">Caisse de Méthode</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="orderProductQuantity2">Quantité: </label>
                    <input type="number" name="orderProductQuantity2" id="orderProductQuantity2"
                        className="number"
                        min="1"
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                </div>
            </div>

            <div className="line-container"><div className="line"></div></div>
            
            <div className="form-item">
                <div>
                    <label htmlFor="orderProduct3">Produit: </label>
                    <select name="orderProduct3" id="orderProduct3" className="liste-produit">

                        <option hidden >Choisissez</option>
                        <option value="rouge10L">Cubi de Rouge 10L</option>
                        <option value="rouge5L">Cubi de Rouge 5L</option>
                        <option value="clairet5L">Cubi de Clairet 5L</option>
                        <option value="caisseMethode">Caisse de Méthode</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="orderProductQuantity3">Quantité: </label>
                    <input type="number" name="orderProductQuantity3" id="orderProductQuantity3"
                        className="number"
                        min="1"
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                </div>
            </div>

            <div className="line-container"><div className="line"></div></div>

            <div className="form-item">
                <div>
                    <label htmlFor="orderProduct4">Produit: </label>
                    <select name="orderProduct4" id="orderProduct4" className="liste-produit">

                        <option hidden >Choisissez</option>
                        <option value="rouge10L">Cubi de Rouge 10L</option>
                        <option value="rouge5L">Cubi de Rouge 5L</option>
                        <option value="clairet5L">Cubi de Clairet 5L</option>
                        <option value="caisseMethode">Caisse de Méthode</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="orderProductQuantity4">Quantité: </label>
                    <input type="number" name="orderProductQuantity4" id="orderProductQuantity4"
                        className="number"
                        min="1"
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                </div>
            </div>

            <div className="line-container"><div className="line"></div></div>

        </div>
    )
}

export default choice
