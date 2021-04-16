import React from 'react'

const choice = () => {
    return (
        <div className="form-item choice">
            <label htmlFor="produit">Produit: </label>
            <select name="produit" id="produit" className="liste-produits" 
            required
            >

                <option hidden select >Choisissez</option>
                <option value="rouge10L">Cubi de Rouge 10L</option>
                <option value="rouge5L">Cubi de Rouge 5L</option>
                <option value="clairet5L">Cubi de Clairet 5L</option>
                <option value="caisseMethode">Caisse de Méthode</option>

            </select>

            <label htmlFor="produits-quantity">Quantité: </label>
            <input type="number" name="produits-quantity" id="produits-quantity"
                className="input-field number"
                required
                value="1"
                min="1"
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
        </div>
    )
}

export default choice
