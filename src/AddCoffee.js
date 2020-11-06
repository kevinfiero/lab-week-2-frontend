import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchSuppliers, createCoffee } from './fetch';

export default class AddCoffee extends Component {

    state = {
        suppliers: [],
    }
    componentDidMount = async () => {
        const response = await fetchSuppliers();

        this.setState({ suppliers: response });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const newCoffee = {
            name_id: e.target[0].value,
            name: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
            category: e.target[4].value,
            price: e.target[5].value,
            on_sale: e.target[6].value,
            supplier_id: e.target[7].value
        };

        await createCoffee(newCoffee);
        this.props.history.push('coffeelist')
        
    }

    render() {
        return (
            <div>
                <h1>Add Coffee</h1>
                <form id='add-form' className="column" onSubmit={this.handleSubmit}>
                    <label>Name ID: <input type="text" id="name_id" name="name_id" defaultValue="bella-vista-12oz" onChange={this.handleChange}/></label>
                    <label>Name: <input type="text" id="name" name="name" defaultValue="Bella Vista" onChange={this.handleChange}/></label>
                    <label>Image: <input type="text" id="image" name="image" defaultValue="https://d1rusy4hxccwbq.cloudfront.net/spree/images/1987/large/media.nl?1600103615" onChange={this.handleChange}/></label>
                    <label>Description: <input type="text" id="description" defaultValue="12oz Bella Vista" name="description" onChange={this.handleChange}/></label>
                    <label>Category: <input type="text" id="category" name="category" defaultValue="Organic" onChange={this.handleChange}/></label>
                    <label>Price: <input type="text" id="price" name="price" defaultValue="20" onChange={this.handleChange}/></label>
                    <label>On Sale: <select name="on_sale" id="on_sale" onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select></label>
                    <label>Supplier: <select name="supplier" id="supplier" onChange={this.handleChange}>
                        {
                            this.state.suppliers.map(supplier => <option key={supplier.id} value={supplier.id}>
                                {supplier.supplier}
                            </option>)
                        }
                    </select></label>
                    <input type="submit" value="Submit" />
                </form>
                <Link className = "links" to="./coffeelist">
                    <button>Return To Coffee List</button>
                </Link> 
            </div>
        )
    }
}
