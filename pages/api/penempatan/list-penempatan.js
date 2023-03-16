export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
            {
                id:1,
                status: "tikus kantor",
                ikatan_kerja:"koruptor",
                jenjang_pendidikan:"koruptor elit",
                unit:"kantor keju",
                perguruan_tinggi:"cream cheese institute",
                terhitung_mulai_tanggal: Date.now(),
                tanggal_keluar: Date.now(),
            }
        ]
    })
}