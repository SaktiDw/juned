export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "Bla bla",
        data: [
            {
                id:1,
                pangkat_golongan:"Koruptor",
                sk:"D34TH",
                tanggal_sk: new Date(Date.now()).toDateString(),
                terhitung_mulai_tanggal: new Date(Date.now()).toDateString(),
            },
            {
                id:1,
                pangkat_golongan:"Pejabat",
                sk:"D34TH",
                tanggal_sk: new Date(Date.now()).toDateString(),
                terhitung_mulai_tanggal: new Date(Date.now()).toDateString(),
            },
            {
                id:1,
                pangkat_golongan:"Tikus kantor",
                sk:"D34TH",
                tanggal_sk: new Date(Date.now()).toDateString(),
                terhitung_mulai_tanggal: new Date(Date.now()).toDateString(),
            },
            {
                id:1,
                pangkat_golongan:"Polri",
                sk:"D34TH",
                tanggal_sk: new Date(Date.now()).toDateString(),
                terhitung_mulai_tanggal: new Date(Date.now()).toDateString(),
            },
            {
                id:1,
                pangkat_golongan:"TNI",
                sk:"D34TH",
                tanggal_sk: new Date(Date.now()).toDateString(),
                terhitung_mulai_tanggal: new Date(Date.now()).toDateString(),
            },
        ]
    })
}