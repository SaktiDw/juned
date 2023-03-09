export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "Bla bla",
        data: {
            id:1,
            id_sdm:1,
            status_kawin: "kawin",
            nama_pasangan:"joe",
            nip_pasangan:undefined,
            pekerjaan_pasangan:undefined,
        }
      })
}