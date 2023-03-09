import { api } from "./axios";

export const fetchUsers = async () => await api.get(`/users`).then(res=>res.data)
export const fetchUser =  async (id) => await api.get(`/users/${id}`).then(res=>res.data)
export const deleteUser = async (id) => await api.delete(`/users/${id}`).then(res=>res.data)
export const createUser = async (data) => await api.post('/users', data)

export const fetchAlamat = async () => await api.get(`/data-pribadi/alamat`).then(res=>res.data) 
export const fetchProfil = async () => await api.get(`/data-pribadi/profil`).then(res=>res.data) 
export const fetchKependudukan = async () => await api.get(`/data-pribadi/kependudukan`).then(res=>res.data) 
export const fetchLainLain = async () => await api.get(`/data-pribadi/lain`).then(res=>res.data) 
export const fetchKeluarga = async () => await api.get(`/data-pribadi/keluarga`).then(res=>res.data) 
export const fetchKepegawaian = async () => await api.get(`/data-pribadi/kepegawaian`).then(res=>res.data) 
