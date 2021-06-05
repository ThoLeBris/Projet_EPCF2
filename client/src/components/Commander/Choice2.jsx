import React, { Component } from 'react'
import axios from 'axios'

const SelectProduct = props =>(
        <option>{props.selectProduct.productName}</option>
)

export default class Choice2 extends Component {
    
    constructor(props){
        super(props)

        this.state = {selectProducts: []};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/product/getProduct')
            .then(response =>
                    this.setState({selectProducts: response.data}))
            .catch(error => console.error({ error }))
    }
    componentDidUpdate(){
        axios.get('http://localhost:8000/api/product/getProduct')
            .then(response =>
                    this.setState({selectProducts: response.data}))
            .catch(error => console.error({ error }))
    }

    selectList(){
        return this.state.selectProducts.map(function(currentSelect, i){
            return <SelectProduct selectProduct={currentSelect} key={i}/>;
        })
    }

    render(){
        return(
            <div>
                <p className="gras">Laisser vide les champs inutilisés.</p>
                <div className="form-item">
                    <div>
                        <label htmlFor="orderProduct">Produit: </label>
                        <select name="orderProduct" id="orderProduct" className="liste-produit" 
                        required
                        >

                            <option hidden value="">Choisissez</option>
                            { this.selectList() }

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
            </div>
           
        )
    }
}