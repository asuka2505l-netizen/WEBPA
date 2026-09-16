// Data Acuan Komponen Panjar Biaya Perkara Pengadilan Agama Bandung Kelas 1A
// Mengacu pada SK Ketua Pengadilan Agama Bandung & PP No. 5 Tahun 2019 tentang PNBP di Lingkungan Mahkamah Agung RI.

export const BIAYA_PERKARA = {
  gugatanCerai: {
    id: "gugatanCerai",
    name: "Gugatan Cerai (Istri Menggugat)",
    type: "Gugatan (Pdt.G)",
    pendaftaran: 30000,    // PNBP Pendaftaran Perkara Gugatan
    proses: 100000,        // Biaya Proses / Administrasi ATK Kepaniteraan
    pnbpPanggilan: 20000,  // PNBP Relaas Panggilan Sidang Pertama & Kedua (@ Rp 10.000)
    redaksi: 10000,        // Biaya Redaksi Putusan (PNBP)
    meterai: 10000,        // Meterai Putusan Pengadilan
    defaultPanggilanP1: 2, // Perkiraan frekuensi panggilan Penggugat (biasanya 2x panggilan)
    defaultPanggilanP2: 3, // Perkiraan frekuensi panggilan Tergugat (biasanya 3x panggilan)
    pemberitahuan: 1,      // Pemberitahuan isi putusan jika verstek
    description: "Perkiraan panjar awal perkara gugatan perceraian di Pengadilan Agama Bandung Kelas 1A dengan asumsi 2-3 kali pemanggilan sidang."
  },

  ceraiTalak: {
    id: "ceraiTalak",
    name: "Cerai Talak (Suami Mengajukan)",
    type: "Gugatan (Pdt.G)",
    pendaftaran: 30000,    // PNBP Pendaftaran
    proses: 100000,        // Biaya Proses ATK
    pnbpPanggilan: 30000,  // PNBP Panggilan Sidang Pokok & Sidang Ikrar Talak
    redaksi: 10000,        // Redaksi Putusan
    meterai: 10000,        // Meterai
    defaultPanggilanP1: 3, // Pemanggilan Pemohon (termasuk sidang ikrar talak)
    defaultPanggilanP2: 4, // Pemanggilan Termohon (sidang pokok + sidang ikrar)
    pemberitahuan: 1,
    description: "Biaya cerai talak mencakup tahapan Sidang Pengucapan Ikrar Talak di hadapan Majelis Hakim Pengadilan Agama Bandung setelah putusan inkracht."
  },

  dispensasiNikah: {
    id: "dispensasiNikah",
    name: "Dispensasi Kawin / Nikah",
    type: "Permohonan (Pdt.P)",
    pendaftaran: 30000,    // PNBP Pendaftaran Permohonan
    proses: 75000,         // Biaya Proses ATK Permohonan
    pnbpPanggilan: 10000,  // PNBP Pemanggilan Pemohon
    redaksi: 10000,        // Redaksi Penetapan
    meterai: 10000,        // Meterai Penetapan
    defaultPanggilanP1: 2, // Pemanggilan Pemohon (Orang tua calon pengantin)
    defaultPanggilanP2: 0, // Tidak ada pihak lawan (Voluntair)
    pemberitahuan: 0,
    description: "Permohonan izin menikah bagi calon pengantin berusia di bawah 19 tahun sesuai PERMA No. 5 Tahun 2019."
  },

  waris: {
    id: "waris",
    name: "Penetapan Ahli Waris (PAW)",
    type: "Permohonan (Pdt.P)",
    pendaftaran: 30000,    // PNBP Pendaftaran
    proses: 75000,         // Biaya Proses ATK
    pnbpPanggilan: 10000,  // PNBP Relaas
    redaksi: 10000,        // Redaksi Penetapan
    meterai: 10000,        // Meterai Penetapan
    defaultPanggilanP1: 2, // Pemanggilan Para Pemohon
    defaultPanggilanP2: 0, // Tidak ada pihak lawan
    pemberitahuan: 0,
    description: "Permohonan Penetapan Ahli Waris sukarela yang diajukan oleh seluruh ahli waris sah di wilayah hukum Kota Bandung."
  }
};

// Fungsi utilitas format mata uang Rupiah
export function formatRupiah(amount) {
  if (typeof amount !== 'number') return "Rp 0";
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}
