import { api } from "./axios";

export const fetchUsers = async () => await api.get(`/users`).then(res=>res.data)
export const fetchUser =  async (id) => await api.get(`/users/${id}`).then(res=>res.data)
export const deleteUser = async (id) => await api.delete(`/users/${id}`).then(res=>res.data)
export const createUser = async (data) => { await api.post('/users', data) }