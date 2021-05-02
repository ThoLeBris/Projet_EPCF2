import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CreateOrder from './createOrder'

const OrderItem = props =>(
    <tr>
        <td>{props.order.orderName}</td>
        <td>{props.order.orderEmail}</td>
        <td>{props.order.orderPhone}</td>
        <td>{props.order.orderAddress}</td>
        <td>
            <Link to={"/editOrder/"+props.order._id}>Modifier</Link>
        </td>
    </tr>
)
export default class OrderList extends Component {

    constructor(props) {
        super(props)

        this.state = {orders: []};
    }

    componentDidMount(){

        axios.get('http://localhost:8000/api/order/getOrder')
            .then(response =>
                    this.setState({orders: response.data}))
            .catch(error => console.error({ error }))
    }
    componentDidUpdate(){
        axios.get('http://localhost:8000/api/order/getOrder')
            .then(response =>
                this.setState({orders: response.data}))
            .catch(error => console.error({ error }))
    }

    orderList(){
        return this.state.orders.map(function(currentOrder, i){
            return <OrderItem order={currentOrder} key={i}/>;
        })
    }

    render() {
        return (
            <div>
                <div className="line-container"><div className="line"></div></div>
                
                <h2 className="margin-10">Les Commandes / Clients</h2>

                <div className="line-container"><div className="line"></div></div>
                
                <CreateOrder/>

                <div className="line-container"><div className="line"></div></div>

                <h3>Liste des Clients</h3>
                
                <div className="center-column">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Adresse</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.orderList() }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
