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
                <h3>Prdts Liste</h3>
                <table className="table product-table" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Price</th>
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
