import { apiSister } from "./axios";

export const fetchAlamat = async (id) => await apiSister.get(`/data_pribadi/alamat/${id}`).then(res=>res.data) 
export const fetchProfil = async (id) => await apiSister.get(`/data_pribadi/profil/${id}`).then(res=>res.data) 
export const fetchKependudukan = async (id) => await apiSister.get(`/data_pribadi/kependudukan/${id}`).then(res=>res.data) 
export const fetchLainLain = async (id) => await apiSister.get(`/data_pribadi/lain/${id}`).then(res=>res.data) 
export const fetchKeluarga = async (id) => await apiSister.get(`/data_pribadi/keluarga/${id}`).then(res=>res.data) 
export const fetchKepegawaian = async (id) => await apiSister.get(`/data_pribadi/kepegawaian/${id}`).then(res=>res.data) 
export const fetchBidangIlmu = async (id) => await apiSister.get(`/data_pribadi/bidang_ilmu/${id}`).then(res=>res.data) 

export const fetchListInpassing = async (id) => await apiSister.get(`/inpassing?id_sdm=${id}`).then(res=>res.data) 
export const fetchDetailInpassing = async (id) => await apiSister.get(`/inpassing/detail_inpassing/${id}`).then(res=>res.data) 
export const fetchListJabatanFungsional = async (id) => await apiSister.get(`/jabatan_fungsional?id_sdm=${id}`).then(res=>res.data) 
export const fetchDetailJabatanFungsional = async (id) => await apiSister.get(`/jabatan_fungsional/${id}`).then(res=>res.data) 
export const fetchListKepangkatan = async (id) => await apiSister.get(`/kepangkatan/list_kepangkatan/${id}`).then(res=>res.data) 
export const fetchDetailKepangkatan = async (id) => await apiSister.get(`/kepangkatan/detail_kepangkatan/${id}`).then(res=>res.data) 
export const fetchListPenempatan = async (id) => await apiSister.get(`/penempatan/list_penempatan/${id}`).then(res=>res.data) 
export const fetchDetailPenempatan = async (id) => await apiSister.get(`/penempatan/detail_penempatan/${id}`).then(res=>res.data) 

export const fetchListPenelitian = async (id) => await apiSister.get(`/penelitian/list_penelitian/${id}`).then(res=>res.data)
export const fetchDetailPenelitian = async (id) => await apiSister.get(`/penelitian/detail_penelitian/${id}`).then(res=>res.data)
export const fetchListPublikasi = async (id) => await apiSister.get(`/publikasi/list_publikasi/${id}`).then(res=>res.data)
export const fetchDetailPublikasi = async (id) => await apiSister.get(`/publikasi/detail_publikasi/${id}`).then(res=>res.data)

export const fetchListKateogriCapaianLuaran = async () => await apiSister.get(`/referensi/kategori_capaian_luaran`).then(res=>res.data).catch(err=>err)
export const fetchPerguruanTinggi = async () => await apiSister.get(`/referensi/perguruan_tinggi`).then(res=>res.data).catch(err=>err)
export const fetchKategoriKegiatan = async () => await apiSister.get(`/referensi/kategori_kegiatan`).then(res=>res.data).catch(err=>err)
export const fetchGolonganPangkat = async () => await apiSister.get(`/referensi/golongan_pangkat`).then(res=>res.data).catch(err=>err)
export const fetchJabatanFungsional = async () => await apiSister.get(`/referensi/jabatan_fungsional`).then(res=>res.data).catch(err=>err)
