export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "Bla bla",
        data: {
            id:1,
            id_sdm:1,
            program_studi: "informatika",
            nip: 123123123,
            status_kepegawaian: "cpns",
            status_keaktifan: "aktif",
            sk_cpns:"3256/M/KP/2019",
            tanggal_sk_cpns:"01 Maret 2019",
            sk_tmmd:"9746/IT10R/KP11/2017",
            tanggal_sk_tmmd: "02 Oktober 2017",
            pangkat_golongan: "Penata Muda Tk. I - III/b",
            sumber_gaji:"APBN",
        }
      })
}