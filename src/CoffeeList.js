import React, { Component } from 'react';
import fetch from 'superagent';
import CoffeeItem from './CoffeeItem.js';


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
      <div> 
        {this.state.coffees.map((coffee, i) => {
        return <CoffeeItem key = {i} coffee = {coffee}/>
        })}
        
      </div>
    )
  }
}