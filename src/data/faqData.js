// Data Pertanyaan yang Sering Diajukan (FAQ) Pengadilan Agama

export const FAQ_CATEGORIES = [
  { id: "semua", name: "Semua Kategori" },
  { id: "perceraian", name: "Tentang Perceraian" },
  { id: "dokumen", name: "Persyaratan & Dokumen" },
  { id: "biaya", name: "Panjar Biaya & Prodeo" },
  { id: "persidangan", name: "Jadwal & Persidangan" },
  { id: "layanan", name: "E-Court & Posbakum" }
];

export const FAQ_LIST = [
  {
    id: "faq_1",
    category: "perceraian",
    question: "Apa perbedaan mendasar antara Gugatan Cerai dan Cerai Talak?",
    answer: "Perbedaannya terletak pada siapa yang berinisiatif mengajukan perkara. Gugatan Cerai diajukan oleh pihak istri (sebagai Penggugat) terhadap suami (Tergugat). Sedangkan Cerai Talak diajukan oleh pihak suami (sebagai Pemohon) yang meminta izin pengadilan untuk mengikrarkan talak kepada istri (Termohon). Pada cerai talak, terdapat satu tahapan sidang tambahan yaitu Sidang Pengucapan Ikrar Talak di hadapan Majelis Hakim setelah putusan izin talak berkekuatan hukum tetap."
  },
  {
    id: "faq_2",
    category: "perceraian",
    question: "Ke Pengadilan Agama mana gugatan perceraian harus didaftarkan?",
    answer: "Sebagai aturan umum, Gugatan Cerai oleh istri diajukan ke Pengadilan Agama yang mewilayahi tempat tinggal istri (Penggugat), kecuali jika istri meninggalkan tempat tinggal bersama tanpa izin suami yang sah. Sedangkan Cerai Talak oleh suami diajukan ke Pengadilan Agama tempat kediaman istri (Termohon), kecuali apabila Termohon sengaja meninggalkan tempat tinggal bersama."
  },
  {
    id: "faq_3",
    category: "perceraian",
    question: "Bagaimana jika pasangan telah pergi dan tidak diketahui alamatnya (Ghoib)?",
    answer: "Anda tetap dapat mengajukan perkara yang disebut Perkara Cerai Ghoib. Syarat tambahannya adalah melampirkan Surat Keterangan Ghoib dari Kantor Kelurahan/Desa tempat kediaman terakhir yang menerangkan bahwa pasangan telah pergi dan tidak diketahui lagi keberadaannya di wilayah Republik Indonesia sekurang-kurangnya selama 6 bulan berturut-turut. Pemanggilan sidang akan dilakukan melalui pengumuman media massa atau siaran radio."
  },
  {
    id: "faq_4",
    category: "dokumen",
    question: "Apa yang dimaksud dengan fotokopi dokumen harus 'dilegalisasi kantor pos (Nazegelen)'?",
    answer: "Berdasarkan Undang-Undang Bea Meterai dan hukum acara perdata, setiap dokumen fotokopi yang akan dijadikan alat bukti tertulis di persidangan (seperti fotokopi KTP, Buku Nikah, KK, Akta Kelahiran) harus ditempeli meterai tempel Rp 10.000 dan dibubuhi cap/stempel resmi pos oleh petugas Kantor Pos terdekat (istilah hukumnya adalah Nazegelen)."
  },
  {
    id: "faq_5",
    category: "dokumen",
    question: "Bagaimana jika Buku Nikah asli hilang atau ditahan oleh pihak pasangan?",
    answer: "Jika buku nikah hilang atau rusak, Anda dapat mengurus Surat Keterangan Kehilangan di kantor Kepolisian terdekat, lalu mendatangi KUA tempat pernikahan untuk menerbitkan Duplikat Kutipan Akta Nikah resmi. Jika buku nikah sengaja ditahan atau disembunyikan oleh pasangan, Anda dapat melampirkan fotokopi yang ada atau meminta Surat Keterangan Pernikahan dari KUA yang bersangkutan."
  },
  {
    id: "faq_6",
    category: "biaya",
    question: "Mengapa biaya perkara di pengadilan disebut 'Panjar Biaya'?",
    answer: "Biaya yang dibayarkan di awal pendaftaran berstatus sebagai uang muka (panjar) untuk membiayai seluruh kebutuhan proses perkara, seperti biaya ATK pendaftaran dan ongkos perjalanan jurusita memanggil para pihak. Biaya riil yang terpakai akan dihitung rinci di akhir perkara dalam amar putusan. Apabila terdapat kelebihan atau sisa panjar biaya yang belum terpakai, uang tersebut WAJIB dikembalikan kepada pihak yang mendaftar perkara (Kompensasi Sisa Panjar)."
  },
  {
    id: "faq_7",
    category: "biaya",
    question: "Apakah masyarakat yang kurang mampu dapat berperkara secara gratis (Prodeo)?",
    answer: "Ya, Pengadilan Agama menyediakan layanan Berperkara Secara Cuma-Cuma (Biaya Rp 0 / Prodeo) bagi masyarakat yang tidak mampu secara ekonomi. Syaratnya adalah melampirkan Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan/Desa, atau bukti kepesertaan jaminan sosial pemerintah seperti Kartu Indonesia Sehat (KIS), Kartu Keluarga Sejahtera (KKS), atau Program Keluarga Harapan (PKH)."
  },
  {
    id: "faq_8",
    category: "persidangan",
    question: "Apakah para pihak wajib hadir langsung dalam persidangan?",
    answer: "Khususnya pada sidang pertama dan proses Mediasi, kedua belah pihak (prinsipal) WAJIB hadir secara langsung tanpa hanya mewakilkan kepada kuasa hukum. Tujuannya adalah agar Hakim Mediator dapat mengupayakan perdamaian dan kerukunan kembali rumah tangga secara maksimal. Jika mediasi gagal, pihak dapat didampingi atau diwakili oleh kuasa hukum (advokat)."
  },
  {
    id: "faq_9",
    category: "persidangan",
    question: "Berapa lama rata-rata waktu yang dibutuhkan sampai putusan dijatuhkan?",
    answer: "Jangka waktu penyelesaian perkara perdata di Pengadilan Agama diatur dalam Surat Edaran Mahkamah Agung (SEMA) No. 2 Tahun 2014, yaitu maksimal 5 (lima) bulan. Namun dalam praktiknya, jika kedua belah pihak hadir dan kooperatif, perkara perceraian biasanya dapat diputus dalam waktu 1 hingga 2 bulan (sekitar 3 hingga 5 kali persidangan)."
  },
  {
    id: "faq_10",
    category: "layanan",
    question: "Apa itu Pos Bantuan Hukum (Posbakum) di Pengadilan Agama?",
    answer: "Posbakum adalah ruang layanan bantuan hukum cuma-cuma (gratis) yang berlokasi di dalam gedung Pengadilan Agama. Petugas advokat piket di Posbakum siap membantu masyarakat dalam konsultasi hukum, pembuatan berkas surat gugatan atau surat permohonan, serta advis hukum bagi yang belum memahami tata cara berperkara."
  },
  {
    id: "faq_11",
    category: "layanan",
    question: "Apakah masyarakat umum bisa mendaftarkan perkara lewat online (e-Court)?",
    answer: "Ya! Melalui Peraturan Mahkamah Agung (PERMA) No. 1 Tahun 2019, masyarakat umum perseorangan (Pengguna Lain) dapat mendaftarkan perkaranya secara mandiri lewat aplikasi e-Court Mahkamah Agung. Anda cukup membuat akun di loket e-Court Pengadilan Agama dengan membawa KTP dan email aktif untuk mengunggah berkas serta menerima panggilan sidang secara elektronik."
  }
];
