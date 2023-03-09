export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "Bla bla",
        data: {
            id:1,
            id_sdm:1,
            npwp: 1221123213213,
            nama_npwp:"joe",
            sinta_id:123123
        }
      })
}