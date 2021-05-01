import React, { Component } from 'react'
import axios from "axios"

export default class deleteProduct extends Component {

    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this);
        
        this.state = {
            productName: '',
            productStock: '',
            productDescription: '',
            productPrice: ''
        }
    }

    onClick(e){
        e.preventDefault();

        axios.delete('http://localhost:8000/api/product/deleteProduct/'+this.props.match.params.id)
        .then(res => console.log(res.data));

        this.props.history.push('/administration');
    }
    render() {
        return (
            <div>
                    <button onClick={this.onClick}>Supprimer ce Produit</button>
            </div>
        )
    }
}
