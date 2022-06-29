import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    }
});

const get = async (url) => {
    const response = await api.get(`/${url}`);
    return response.data;
}

const post = async (url, data) => {
    const response = await api.post(`/${url}`, data);
    return response.data;
}

const put = async (url, id, data) => {
    const response = await api.put(`/${url}/${id}`, data);
    return response.data;
}

const del = async (url, id) => {
    const response = await api.delete(`/${url}/${id}`);
    return response.data;
}

const patch = async (url, id, data) => {
    const response = await api.patch(`/${url}/${id}`, data);
    return response.data;
}

// GET Example
get('people').then(data => console.log(data))

// POST Example
// post('people', {name: "John", age: 20, city: "New York"}).then(data => console.log(data))

// PUT Example
// put('people', 1, {name: "John", age: 20, city: "Finland"}).then(data => console.log(data))

// PATCH Example
// patch('people', 1, {name: "John", age: 20}).then(data => console.log(data))

// DELETE Example
// del('people', 1).then(data => console.log(data))

