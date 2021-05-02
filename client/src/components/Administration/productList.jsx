import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductItem = props =>(
    <tr>
        <td>{props.product.productName}</td>
        <td>{props.product.productStock}</td>
        <td>{props.product.productDescription}</td>
        <td>{props.product.productPrice}</td>
        <td>
            <Link to={"/edit/"+props.product._id}>Modifier</Link>
        </td>
    </tr>
)
export default class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {products: []};
    }

    componentDidMount(){

        axios.get('http://localhost:8000/api/product/getProduct')
            .then(response =>
                    this.setState({products: response.data}))
            .catch(error => console.error({ error }))
    }
    componentDidUpdate(){
        axios.get('http://localhost:8000/api/product/getProduct')
            .then(response =>
                this.setState({products: response.data}))
            .catch(error => console.error({ error }))
    }

    productList(){
        return this.state.products.map(function(currentProduct, i){
            return <ProductItem product={currentProduct} key={i}/>;
        })
    }

    render() {
        return (
            <div>
                <div className="line-container"><div className="line"></div></div>
                
                <h2>Les Produits</h2>
                
                <div className="line-container"><div className="line"></div></div>

                <h3>Liste des Produits</h3>
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.productList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
