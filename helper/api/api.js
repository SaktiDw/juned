import { api } from "./axios";

export const fetchUsers = async () => await api.get(`/users`).then(res=>res.data)
export const fetchUser =  async (id) => await api.get(`/users/${id}`).then(res=>res.data)
export const deleteUser = async (id) => await api.delete(`/users/${id}`).then(res=>res.data)
export const createUser = async (data) => await api.post('/users', data)

export const fetchAlamat = async (id) => await api.get(`/data-pribadi/alamat/${id}`).then(res=>res.data) 
export const fetchProfil = async (id) => await api.get(`/data-pribadi/profil/${id}`).then(res=>res.data) 
export const fetchKependudukan = async (id) => await api.get(`/data-pribadi/kependudukan/${id}`).then(res=>res.data) 
export const fetchLainLain = async (id) => await api.get(`/data-pribadi/lain/${id}`).then(res=>res.data) 
export const fetchKeluarga = async (id) => await api.get(`/data-pribadi/keluarga/${id}`).then(res=>res.data) 
export const fetchKepegawaian = async (id) => await api.get(`/data-pribadi/kepegawaian/${id}`).then(res=>res.data) 
export const fetchBidangIlmu = async (id) => await api.get(`/data-pribadi/bidang-ilmu/${id}`).then(res=>res.data) 

export const fetchListInpassing = async () => await api.get(`/inpassing/list-inpassing`).then(res=>res.data) 
export const fetchListJabatanFungsional = async () => await api.get(`/jabatan-fungsional/list-jabatan-fungsional`).then(res=>res.data) 
export const fetchListKepangkatan = async () => await api.get(`/kepangkatan/list-kepangkatan`).then(res=>res.data) 
export const fetchListPenempatan = async () => await api.get(`/penempatan/list-penempatan`).then(res=>res.data) 
