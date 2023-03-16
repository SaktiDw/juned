export default function handler(req,res) {
     res.status(200).json({
        status: true,
        message: "Bla bla",
        data: {
            id:1,
            id_sdm:1,
            nama:"joe",
            nidn: 1221123213213,
            jenis_kelamin:"laki-laki",
            tempat_lahir: "Isekai",
            tanggal_lahir:"01-01-2001",
            nama_ibu_kandung:"joe mama"
        }
      })
}