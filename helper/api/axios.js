import axios from "axios";

export const api = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/user",
    // baseURL: "https://api-gerbangna.itk.ac.id/api/",
    baseURL: "http://localhost:3000/api/",
    headers: {
        Authorization: 'Bearer 9|BV92PyNSWZl7ZT2Jr5Hqe5Xa0X0GZMeuJDzJAWtI' // bagusnya pake httpOnly cookie
    }
})
export const apiSister = axios.create({
    baseURL: "/sister/",
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzJmYmMwMi1jZjY0LTRhZDktOTM2My0zM2FmZDRkNTUxOTgiLCJpc3MiOiJodHRwOlwvXC9zaXN0ZXIuaXRrLmFjLmlkXC93cy5waHBcLzEuMFwvYXV0aG9yaXplIiwiaWF0IjoxNjgxNjc0NzY2LCJleHAiOjE2ODE2NzgzNjYsIm5iZiI6MTY4MTY3NDc2NiwianRpIjoiMTc3ZDk4YzVkMDFhY2JiZCJ9.O8Qel2EFWW415Hzzn1SpVc-51Ge1LCHb4Ihqy4xYyMw`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },  
})