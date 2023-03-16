export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "Bla bla",
        data: [
            {
                id:1,
                pangkat_golongan:"Koruptor",
                sk:"D34TH",
                tanggal_sk: Date.now(),
                terhitung_mulai_tanggal: Date.now(),
            }
        ]
    })
}