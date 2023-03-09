export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "Bla bla",
        data: {
            id:1,
            id_sdm:1,
            id_agama: 1,
            nik: 1221123213213,
            kewarganegaraan:"indonesia",
            kode_negara: "+62",
            agama:"islam",
        }
      })
}