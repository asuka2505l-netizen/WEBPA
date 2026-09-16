// Data Alur Visual Perkara Pengadilan Agama (Peta Alur Interaktif)

export const VISUAL_FLOWS = {
  gugatanCerai: {
    title: "Alur Perkara Gugatan Cerai (Istri Menggugat)",
    subtitle: "Rangkaian proses hukum dari pengajuan hingga terbitnya Akta Cerai",
    totalStages: 8,
    stages: [
      {
        step: 1,
        title: "Persiapan Berkas & Surat Gugatan",
        shortDesc: "Menyiapkan KTP, Buku Nikah asli, KK, dan menyusun Surat Gugatan.",
        fullDesc: "Penggugat (istri) atau kuasanya mempersiapkan seluruh persyaratan dokumen asli dan fotokopi yang telah dileges (nazegelen) di Kantor Pos. Jika belum memiliki surat gugatan, Penggugat dapat memanfaatkan layanan pembuatan surat gugatan cuma-cuma di Loket Pos Bantuan Hukum (Posbakum) Pengadilan Agama.",
        requirements: [
          "KTP Penggugat asli & fotokopi 1 lembar",
          "Buku Nikah asli & fotokopi 1 lembar (dilegalisasi kantor pos)",
          "Kartu Keluarga (KK) asli & fotokopi",
          "Surat Gugatan (minimal rangkap 5)"
        ],
        notes: "Pastikan alamat Tergugat (suami) dicantumkan secara lengkap dan jelas mencakup RT, RW, Kelurahan/Desa, dan Kecamatan.",
        estimatedTime: "1 - 2 Hari"
      },
      {
        step: 2,
        title: "Pendaftaran Perkara",
        shortDesc: "Mendaftarkan berkas ke Meja 1 PTSP Pengadilan Agama atau melalui e-Court.",
        fullDesc: "Penggugat mendaftarkan surat gugatan ke loket Pelayanan Terpadu Satu Pintu (PTSP) Pengadilan Agama. Petugas Meja 1 akan memeriksa kelengkapan berkas dan membuat Surat Kuasa Untuk Membayar (SKUM). Pendaftaran juga dapat dilakukan secara daring (online) bagi pengguna terdaftar maupun pengguna lain melalui aplikasi e-Court Mahkamah Agung.",
        requirements: [
          "Berkas gugatan lengkap",
          "Nomor identitas kependudukan (NIK) dan alamat email aktif"
        ],
        notes: "Masyarakat umum kini dapat membuat akun e-Court perseorangan di loket E-Court Pengadilan Agama.",
        estimatedTime: "1 Hari Kerja"
      },
      {
        step: 3,
        title: "Pembayaran Panjar Biaya",
        shortDesc: "Membayar panjar biaya perkara melalui Bank / Virtual Account resmi.",
        fullDesc: "Penggugat melakukan pembayaran panjar biaya perkara ke rekening penampungan pengadilan melalui teller bank, ATM, atau transfer internet banking menggunakan nomor Virtual Account (VA) yang tertera pada SKUM. Setelah pembayaran berhasil, kasir pengadilan memberikan cap tanda lunas dan nomor perkara resmi.",
        requirements: [
          "Slip / Lembar SKUM dari Petugas Meja 1",
          "Bukti transfer atau bukti setor tunai bank"
        ],
        notes: "Bagi masyarakat tidak mampu yang memiliki SKTM / KIS / PKH, dapat mengajukan permohonan Berperkara Secara Cuma-cuma (Prodeo / Biaya Rp 0).",
        estimatedTime: "1 Hari Kerja"
      },
      {
        step: 4,
        title: "Penetapan Majelis Hakim & Hari Sidang",
        shortDesc: "Ketua Pengadilan menetapkan Majelis Hakim (PMH) dan hari sidang (PHS).",
        fullDesc: "Berkas perkara didistribusikan kepada Ketua Pengadilan Agama untuk menerbitkan Penetapan Majelis Hakim (PMH). Selanjutnya, Ketua Majelis Hakim yang ditunjuk menetapkan hari dan tanggal sidang pertama (Penetapan Hari Sidang / PHS).",
        requirements: [
          "Tidak ada berkas yang perlu dibawa pihak (proses administrasi internal pengadilan)"
        ],
        notes: "Penggugat dapat memantau jadwal sidang melalui Sistem Informasi Penelusuran Perkara (SIPP) pengadilan secara online.",
        estimatedTime: "2 - 3 Hari Kerja"
      },
      {
        step: 5,
        title: "Pemanggilan Para Pihak",
        shortDesc: "Jurusita menyampaikan Surat Panggilan Sidang (Relaas) ke alamat para pihak.",
        fullDesc: "Jurusita atau Jurusita Pengganti Pengadilan Agama mendatangi langsung alamat tempat tinggal Penggugat dan Tergugat untuk menyerahkan Surat Panggilan Sidang resmi (Relaas). Untuk perkara e-Court, panggilan kepada Penggugat disampaikan melalui surat elektronik (email).",
        requirements: [
          "Pihak berada di alamat yang tertera atau diwakili oleh kepala desa/lurah jika tidak di tempat"
        ],
        notes: "Jarak antara hari pemanggilan dan hari sidang resmi minimal 3 (tiga) hari kerja, kecuali perkara mendesak.",
        estimatedTime: "3 - 7 Hari Kalender"
      },
      {
        step: 6,
        title: "Proses Mediasi & Persidangan",
        shortDesc: "Upaya perdamaian melalui Hakim Mediator, dilanjutkan pemeriksaan pokok perkara.",
        fullDesc: "Jika kedua belah pihak (Penggugat dan Tergugat) hadir pada sidang pertama, Hakim wajib mengarahkan mereka untuk menempuh proses Mediasi yang dipimpin oleh Hakim Mediator selama maksimal 30 hari. Jika mediasi tidak berhasil, perkara dilanjutkan ke persidangan: Pembacaan Gugatan, Jawaban, Replik, Duplik, Pembuktian (surat dan saksi), dan Kesimpulan.",
        requirements: [
          "Wajib hadir langsung (prinsipal) tanpa hanya diwakili",
          "Membawa minimal 2 orang saksi keluarga saat tahapan sidang pembuktian",
          "Membawa seluruh bukti surat asli"
        ],
        notes: "Kehadiran prinsipal dalam proses mediasi hukumnya wajib menurut Peraturan Mahkamah Agung (PERMA) No. 1 Tahun 2016.",
        estimatedTime: "3 - 8 Minggu"
      },
      {
        step: 7,
        title: "Pembacaan Putusan",
        shortDesc: "Majelis Hakim membacakan Putusan akhir perkara di hadapan sidang terbuka.",
        fullDesc: "Setelah seluruh rangkaian persidangan selesai, Majelis Hakim bermusyawarah dan membacakan Putusan akhir perkara dalam sidang terbuka untuk umum. Apabila Tergugat tidak pernah hadir tanpa alasan sah sejak sidang pertama, Hakim dapat menjatuhkan Putusan Verstek (putusan tanpa hadirnya Tergugat).",
        requirements: [
          "Hadir mendengarkan amar putusan di ruang persidangan"
        ],
        notes: "Pihak yang tidak puas dengan putusan memiliki hak untuk mengajukan upaya hukum Banding ke Pengadilan Tinggi Agama dalam waktu 14 hari.",
        estimatedTime: "1 Hari Sidang"
      },
      {
        step: 8,
        title: "Pengambilan Akta Cerai & Salinan Putusan",
        shortDesc: "Penerbitan dan pengambilan Akta Cerai resmi setelah perkara berkekuatan hukum tetap (BHT).",
        fullDesc: "Setelah putusan berkekuatan hukum tetap (BHT/inkracht)—yaitu 14 hari kerja setelah putusan dibacakan atau diberitahukan dan tidak ada banding—Panitera Pengadilan Agama menerbitkan Akta Cerai. Masing-masing pihak (mantan istri dan mantan suami) dapat mengambil Akta Cerai asli di loket PTSP Pengadilan Agama.",
        requirements: [
          "KTP asli pemohon",
          "Membayar PNBP pengambilan Akta Cerai dan Salinan Putusan",
          "Pengambilan wajib oleh yang bersangkutan atau melampirkan Surat Kuasa Khusus bermeterai"
        ],
        notes: "Akta Cerai diterbitkan secara terpisah untuk mantan suami dan mantan istri dengan nomor register yang sama.",
        estimatedTime: "14 Hari setelah Putusan (setelah Inkracht)"
      }
    ]
  },

  ceraiTalak: {
    title: "Alur Perkara Cerai Talak (Suami Mengajukan)",
    subtitle: "Rangkaian proses hukum permohonan ikrar talak oleh suami",
    totalStages: 9,
    stages: [
      {
        step: 1,
        title: "Persiapan Berkas & Surat Permohonan",
        shortDesc: "Menyiapkan berkas pernikahan dan menyusun surat permohonan cerai talak.",
        fullDesc: "Pemohon (suami) mempersiapkan dokumen identitas, buku nikah asli, KK, dan menyusun Surat Permohonan Cerai Talak dengan bantuan Posbakum atau mandiri.",
        requirements: [
          "KTP Pemohon asli & salinan",
          "Buku Nikah asli & salinan bermeterai pos",
          "Surat Permohonan Cerai Talak (rangkap 5)"
        ],
        notes: "Permohonan diajukan ke Pengadilan Agama tempat tinggal Termohon (istri).",
        estimatedTime: "1 - 2 Hari"
      },
      {
        step: 2,
        title: "Pendaftaran Permohonan di PTSP / e-Court",
        shortDesc: "Mendaftarkan permohonan ke loket pendaftaran perkara.",
        fullDesc: "Petugas PTSP memverifikasi berkas dan menerbitkan SKUM untuk pembayaran panjar biaya perkara.",
        requirements: ["Berkas permohonan lengkap"],
        notes: "Bisa didaftarkan langsung ke kantor Pengadilan Agama atau lewat e-Court.",
        estimatedTime: "1 Hari"
      },
      {
        step: 3,
        title: "Pembayaran Panjar Biaya",
        shortDesc: "Menyetor panjar perkara via bank rekanan resmi.",
        fullDesc: "Pembayaran dilakukan lewat Virtual Account bank pengadilan, kemudian pihak menerima nomor registrasi perkara.",
        requirements: ["Slip SKUM"],
        notes: "Simpan bukti setor untuk verifikasi.",
        estimatedTime: "1 Hari"
      },
      {
        step: 4,
        title: "Penetapan Majelis & Hari Sidang",
        shortDesc: "Penunjukan Hakim dan penetapan jadwal sidang pertama.",
        fullDesc: "Ketua Pengadilan Agama menerbitkan PMH dan Ketua Majelis menetapkan PHS.",
        requirements: ["Proses administrasi internal"],
        notes: "Jadwal sidang dapat dicek lewat portal SIPP pengadilan.",
        estimatedTime: "2 - 3 Hari"
      },
      {
        step: 5,
        title: "Pemanggilan Resmi Para Pihak",
        shortDesc: "Penyampaian relaas panggilan sidang oleh jurusita.",
        fullDesc: "Jurusita mendatangi tempat tinggal Pemohon dan Termohon untuk menyampaikan panggilan sidang.",
        requirements: ["Para pihak menerima relaas panggilan"],
        notes: "Panggilan dilakukan sekurang-kurangnya 3 hari sebelum sidang.",
        estimatedTime: "3 - 7 Hari"
      },
      {
        step: 6,
        title: "Mediasi & Persidangan",
        shortDesc: "Upaya perdamaian wajib dipimpin mediator dilanjutkan pemeriksaan saksi/bukti.",
        fullDesc: "Jika kedua pihak hadir, wajib mediasi terlebih dahulu. Jika gagal, dilanjutkan pemeriksaan permohonan, pembuktian surat, dan saksi keluarga.",
        requirements: ["Hadir di pengadilan", "Minimal 2 saksi keluarga"],
        notes: "Mediasi bertujuan merukunkan kembali rumah tangga.",
        estimatedTime: "3 - 6 Minggu"
      },
      {
        step: 7,
        title: "Pembacaan Penetapan / Putusan Izin Ikrar",
        shortDesc: "Hakim menjatuhkan putusan memberi izin kepada Pemohon untuk mengikrarkan talak.",
        fullDesc: "Majelis Hakim membacakan putusan yang menyatakan memberi izin kepada suami (Pemohon) untuk menjatuhkan talak satu raj'i kepada istri di depan sidang Pengadilan Agama.",
        requirements: ["Hadir pada sidang putusan"],
        notes: "Putusan ini belum memutus ikatan perkawinan sampai ikrar talak diucapkan.",
        estimatedTime: "1 Hari Sidang"
      },
      {
        step: 8,
        title: "Sidang Pengucapan Ikrar Talak",
        shortDesc: "Suami mengucapkan ikrar talak di hadapan Majelis Hakim dalam sidang khusus.",
        fullDesc: "Setelah putusan izin ikrar talak berkekuatan hukum tetap (BHT), Pengadilan memanggil kembali Pemohon dan Termohon untuk menghadiri Sidang Ikrar Talak. Di depan Majelis Hakim, Pemohon mengucapkan ikrar talak kepada Termohon.",
        requirements: ["Hadir langsung oleh suami pemohon", "Membayar kewajiban mut'ah / iddah jika ditetapkan putusan"],
        notes: "Jika suami tidak mengikrarkan talak dalam waktu 6 bulan sejak penetapan hari sidang ikrar, kekuatan izin gugur.",
        estimatedTime: "2 - 4 Minggu setelah Putusan Inkracht"
      },
      {
        step: 9,
        title: "Penerbitan & Pengambilan Akta Cerai",
        shortDesc: "Pengambilan Akta Cerai resmi di loket PTSP Pengadilan Agama.",
        fullDesc: "Akta Cerai langsung diterbitkan pada hari pengucapan ikrar talak dilaksanakan dan ditandatangani oleh Panitera.",
        requirements: ["KTP asli Pemohon / Termohon"],
        notes: "Perkawinan resmi putus sejak saat ikrar talak diucapkan di hadapan sidang pengadilan.",
        estimatedTime: "1 Hari Kerja setelah Ikrar Talak"
      }
    ]
  },

  dispensasiNikah: {
    title: "Alur Permohonan Dispensasi Kawin / Nikah",
    subtitle: "Pemberian izin perkawinan usia di bawah 19 tahun sesuai PERMA No. 5 Tahun 2019",
    totalStages: 5,
    stages: [
      {
        step: 1,
        title: "Pengurusan Penolakan KUA & Pemeriksaan Kesehatan",
        shortDesc: "Pendaftaran ke KUA dan pemeriksaan medis calon pengantin.",
        fullDesc: "Orang tua dan calon mempelai mendatangi KUA setempat. KUA mengeluarkan Surat Pemberitahuan Adanya Halangan / Penolakan Perkawinan (Model N8). Calon mempelai juga wajib menjalani pemeriksaan kesehatan reproduksi dan psikologi di Puskesmas atau RSUD.",
        requirements: [
          "Surat Penolakan Pernikahan dari KUA (Model N8)",
          "Surat Rekomendasi Kesehatan / Psikologis dari Puskesmas / Dinas Kesehatan",
          "Akta Kelahiran dan KTP/KK calon pengantin dan orang tua"
        ],
        notes: "Surat Penolakan dari KUA merupakan syarat mutlak agar permohonan dapat diproses pengadilan.",
        estimatedTime: "3 - 7 Hari Kerja"
      },
      {
        step: 2,
        title: "Pendaftaran Permohonan di Pengadilan Agama",
        shortDesc: "Pengajuan surat permohonan dispensasi kawin di PTSP.",
        fullDesc: "Orang tua selaku Pemohon mendaftarkan permohonan ke loket PTSP Pengadilan Agama dan membayar panjar biaya permohonan (Pdt.P).",
        requirements: ["Surat Permohonan rangkap 5", "Kelengkapan berkas KUA & medis"],
        notes: "Bisa didampingi petugas Posbakum untuk penulisan surat permohonan.",
        estimatedTime: "1 Hari Kerja"
      },
      {
        step: 3,
        title: "Penetapan Hari Sidang & Pemanggilan",
        shortDesc: "Penetapan jadwal sidang dan jurusita memanggil pemohon.",
        fullDesc: "Ketua Pengadilan Agama menunjuk Hakim Tunggal atau Majelis Hakim untuk memeriksa permohonan dispensasi kawin dan menetapkan hari sidang.",
        requirements: ["Proses administrasi internal"],
        notes: "Sidang dispensasi kawin umumnya dijadwalkan dengan cepat.",
        estimatedTime: "3 - 5 Hari Kerja"
      },
      {
        step: 4,
        title: "Persidangan Pemeriksaan Calon & Orang Tua",
        shortDesc: "Hakim mendengar keterangan langsung calon mempelai dan kedua orang tua.",
        fullDesc: "Hakim memeriksa calon pengantin tanpa menggunakan toga (suasana ramah anak). Hakim meneliti kesiapan fisik, mental, ekonomi, serta memastikan tidak adanya unsur paksaan dalam pernikahan tersebut. Orang tua calon besan juga wajib didengar keterangannya.",
        requirements: [
          "Hadir kedua orang tua pemohon",
          "Hadir calon pengantin pria dan wanita",
          "Hadir orang tua calon besan",
          "Minimal 2 orang saksi"
        ],
        notes: "Hakim mengutamakan perlindungan kepentingan terbaik bagi anak (The Best Interests of the Child).",
        estimatedTime: "1 - 2 Kali Sidang"
      },
      {
        step: 5,
        title: "Penetapan Hakim & Pengambilan Salinan Penetapan",
        shortDesc: "Pembacaan Penetapan mengabulkan atau menolak dispensasi kawin.",
        fullDesc: "Hakim membacakan Penetapan. Jika dikabulkan, salinan resmi Penetapan Pengadilan Agama dapat langsung diambil di PTSP untuk diserahkan ke KUA sebagai dasar pelaksanaan akad nikah.",
        requirements: ["KTP Pemohon"],
        notes: "Salinan penetapan diserahkan kepada KUA untuk mendaftarkan pernikahan secara resmi.",
        estimatedTime: "1 - 3 Hari setelah Sidang"
      }
    ]
  },

  waris: {
    title: "Alur Permohonan Penetapan Ahli Waris (PAW)",
    subtitle: "Penetapan secara hukum Islam siapa saja ahli waris yang berhak",
    totalStages: 6,
    stages: [
      {
        step: 1,
        title: "Persiapan Berkas Silsilah & Surat Kematian",
        shortDesc: "Menyiapkan akta kematian pewaris dan bagan silsilah keluarga.",
        fullDesc: "Seluruh ahli waris menyiapkan bukti-bukti identitas, akta kematian pewaris, akta kelahiran seluruh anak, dan bagan silsilah ahli waris yang diketahui Kepala Desa/Lurah dan Camat.",
        requirements: [
          "Akta Kematian Pewaris dari Disdukcapil / Kelurahan",
          "Bagan Silsilah Ahli Waris dilegalisasi Lurah & Camat",
          "KTP dan Kartu Keluarga seluruh ahli waris",
          "Buku Nikah Pewaris"
        ],
        notes: "Pastikan tidak ada ahli waris yang terlewatkan dalam bagan silsilah.",
        estimatedTime: "3 - 10 Hari Kerja"
      },
      {
        step: 2,
        title: "Pendaftaran Permohonan di PTSP",
        shortDesc: "Mendaftarkan surat permohonan penetapan ahli waris.",
        fullDesc: "Semua ahli waris secara bersama-sama (atau memberi kuasa kepada salah satu ahli waris) mendaftarkan permohonan ke Pengadilan Agama.",
        requirements: ["Surat Permohonan PAW bermeterai", "Surat Kuasa jika diwakilkan"],
        notes: "Jenis permohonan ini bersifat voluntair (tanpa lawan sengketa).",
        estimatedTime: "1 Hari Kerja"
      },
      {
        step: 3,
        title: "Pembayaran Panjar Biaya Perkara",
        shortDesc: "Membayar panjar biaya perkara permohonan via bank.",
        fullDesc: "Membayar biaya panjar sesuai SKUM dan menerima nomor register perkara permohonan (Pdt.P).",
        requirements: ["Lembar SKUM"],
        notes: "Biaya perkara permohonan biasanya lebih ringan karena tidak ada pihak lawan.",
        estimatedTime: "1 Hari Kerja"
      },
      {
        step: 4,
        title: "Pemanggilan & Penetapan Hari Sidang",
        shortDesc: "Jurusita memanggil pemohon untuk hadir dalam persidangan.",
        fullDesc: "Ketua Pengadilan Agama menunjuk Majelis Hakim dan menetapkan jadwal sidang pemeriksaan saksi dan bukti.",
        requirements: ["Proses administrasi internal"],
        notes: "Pemberitahuan sidang dapat dikirim melalui SMS/WA bot pengadilan atau panggilan resmi.",
        estimatedTime: "3 - 7 Hari"
      },
      {
        step: 5,
        title: "Sidang Pemeriksaan Bukti & Saksi",
        shortDesc: "Pemeriksaan bukti silsilah keluarga dan keterangan saksi yang mengenal keluarga.",
        fullDesc: "Majelis Hakim memeriksa keaslian bukti surat dan mendengarkan keterangan minimal 2 orang saksi yang mengetahui hubungan keluarga serta memastikan tidak ada ahli waris lain yang disembunyikan.",
        requirements: [
          "Membawa seluruh dokumen surat asli",
          "Menghadirkan minimal 2 saksi yang mengenal almarhum dan keluarganya"
        ],
        notes: "Saksi sebaiknya bukan termasuk dalam daftar ahli waris.",
        estimatedTime: "1 - 2 Kali Sidang"
      },
      {
        step: 6,
        title: "Pembacaan Penetapan & Penyerahan Salinan",
        shortDesc: "Penerbitan Salinan Penetapan Ahli Waris yang sah secara hukum.",
        fullDesc: "Majelis Hakim membacakan Penetapan yang mencantumkan nama-nama ahli waris yang sah beserta besaran bagian masing-masing sesuai hukum faraid Islam. Salinan resmi penetapan dapat digunakan untuk keperluan perbankan, balik nama sertifikat tanah, atau pengurusan warisan.",
        requirements: ["KTP Pemohon", "Membayar PNBP Salinan Penetapan"],
        notes: "Salinan penetapan berkekuatan hukum mengikat bagi seluruh instansi perbankan dan BPN.",
        estimatedTime: "3 - 5 Hari setelah Sidang"
      }
    ]
  }
};
