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

export const fetchListPenelitian = async (id) => await apiSister.get(`/penelitian?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPenelitian = async (id) => await apiSister.get(`/penelitian/${id}`).then(res=>res.data)
export const fetchBidangIlmuPenelitian = async (id) => await apiSister.get(`/penelitian/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPublikasi = async (id) => await apiSister.get(`/publikasi?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPublikasi = async (id) => await apiSister.get(`/publikasi/${id}`).then(res=>res.data)
export const fetchBidangIlmuPublikasi = async (id) => await apiSister.get(`/publikasi/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListKekayaanIntelektual = async (id) => await apiSister.get(`/kekayaan_intelektual?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailKekayaanIntelektual = async (id) => await apiSister.get(`/kekayaan_intelektual/${id}`).then(res=>res.data)
export const fetchBidangIlmuKekayaanIntelektual = async (id) => await apiSister.get(`/kekayaan_intelektual/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengabdian = async (id) => await apiSister.get(`/pengabdian?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPengabdian = async (id) => await apiSister.get(`/pengabdian/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengabdian = async (id) => await apiSister.get(`/pengabdian/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengelolaJurnal = async (id) => await apiSister.get(`/pengelola_jurnal?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPengelolaJurnal = async (id) => await apiSister.get(`/pengelola_jurnal/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengelolaJurnal = async (id) => await apiSister.get(`/pengelola_jurnal/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPembicara = async (id) => await apiSister.get(`/pembicara?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPembicara = async (id) => await apiSister.get(`/pembicara/${id}`).then(res=>res.data)
export const fetchBidangIlmuPembicara = async (id) => await apiSister.get(`/pembicara/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListJabatanStruktural = async (id) => await apiSister.get(`/jabatan_struktural?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailJabatanStruktural = async (id) => await apiSister.get(`/jabatan_struktural/${id}`).then(res=>res.data)
export const fetchBidangIlmuJabatanStruktural = async (id) => await apiSister.get(`/jabatan_struktural/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListAnggotaProfesi = async (id) => await apiSister.get(`/anggota_profesi?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailAnggotaProfesi = async (id) => await apiSister.get(`/anggota_profesi/${id}`).then(res=>res.data)
export const fetchBidangIlmuAnggotaProfesi = async (id) => await apiSister.get(`/anggota_profesi/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengajaran = async (id, id_semester) => await apiSister.get(`/jabatan_struktural?id_sdm=${id}&id_semester=${id_semester}`).then(res=>res.data)
export const fetchDetailPengajaran = async (id) => await apiSister.get(`/jabatan_struktural/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengajaran = async (id) => await apiSister.get(`/jabatan_struktural/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListKateogriCapaianLuaran = async () => await apiSister.get(`/referensi/kategori_capaian_luaran`).then(res=>res.data).catch(err=>err)
export const fetchPerguruanTinggi = async () => await apiSister.get(`/referensi/perguruan_tinggi`).then(res=>res.data).catch(err=>err)
export const fetchKategoriKegiatan = async (type, menu) => await apiSister.get(`/referensi/kategori_kegiatan?tipe=${type}&menu=${menu}`).then(res=>res.data).catch(err=>err)
export const fetchGolonganPangkat = async () => await apiSister.get(`/referensi/golongan_pangkat`).then(res=>res.data).catch(err=>err)
export const fetchJabatanFungsional = async () => await apiSister.get(`/referensi/jabatan_fungsional`).then(res=>res.data).catch(err=>err)
export const fetchDudi = async () => await apiSister.get(`/referensi/dudi`).then(res=>res.data).catch(err=>err)
export const fetchJenisDokumen = async () => await apiSister.get(`/referensi/jenis_dokumen`).then(res=>res.data).catch(err=>err)
export const fetchKelompokBidang = async (iptek) => await apiSister.get(`/referensi/kelompok_bidang?iptek=${iptek}`).then(res=>res.data).catch(err=>err)
export const fetchSemester = async (iptek) => await apiSister.get(`/referensi/semester`).then(res=>res.data).catch(err=>err)
