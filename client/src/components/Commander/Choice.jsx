import React from 'react'

const choice = () => {

    constructor(props){
        super(props);
        this.state = {value: "choisissez"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){ 
        this.setState({value: e.target.value});
    }

    return (
        <div>
            <div className="form-item">
                <div>
                    <label htmlFor="orderProductName">Produit: </label>
                    <select name="orderProductName" id="orderProductName" className="liste-produit" 
                    required
                    value={this.state.value}
                    onChange={this.handleChange}
                    >

                        <option hidden value="choisissez" >Choisissez</option>
                        <option value="rouge10L">Cubi de Rouge 10L</option>
                        <option value="rouge5L">Cubi de Rouge 5L</option>
                        <option value="clairet5L">Cubi de Clairet 5L</option>
                        <option value="caisseMethode">Caisse de Méthode</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="orderProductQuantity">Quantité: </label>
                    <input type="number" name="orderProductQuantity" id="orderProductQuantity"
                        className="input-field number"
                        required
                        min="1"
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                </div>
            </div>

            <div className="line-container"><div className="line"></div></div>

        </div>
    )
}

export default choice
