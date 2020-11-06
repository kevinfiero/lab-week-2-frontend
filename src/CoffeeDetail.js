import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchCoffee, fetchSuppliers, updateCoffee, deleteCoffee } from './fetch';


export default class AddCoffee extends Component {

    state = {
        suppliers: [],
        coffees: {},
        id: (new URL(document.location)).searchParams.get('id')
    }
    componentDidMount = async () => {
        const suppliersResponse = await fetchSuppliers();
        this.setState({ suppliers: suppliersResponse });
        const coffeesResponse = await fetchCoffee(this.state.id);
        await this.setState({ coffees: coffeesResponse });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const newCoffee = {
            id: this.state.id,
            name_id: e.target[0].value,
            name: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
            category: e.target[4].value,
            price: e.target[5].value,
            on_sale: e.target[6].value,
            supplier_id: e.target[7].value
        };

        await updateCoffee(this.state.id, newCoffee);
        this.props.history.push('coffeelist');
        
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await deleteCoffee(this.state.id);
        this.props.history.push('coffeelist');
    }

    render() {
        return (
            <div>
                <h1>Modify Coffee</h1>
                <form id='add-form' className="column" onSubmit={this.handleSubmit}>
                    <label>Name ID: <input type="text" id="name_id" name="name_id" defaultValue={this.state.coffees.name_id} onChange={this.handleChange}/></label>
                    <label>Name: <input type="text" id="name" name="name" defaultValue={this.state.coffees.name} onChange={this.handleChange}/></label>
                    <label>Image: <input type="text" id="image" name="image" defaultValue={this.state.coffees.image} onChange={this.handleChange}/></label>
                    <label>Description: <input type="text" id="description" defaultValue={this.state.coffees.description} name="description" onChange={this.handleChange}/></label>
                    <label>Category: <input type="text" id="category" name="category" defaultValue={this.state.coffees.category} onChange={this.handleChange}/></label>
                    <label>Price: <input type="text" id="price" name="price" defaultValue={this.state.coffees.price} onChange={this.handleChange}/></label>
                    <label>On Sale: <select name="on_sale" id="on_sale" defaultValue={this.state.coffees.on_sale} onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select></label>
                    <label>Supplier: <select name="supplier" id="supplier" defaultValue={this.state.coffees.supplier} onChange={this.handleChange}>
                        {
                            this.state.suppliers.map(supplier => <option key={supplier.id} value={supplier.id}>
                                {supplier.supplier}
                            </option>)
                        }
                    </select></label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.handleDelete}>Delete Coffee</button>
                <Link className = "links" to="./coffeelist">
                    <button>Return To Coffee List</button>
                </Link> 
            </div>
        )
    }
}
