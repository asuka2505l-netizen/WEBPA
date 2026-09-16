// Engine Pohon Keputusan (Decision Tree) Panduan Perkara Interaktif
// Struktur: Setiap node memiliki id, stepNumber, totalSteps, category, question, description, options [text, subtext, next, icon, badge], atau result [object hasil akhir]

export const FLOW_TREE = {
  // Node Awal: Pemilihan Layanan Utama
  start: {
    id: "start",
    stepNumber: 1,
    totalSteps: 5,
    category: "Langkah Awal",
    question: "Apa keperluan atau perkara yang ingin Anda ketahui panduannya?",
    description: "Pilih salah satu kategori permasalahan di bawah ini. Sistem kami akan memandu langkah demi langkah sesuai kondisi Anda.",
    options: [
      {
        id: "opt_perceraian",
        text: "Perkara Perceraian",
        subtext: "Gugatan cerai oleh istri atau permohonan cerai talak oleh suami",
        icon: "HeartCrack",
        next: "perceraian_pengaju"
      },
      {
        id: "opt_dispensasi",
        text: "Dispensasi Kawin / Nikah",
        subtext: "Permohonan izin menikah bagi calon pengantin berusia di bawah 19 tahun",
        icon: "Users",
        next: "dispensasi_surat_kua"
      },
      {
        id: "opt_waris",
        text: "Penetapan & Sengketa Waris",
        subtext: "Permohonan penetapan ahli waris atau pembagian harta warisan keluarga",
        icon: "ScrollText",
        next: "waris_kebutuhan"
      }
    ]
  },

  // ==========================================
  // JALUR PERCERAIAN
  // ==========================================
  perceraian_pengaju: {
    id: "perceraian_pengaju",
    stepNumber: 2,
    totalSteps: 5,
    category: "Perceraian",
    question: "Siapa yang akan mengajukan perkara perceraian ini?",
    description: "Dalam hukum acara peradilan agama, istilah hukum dan prosedur pengajuan berbeda tergantung pihak yang mengambil inisiatif mengajukan perkara.",
    options: [
      {
        id: "pengaju_istri",
        text: "Pihak Istri (Gugatan Cerai)",
        subtext: "Istri berkedudukan sebagai Penggugat dan suami sebagai Tergugat",
        icon: "User",
        next: "perceraian_alamat"
      },
      {
        id: "pengaju_suami",
        text: "Pihak Suami (Cerai Talak)",
        subtext: "Suami berkedudukan sebagai Pemohon dan istri sebagai Termohon",
        icon: "UserCheck",
        next: "perceraian_alamat"
      }
    ]
  },

  perceraian_alamat: {
    id: "perceraian_alamat",
    stepNumber: 3,
    totalSteps: 5,
    category: "Perceraian",
    question: "Apakah alamat tempat tinggal pihak pasangan diketahui secara jelas saat ini?",
    description: "Keberadaan dan kejelasan alamat tempat tinggal pasangan menentukan metode pemanggilan sidang oleh jurusita pengadilan.",
    options: [
      {
        id: "alamat_jelas",
        text: "Ya, Alamat Diketahui Jelas",
        subtext: "Pasangan tinggal di alamat yang jelas dan dapat ditemui untuk pemanggilan langsung",
        icon: "MapPin",
        next: "perceraian_buku_nikah"
      },
      {
        id: "alamat_ghoib",
        text: "Tidak Diketahui (Perkara Ghoib)",
        subtext: "Pasangan pergi dan tidak diketahui keberadaannya minimal selama 6 bulan berturut-turut",
        icon: "HelpCircle",
        next: "perceraian_buku_nikah"
      }
    ]
  },

  perceraian_buku_nikah: {
    id: "perceraian_buku_nikah",
    stepNumber: 4,
    totalSteps: 5,
    category: "Perceraian",
    question: "Apakah Anda memegang Buku Nikah asli atau Duplikat Kutipan Akta Nikah?",
    description: "Buku Nikah asli yang diterbitkan oleh Kantor Urusan Agama (KUA) adalah bukti otentik utama pernikahan yang sah di mata negara dan hukum Islam.",
    options: [
      {
        id: "buku_ada",
        text: "Ya, Ada Buku Nikah Asli",
        subtext: "Buku nikah dalam kondisi baik dan siap ditunjukkan saat pendaftaran & persidangan",
        icon: "CheckCircle2",
        next: "perceraian_saksi"
      },
      {
        id: "buku_hilang",
        text: "Buku Nikah Hilang / Rusak / Ditahan",
        subtext: "Perlu mengurus Duplikat Kutipan Akta Nikah terlebih dahulu di KUA tempat pernikahan berlangsung",
        icon: "AlertCircle",
        next: "perceraian_saksi"
      }
    ]
  },

  perceraian_saksi: {
    id: "perceraian_saksi",
    stepNumber: 5,
    totalSteps: 5,
    category: "Perceraian",
    question: "Apakah Anda telah menyiapkan minimal 2 orang saksi dari pihak keluarga/orang dekat?",
    description: "Dalam perkara perceraian, saksi wajib berasal dari keluarga atau orang terdekat yang mengetahui secara langsung fakta perselisihan dalam rumah tangga.",
    options: [
      {
        id: "saksi_siap",
        text: "Sudah Siap (Minimal 2 Saksi)",
        subtext: "Saksi dewasa, berakal sehat, dan bersedia hadir di persidangan pengadilan",
        icon: "CheckCircle2",
        next: "result_perceraian"
      },
      {
        id: "saksi_belum",
        text: "Belum Menyiapkan Saksi",
        subtext: "Masih mencari atau memastikan kesediaan pihak keluarga yang bersedia menjadi saksi",
        icon: "Clock",
        next: "result_perceraian"
      }
    ]
  },

  // ==========================================
  // JALUR DISPENSASI NIKAH
  // ==========================================
  dispensasi_surat_kua: {
    id: "dispensasi_surat_kua",
    stepNumber: 2,
    totalSteps: 4,
    category: "Dispensasi Nikah",
    question: "Apakah Anda sudah mendaftar ke KUA dan memperoleh Surat Penolakan Pernikahan (Model N8)?",
    description: "Berdasarkan PERMA No. 5 Tahun 2019, Surat Penolakan dari KUA merupakan syarat mutlak sebelum mengajukan permohonan dispensasi ke Pengadilan Agama.",
    options: [
      {
        id: "kua_sudah",
        text: "Sudah Memperoleh Surat Penolakan KUA (Model N8)",
        subtext: "Surat resmi penolakan dari Kepala KUA setempat sudah berada di tangan Anda",
        icon: "CheckCircle2",
        next: "dispensasi_orang_tua"
      },
      {
        id: "kua_belum",
        text: "Belum Mendaftar / Belum Ada Surat Penolakan",
        subtext: "Perlu mendatangi KUA terlebih dahulu untuk proses pendaftaran dan verifikasi awal",
        icon: "AlertCircle",
        next: "dispensasi_orang_tua"
      }
    ]
  },

  dispensasi_orang_tua: {
    id: "dispensasi_orang_tua",
    stepNumber: 3,
    totalSteps: 4,
    category: "Dispensasi Nikah",
    question: "Apakah kedua orang tua kandung calon mempelai bersedia hadir di pengadilan?",
    description: "Permohonan dispensasi kawin wajib diajukan oleh kedua orang tua calon pengantin, kecuali orang tua telah meninggal dunia, bercerai, atau tidak diketahui keberadaannya.",
    options: [
      {
        id: "ortu_lengkap",
        text: "Kedua Orang Tua Hadir Lengkap",
        subtext: "Ayah dan Ibu kandung siap mengajukan dan hadir langsung di ruang persidangan",
        icon: "Users",
        next: "dispensasi_dokumen_calon"
      },
      {
        id: "ortu_tunggal",
        text: "Hanya Satu Orang Tua / Wali",
        subtext: "Salah satu orang tua meninggal, bercerai, atau berstatus wali (perlu melampirkan akta kematian / bukti hak asuh)",
        icon: "UserMinus",
        next: "dispensasi_dokumen_calon"
      }
    ]
  },

  dispensasi_dokumen_calon: {
    id: "dispensasi_dokumen_calon",
    stepNumber: 4,
    totalSteps: 4,
    category: "Dispensasi Nikah",
    question: "Apakah dokumen identitas dan surat keterangan kesehatan calon pengantin sudah disiapkan?",
    description: "Meliputi Akta Kelahiran calon, KTP orang tua, Ijazah terakhir, serta Surat Keterangan Pemeriksaan Kesehatan / Rekomendasi Puskesmas / BKKBN.",
    options: [
      {
        id: "dokumen_disp_siap",
        text: "Dokumen & Surat Kesehatan Sudah Siap",
        subtext: "Semua dokumen identitas serta hasil pemeriksaan medis telah lengkap",
        icon: "CheckCircle2",
        next: "result_dispensasi"
      },
      {
        id: "dokumen_disp_belum",
        text: "Masih Dalam Proses Pengurusan",
        subtext: "Perlu melengkapi pemeriksaan kesehatan atau berkas kependudukan terlebih dahulu",
        icon: "Clock",
        next: "result_dispensasi"
      }
    ]
  },

  // ==========================================
  // JALUR WARIS
  // ==========================================
  waris_kebutuhan: {
    id: "waris_kebutuhan",
    stepNumber: 2,
    totalSteps: 4,
    category: "Waris",
    question: "Apakah seluruh ahli waris telah sepakat atau terdapat sengketa/perselisihan bagian?",
    description: "Kondisi kesepakatan keluarga menentukan apakah perkara masuk ke jalur Permohonan (Voluntair) atau Gugatan Sengketa (Contentiosa).",
    options: [
      {
        id: "waris_sepakat",
        text: "Semua Ahli Waris Sepakat (Penetapan Ahli Waris)",
        subtext: "Tidak ada sengketa, hanya membutuhkan penetapan resmi siapa saja ahli waris yang sah",
        icon: "Users",
        next: "waris_surat_kematian"
      },
      {
        id: "waris_sengketa",
        text: "Terdapat Perselisihan / Sengketa Harta Waris",
        subtext: "Ada pihak ahli waris yang tidak sepakat mengenai kepemilikan atau pembagian harta",
        icon: "ShieldAlert",
        next: "waris_surat_kematian"
      }
    ]
  },

  waris_surat_kematian: {
    id: "waris_surat_kematian",
    stepNumber: 3,
    totalSteps: 4,
    category: "Waris",
    question: "Apakah Surat / Akta Kematian Pewaris sudah diterbitkan oleh instansi berwenang?",
    description: "Akta Kematian dari Dinas Kependudukan dan Catatan Sipil (Disdukcapil) atau Surat Keterangan Kematian dari Kelurahan/Desa adalah syarat utama.",
    options: [
      {
        id: "akta_kematian_ada",
        text: "Ya, Akta Kematian Sudah Ada",
        subtext: "Diterbitkan resmi oleh Disdukcapil atau Kelurahan tempat meninggalnya pewaris",
        icon: "CheckCircle2",
        next: "waris_silsilah"
      },
      {
        id: "akta_kematian_belum",
        text: "Belum Mengurus Akta Kematian",
        subtext: "Wajib mengurus surat keterangan kematian di Kelurahan/Disdukcapil terlebih dahulu",
        icon: "AlertCircle",
        next: "waris_silsilah"
      }
    ]
  },

  waris_silsilah: {
    id: "waris_silsilah",
    stepNumber: 4,
    totalSteps: 4,
    category: "Waris",
    question: "Apakah Bagan Silsilah / Surat Keterangan Ahli Waris yang diketahui Lurah/Camat sudah tersedia?",
    description: "Bagan silsilah keluarga yang dilegalisasi oleh pihak Kelurahan dan Kecamatan menjadi dokumen penting untuk membuktikan hubungan darah.",
    options: [
      {
        id: "silsilah_ada",
        text: "Bagan Silsilah Sudah Ada & Divalidasi Lurah/Camat",
        subtext: "Struktur garis keturunan keluarga pewaris sudah disahkan secara administratif",
        icon: "CheckCircle2",
        next: "result_waris"
      },
      {
        id: "silsilah_belum",
        text: "Belum Dibuat / Belum Disahkan Kelurahan",
        subtext: "Perlu membuat bagan silsilah dan meminta tanda tangan serta cap stempel RT/RW dan Kelurahan",
        icon: "Clock",
        next: "result_waris"
      }
    ]
  },

  // ==========================================
  // HASIL AKHIR (RESULT NODES)
  // ==========================================
  result_perceraian: {
    id: "result_perceraian",
    isResult: true,
    category: "Perceraian",
    targetPerkaraId: "gugatanCerai", // atau diisi dinamis berdasarkan pengaju
    dynamicPerkaraId: (answers) => answers.perceraian_pengaju === "pengaju_suami" ? "ceraiTalak" : "gugatanCerai",
    title: "Rekomendasi Jalur Perkara Perceraian",
    description: "Berdasarkan jawaban yang Anda masukkan, berikut adalah klasifikasi perkara, estimasi kebutuhan dokumen, dan langkah resmi yang disarankan dalam panduan.",
    nextAction: "/hasil-panduan"
  },

  result_dispensasi: {
    id: "result_dispensasi",
    isResult: true,
    category: "Dispensasi Nikah",
    targetPerkaraId: "dispensasiNikah",
    title: "Rekomendasi Permohonan Dispensasi Kawin",
    description: "Berdasarkan ketentuan PERMA No. 5 Tahun 2019, permohonan Anda dapat diajukan ke Pengadilan Agama setelah kelengkapan berkas penolakan KUA dan pemeriksaan kesehatan dipenuhi.",
    nextAction: "/hasil-panduan"
  },

  result_waris: {
    id: "result_waris",
    isResult: true,
    category: "Waris",
    targetPerkaraId: "waris",
    title: "Rekomendasi Panduan Hukum Kewarisan",
    description: "Berdasarkan keterangan Anda, sistem telah memetakan prosedur permohonan penetapan ahli waris atau penyelesaian sengketa hak waris keluarga.",
    nextAction: "/hasil-panduan"
  }
};
