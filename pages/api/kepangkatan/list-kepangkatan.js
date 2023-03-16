export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
            {
                id:1,
                golongan_pangkat:"koruptor",
                sk:"D34TH",
                terhitung_mulai_tanggal: Date.now(),
            }
        ]
    })
}