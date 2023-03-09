export default function handler(req, res) {
  res.status(200).json({
    status: true,
    message: "Bla bla",
    data: {
      id: 1,
      id_sdm: 1,
      email: "user@gmail.com",
      alamat: "alamat",
      rt: 1,
      rw: 1,
      dusun: "dusun",
      kelurahan: "kelurahan",
      id_kota_kabupaten: "kota kabupaten",
      kode_pos: 1234,
      telpon_rumah: "0812345667788",
      telpon_hp: "0812345667788",
    },
  });
}
