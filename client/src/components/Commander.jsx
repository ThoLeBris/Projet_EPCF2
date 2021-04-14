import React from 'react'

const Commander = () => {
    return (
        <div id="commander">
            <h2>Passer commande</h2>

            <div className="form-container">
                <p>*: champs obligatoires</p>
                <form method="post" id="form-commande">
                    <label htmlFor="fullName">Nom: </label>
                    <input type="text" name="fullName" id="fullName"
                        className="input-field"
                        placeholder="Nom Complet"
                        required/>

                    <label htmlFor="email">Adresse email: </label>
                    <input type="email" name="email" id="email"
                        className="input-field"
                        placeholder="exemple@exemple.com"
                        required/>

                    <label htmlFor="phone">Numéro de téléphone: </label>
                    <input type="text" name="phone" id="phone"
                        className="input-field"
                        placeholder="01 02 03 04 05"
                        required/>
                    
                    <label htmlFor="adresse">Adresse: </label>
                    <input type="text" name="adresse" id="adresse"
                        className="input-field"
                        placeholder="1, rue Jean Dupont"
                        required/>

                    <label htmlFor="produit">Produit: </label>
                    <select name="produit" id="produit" className="liste-produits" required>
                        <option hidden selected >Choisissez</option>
                        <option value="rouge10L">Cubi de Rouge 10L</option>
                        <option value="rouge5L">Cubi de Rouge 5L</option>
                        <option value="clairet5L">Cubi de Clairet 5L</option>
                        <option value="caisseMethode">Caisse de Méthode</option>
                    </select>

                    <label htmlFor="produits-quantity">Quantité: </label>
                    <input type="number" name="produits-quantity" id="produits-quantity"
                        className="input-field"
                        required/>

                </form>
            </div>
        </div>
    )
}

export default Commander
