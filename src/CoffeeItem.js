import React, { Component } from 'react'

export default class CoffeeItem extends Component {

    render() {
        return (
            <section>
                {console.log(this.props.coffee)}
                <h2>{this.props.coffee.name}</h2>
                <img className='coffee-image' src = {this.props.coffee.image} alt = {this.props.coffee.name} />
                {console.log(`./CoffeeImages/${this.props.coffee.image}`)}
                <div className = 'column'>
                    <ul>
                        <li>Description: {this.props.coffee.description}</li>
                        <li>Category: {this.props.coffee.category}</li>
                        <li>Price: ${this.props.coffee.price}</li>
                        <li>Supplier: {this.props.coffee.supplier}</li>
                        <li>On Sale: {this.props.coffee.on_sale ? 'Yes' : 'No'}</li>
                    </ul>
                </div>
            </section>
        )
    }
}