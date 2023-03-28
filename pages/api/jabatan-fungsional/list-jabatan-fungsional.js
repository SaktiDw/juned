export default function handler(req,res) {
    res.status(200).json(
        {
            status: true,
            message: "bla bla",
            data: [
                {
                    id:1,
                    jabatan_fungsional:"koruptor",
                    sk:"D34TH",
                    terhitung_mulai_tanggal: Date.now(),
                }
            ]
        }
    )
}