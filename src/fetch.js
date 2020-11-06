import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://pacific-spire-69791.herokuapp.com/';

export async function fetchCoffees() {
    try {
        const response = await request.get(`${URL}coffees/`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchCoffee(someId) {
    try {
        const response = await request.get(`${URL}coffees/${someId}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchSuppliers() {
    try {
        const response = await request.get(`${URL}suppliers`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createCoffee(newCoffee) {
    try {
        await request
        .post(`${URL}Coffees`)
        .send(newCoffee);
        
        return;
    } catch(err) {
        throw err;
    }
}

export async function updateCoffee(someId, newCoffee) {
    try {
        await request
        .put(`${URL}Coffees/${someId}`)
        .send(newCoffee);
        
        return;
    } catch(err) {
        throw err;
    }
}


export async function deleteCoffee(someId) {
    try {
        await request.delete(`${URL}Coffees/${someId}`);
        
        return;
    } catch(err) {
        throw err;
    }
}