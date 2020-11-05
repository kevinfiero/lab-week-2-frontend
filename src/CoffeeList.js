import React, { Component } from 'react';
import fetch from 'superagent';
import CoffeeItem from './CoffeeItem.js';
import { Link } from 'react-router-dom';


export default class CoffeeList extends Component {
  state = {
    coffees: []
  }

  fetchCoffees = async () => {
    const response = await fetch.get(`https://pacific-spire-69791.herokuapp.com/coffees`);
    await this.setState({ 
      coffees: response.body
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