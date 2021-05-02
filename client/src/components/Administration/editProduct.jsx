import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class EditProduct extends Component {
    
    constructor(props){
        super(props)

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductStock = this.onChangeProductStock.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            productName: '',
            productStock: '',
            productDescription: '',
            productPrice: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/product/getProduct/'+this.props.match.params.id)
        .then(response =>
            this.setState({
                productName: response.data.productName,
                productStock: response.data.productStock,
                productDescription: response.data.productDescription,
                productPrice: response.data.productPrice,
            })
        )
        .catch(error => console.error({ error }))
    }

    onChangeProductName(e){
        this.setState({
            productName: e.target.value
        })
    }
    onChangeProductStock(e){
        this.setState({
            productStock: e.target.value
        })
    }
    onChangeProductDescription(e){
        this.setState({
            productDescription: e.target.value
        })
    }
    onChangeProductPrice(e){
        this.setState({
            productPrice: e.target.value
        })
    }

    //? Modifie le produit & renvoi à la page d'administration
    onSubmit(e){
        e.preventDefault();
        const modifiedProduct = {
            productName: this.state.productName,
            productStock: this.state.productStock,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice
        };

        axios.put('http://localhost:8000/api/product/editProduct/'+this.props.match.params.id, modifiedProduct)
        .then(res => console.log(res.data));

        this.props.history.push('/administration');
    }

    //? Supprime le produit & renvoi à la page d'administration
    onClick(e){
        e.preventDefault();

        axios.delete('http://localhost:8000/api/product/deleteProduct/'+this.props.match.params.id)
        .then(res => console.log(res.data));

        this.props.history.push('/administration');
    }
    
    render() {
        return (
            <div className="flex-center">
                <h3>Modifier un produit</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="center">
                        <label>Nom: </label>
                        <input  type="text"
                        className="input-width"
                                value={this.state.productName}    
                                onChange={this.onChangeProductName}
                        />
                    </div>
                    <div className="center">
                        <label>En Stock: </label>
                        <input  type="radio"
                                name="stock"
                                id="stockYes"
                                value="En Stock"
                                checked={this.state.productStock === "En Stock"}
                                onChange={this.onChangeProductStock}
                        />

                        <label>En rupture: </label>
                        <input  type="radio"
                                name="stock"
                                id="stockNo"
                                value="Rupture"
                                checked={this.state.productStock === "Rupture"}
                                onChange={this.onChangeProductStock}
                        />
                    </div>
                    <div className="center">
                        <label>Description: </label>
                        <textarea   name="productDescription"
                                    id="productDescription"
                                    className="productDescription input-width"
                                    value={this.state.productDescription}
                                    onChange={this.onChangeProductDescription}
                                    cols="50"
                                    rows="5"
                        >
                        </textarea>
                    </div>
                    <div className="center">
                        <label>Prix: </label>
                        <input  type="text"
                                className="input-width"
                                value={this.state.productPrice}
                                onChange={this.onChangeProductPrice}
                                required
                                />
                    </div>
                    <div className="flex-center">
                        <button type="submit" className="btn margin">Modifier le Produit</button>
                    </div>
                    
                    <div className="flex-center">
                        <button onClick={this.onClick} className="disconnect">Supprimer le Produit</button>
                    </div>

                    <div className="flex-center">
                        <Link to="/administration" className="btn margin">Retourner à l'administration</Link>
                    </div>

                </form>
            </div>
        )
    }
}
