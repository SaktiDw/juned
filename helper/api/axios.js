import axios from "axios";

export const api = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/user",
    // baseURL: "https://api-gerbangna.itk.ac.id/api/",
    baseURL: "http://localhost:3000/api/",
    headers: {
        Authorization: 'Bearer 9|BV92PyNSWZl7ZT2Jr5Hqe5Xa0X0GZMeuJDzJAWtI' // cuman ini kurang optimal
    }
})