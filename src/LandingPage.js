import React, { Component } from 'react'
import logo from './logo.svg';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="row">
                    <Link  className = "links" to="./coffeelist">
                        <button>Coffee List</button>
                    </Link> 
                    <Link  className = "links" to="./addcoffee">
                        <button>Add Coffee</button>
                    </Link> 
                </div>

            </>
        )
    }
}
