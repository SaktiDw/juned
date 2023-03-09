import axios from "axios";

export const api = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/user",
    baseURL: "http://localhost:3000/api/",
    headers: {
        Authorization: 'Bearer $token' // cuman ini kurang optimal
    }
})