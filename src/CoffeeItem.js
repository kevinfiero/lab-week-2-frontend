import React, { Component } from 'react'

export default class CoffeeItem extends Component {

    render() {
        return (
            <section>
                {console.log(this.props.coffee)}
                <h2>{this.props.coffee.name}</h2>
                <img src = {this.props.coffee.image} alt = {this.props.coffee.name} />
                {console.log(`./CoffeeImages/${this.props.coffee.image}`)}
                <div className = 'column'>
                    <ul>
                        <li>Description: {this.props.coffee.description}</li>
                        <li>Category: {this.props.coffee.category}</li>
                        <li>Price: ${this.props.coffee.price}</li>
                    </ul>
                </div>
            </section>
        )
    }
}