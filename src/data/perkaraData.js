// Data Informasi Jenis Perkara Pengadilan Agama
export const PERKARA_LIST = [
  {
    id: "gugatanCerai",
    title: "Gugatan Cerai",
    subtitle: "Diajukan oleh Pihak Istri",
    code: "Pdt.G",
    category: "Perceraian",
    description: "Perkara perceraian yang diajukan oleh istri (atau kuasanya) terhadap suami ke Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Penggugat.",
    parties: {
      first: "Penggugat (Istri)",
      second: "Tergugat (Suami)"
    },
    legalBasis: "UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006, Pasal 73 & KHI Pasal 132",
    badgeColor: "primary",
    icon: "HeartCrack",
    estimatedStages: 8,
    typicalDuration: "1 - 3 Bulan (tergantung kehadiran pihak)",
    keyNotes: "Secara hukum, gugatan diajukan di Pengadilan Agama wilayah tempat tinggal istri saat ini, kecuali jika istri meninggalkan tempat kediaman bersama tanpa izin suami."
  },
  {
    id: "ceraiTalak",
    title: "Cerai Talak",
    subtitle: "Diajukan oleh Pihak Suami",
    code: "Pdt.G",
    category: "Perceraian",
    description: "Permohonan yang diajukan oleh suami (Pemohon) yang beragama Islam agar Pengadilan Agama mengizinkannya untuk mengikrarkan talak kepada istri (Termohon).",
    parties: {
      first: "Pemohon (Suami)",
      second: "Termohon (Istri)"
    },
    legalBasis: "UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006, Pasal 66 & KHI Pasal 129",
    badgeColor: "gold",
    icon: "ShieldAlert",
    estimatedStages: 9,
    typicalDuration: "1 - 4 Bulan (termasuk sidang ikrar talak)",
    keyNotes: "Permohonan diajukan ke Pengadilan Agama tempat kediaman Termohon (istri), kecuali apabila Termohon sengaja meninggalkan tempat kediaman bersama."
  },
  {
    id: "dispensasiNikah",
    title: "Dispensasi Kawin / Nikah",
    subtitle: "Permohonan Izin Nikah Usia di Bawah 19 Tahun",
    code: "Pdt.P",
    category: "Permohonan",
    description: "Permohonan pemberian izin perkawinan oleh Pengadilan Agama kepada calon mempelai pria/wanita yang belum mencapai usia 19 tahun.",
    parties: {
      first: "Pemohon (Orang Tua / Wali Calon Mempelai)",
      second: "Tidak Ada (Perkara Voluntair)"
    },
    legalBasis: "UU No. 16 Tahun 2019 tentang Perubahan UU No. 1 Tahun 1974 & PERMA No. 5 Tahun 2019",
    badgeColor: "primary",
    icon: "Users",
    estimatedStages: 5,
    typicalDuration: "2 - 4 Minggu",
    keyNotes: "Wajib diajukan oleh kedua orang tua calon pengantin (atau wali yang sah) dan melampirkan Surat Penolakan Pernikahan dari Kantor Urusan Agama (KUA)."
  },
  {
    id: "waris",
    title: "Penetapan & Sengketa Waris",
    subtitle: "Penetapan Ahli Waris atau Pembagian Warisan",
    code: "Pdt.P / Pdt.G",
    category: "Kewarisan",
    description: "Permohonan penetapan siapa saja yang menjadi ahli waris sah secara hukum Islam (Voluntair) atau gugatan sengketa harta waris antara para ahli waris (Contentiosa).",
    parties: {
      first: "Pemohon / Penggugat (Para Ahli Waris)",
      second: "Termohon / Tergugat (Bila ada sengketa)"
    },
    legalBasis: "Kompilasi Hukum Islam (KHI) Buku II tentang Hukum Kewarisan & Pasal 49 UU No. 3 Tahun 2006",
    badgeColor: "gold",
    icon: "ScrollText",
    estimatedStages: 6,
    typicalDuration: "3 Minggu - 4 Bulan",
    keyNotes: "Jika semua ahli waris sepakat dan tidak ada sengketa, dapat diajukan sebagai Permohonan Penetapan Ahli Waris (PAW) yang prosesnya lebih cepat."
  }
];
