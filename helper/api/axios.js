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
    // baseURL: "http://sister.itk.ac.id/ws.php/1.0/",
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzJmYmMwMi1jZjY0LTRhZDktOTM2My0zM2FmZDRkNTUxOTgiLCJpc3MiOiJodHRwOlwvXC9zaXN0ZXIuaXRrLmFjLmlkXC93cy5waHBcLzEuMFwvYXV0aG9yaXplIiwiaWF0IjoxNjgxNjQxNjMwLCJleHAiOjE2ODE2NDUyMzAsIm5iZiI6MTY4MTY0MTYzMCwianRpIjoiMTA3OTc2ZjY4NDFhYTFiYyJ9.55ZRJgQq1RMmdpkuqWl3cM0L211QLEj-1b6qtPEcnv8`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },  
})