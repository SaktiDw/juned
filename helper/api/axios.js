import axios from "axios";
import { getToken } from "../constant";


export const api = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/user",
    // baseURL: "https://api-gerbangna.itk.ac.id/api/",
    baseURL: "http://localhost:3000/api/",
    headers: {
        Authorization: 'Bearer 9|BV92PyNSWZl7ZT2Jr5Hqe5Xa0X0GZMeuJDzJAWtI' // bagusnya pake httpOnly cookie
    }
})

if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('key')
  }
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
export const apiSister = axios.create({
    baseURL: "/sister/",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },  
})
