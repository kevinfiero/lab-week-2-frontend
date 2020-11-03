import React, { Component } from 'react'
import logo from './logo.svg';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            
                <Link to="./coffeelist">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>Click Me!</div>
                </Link> 
            
        )
    }
}
