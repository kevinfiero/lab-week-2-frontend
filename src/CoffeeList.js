import React, { Component } from 'react';
import CoffeeItem from './CoffeeItem.js';
import { Link } from 'react-router-dom';
import { fetchCoffees } from './fetch';



export default class CoffeeList extends Component {
  state = {
    coffees: []
  }

  fetchCoffees = async () => {
    const response = await fetchCoffees();
    await this.setState({ 
      coffees: response
    });
  }

  componentDidMount = async () => {
    await this.fetchCoffees();
  }

  render() {
    return (
      <>
        <Link className = "links" to="./addcoffee">
          <button>Add Coffee</button>
        </Link> 
        <div className="wrap row center"> 
          {this.state.coffees.map((coffee, i) => {
          return <CoffeeItem key = {i} coffee = {coffee}/>
          })}
        </div>
      </>
    )
  }
}