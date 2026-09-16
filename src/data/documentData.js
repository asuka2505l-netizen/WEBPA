// Data Persyaratan Dokumen Berdasarkan Jenis Perkara Pengadilan Agama

export const DOCUMENT_DATA = {
  gugatanCerai: {
    caseName: "Gugatan Cerai",
    caseSubtitle: "Perkara yang diajukan oleh Pihak Istri",
    totalMandatory: 4,
    documents: [
      {
        id: "gc_ktp",
        title: "KTP Asli & Fotokopi Penggugat",
        description: "Kartu Tanda Penduduk milik istri yang masih berlaku atau Surat Keterangan Kependudukan resmi dari Disdukcapil.",
        isMandatory: true,
        category: "Identitas",
        legalNote: "Fotokopi 1 lembar, difotokopi di atas kertas HVS ukuran A4/Folio tanpa dipotong.",
        tip: "Pastikan alamat di KTP masuk ke dalam wilayah hukum Pengadilan Agama setempat."
      },
      {
        id: "gc_buku_nikah",
        title: "Buku Nikah Asli & Fotokopi Bermeterai (Leges)",
        description: "Buku Nikah asli istri (atau Duplikat Kutipan Akta Nikah jika asli hilang) beserta fotokopi yang telah diberi cap pos (nazegelen).",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Wajib ditempeli meterai Rp 10.000 dan dicap leges di Kantor Pos (Nazegelen) sesuai UU Bea Meterai.",
        tip: "Jika buku nikah hilang, urus terlebih dahulu Surat Keterangan Kehilangan dari Kepolisian dan Duplikat ke KUA."
      },
      {
        id: "gc_kk",
        title: "Kartu Keluarga (KK) Asli & Fotokopi",
        description: "Kartu Keluarga keluarga bersama atau KK terbaru istri pasca pisah rumah.",
        isMandatory: true,
        category: "Identitas",
        legalNote: "Fotokopi 1 lembar dilegalisasi di kantor pos bersama buku nikah.",
        tip: "Membuktikan hubungan perkawinan serta susunan anak dalam rumah tangga."
      },
      {
        id: "gc_surat_gugatan",
        title: "Surat Gugatan Perceraian",
        description: "Surat gugatan resmi yang memuat identitas para pihak, posita (duduk perkara/kronologis peristiwa), dan petitum (hal yang dimohonkan kepada Majelis Hakim).",
        isMandatory: true,
        category: "Surat Resmi",
        legalNote: "Dibuat minimal dalam rangkap 5 (lima) dan ditandatangani oleh Penggugat di atas meterai Rp 10.000.",
        tip: "Bagi yang belum bisa membuat sendiri, silakan datang langsung ke loket Posbakum (Pos Bantuan Hukum) di Pengadilan Agama untuk bantuan cuma-cuma."
      },
      {
        id: "gc_akta_kelahiran_anak",
        title: "Akta Kelahiran Anak (Bila Menuntut Hak Asuh Anak)",
        description: "Akta kelahiran asli dan fotokopi anak-anak yang lahir dari perkawinan.",
        isMandatory: false,
        category: "Bukti Khusus",
        legalNote: "Diperlukan apabila gugatan disertai tuntutan mengenai Hak Asuh Anak (Hadhanah) dan nafkah anak.",
        tip: "Fotokopi dileges kantor pos apabila diajukan sebagai alat bukti di persidangan."
      },
      {
        id: "gc_surat_ghoib",
        title: "Surat Keterangan Ghoib dari Kelurahan (Jika Suami Tidak Diketahui Alamatnya)",
        description: "Surat resmi dari Kelurahan/Desa tempat tinggal terakhir yang menyatakan bahwa Tergugat (suami) telah pergi meninggalkan kediaman bersama dan tidak diketahui alamatnya.",
        isMandatory: false,
        category: "Surat Keterangan",
        legalNote: "Wajib jika perkara termasuk kategori Cerai Ghoib (suami tidak diketahui keberadaannya minimal 6 bulan berturut-turut).",
        tip: "Surat ini menjadi dasar jurusita memanggil Tergugat melalui pengumuman radio atau media massa."
      },
      {
        id: "gc_surat_izin_atasan",
        title: "Surat Izin Perceraian dari Atasan (Khusus PNS / TNI / POLRI / BUMN)",
        description: "Surat Keputusan Izin Perceraian yang ditandatangani oleh pejabat berwenang di instansi kerja yang bersangkutan.",
        isMandatory: false,
        category: "Khusus Pegawai",
        legalNote: "Wajib dilampirkan bagi pegawai negeri sipil, prajurit TNI, atau anggota Polri sesuai PP No. 45 Tahun 1990.",
        tip: "Sidang dapat ditunda apabila izin atasan belum terbit pada saat persidangan dimulai."
      }
    ]
  },

  ceraiTalak: {
    caseName: "Cerai Talak",
    caseSubtitle: "Perkara yang diajukan oleh Pihak Suami",
    totalMandatory: 4,
    documents: [
      {
        id: "ct_ktp",
        title: "KTP Asli & Fotokopi Pemohon (Suami)",
        description: "KTP suami yang masih berlaku atau surat keterangan domisili.",
        isMandatory: true,
        category: "Identitas",
        legalNote: "Fotokopi 1 lembar di atas kertas A4/Folio.",
        tip: "Pastikan data diri sesuai dengan identitas di Buku Nikah."
      },
      {
        id: "ct_buku_nikah",
        title: "Buku Nikah Asli Suami & Fotokopi Leges Pos",
        description: "Kutipan Akta Nikah asli suami dan salinan yang telah dileges di Kantor Pos (Nazegelen).",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Diberi meterai Rp 10.000 dan cap pos leges.",
        tip: "Jika buku nikah suami ditahan istri, pengadilan tetap dapat menerima dengan catatan fotokopi atau surat keterangan KUA."
      },
      {
        id: "ct_kk",
        title: "Kartu Keluarga (KK) Asli & Fotokopi",
        description: "Fotokopi KK bersama atau KK domisili suami.",
        isMandatory: true,
        category: "Identitas",
        legalNote: "Fotokopi 1 lembar.",
        tip: "Sebagai bukti otentik susunan keluarga dan status pernikahan."
      },
      {
        id: "ct_surat_permohonan",
        title: "Surat Permohonan Cerai Talak",
        description: "Surat permohonan yang ditujukan kepada Ketua Pengadilan Agama tempat tinggal Termohon (istri).",
        isMandatory: true,
        category: "Surat Resmi",
        legalNote: "Dibuat rangkap 5 dan ditandatangani di atas meterai Rp 10.000.",
        tip: "Konsultasikan gratis dengan petugas Posbakum Pengadilan Agama untuk penyusunannya."
      },
      {
        id: "ct_surat_domisili_istri",
        title: "Keterangan Domisili Termohon (Istri)",
        description: "Surat yang menerangkan bahwa istri bertempat tinggal di wilayah yurisdiksi Pengadilan Agama yang dituju.",
        isMandatory: false,
        category: "Surat Keterangan",
        legalNote: "Diperlukan jika KTP istri masih beralamat di luar daerah namun secara de facto bertempat tinggal di wilayah setempat.",
        tip: "Permohonan diajukan di pengadilan tempat tinggal istri (Termohon)."
      },
      {
        id: "ct_izin_atasan",
        title: "Surat Izin Perceraian dari Atasan (Khusus PNS / TNI / POLRI)",
        description: "Surat izin resmi pimpinan instansi jika suami berstatus abdi negara.",
        isMandatory: false,
        category: "Khusus Pegawai",
        legalNote: "Sesuai regulasi PP No. 10 Tahun 1983 jo PP No. 45 Tahun 1990.",
        tip: "Lampirkan pada saat pendaftaran atau selambat-lambatnya sebelum putusan dijatuhkan."
      }
    ]
  },

  dispensasiNikah: {
    caseName: "Dispensasi Kawin / Nikah",
    caseSubtitle: "Permohonan Izin Nikah Usia di Bawah 19 Tahun",
    totalMandatory: 5,
    documents: [
      {
        id: "dn_surat_kua",
        title: "Surat Penolakan / Pemberitahuan Adanya Halangan (Model N8) dari KUA",
        description: "Surat asli dari Kepala Kantor Urusan Agama (KUA) yang menolak pernikahan karena umur calon mempelai belum memenuhi batas minimum UU.",
        isMandatory: true,
        category: "Surat Resmi KUA",
        legalNote: "Syarat mutlak pendaftaran berdasarkan Peraturan Mahkamah Agung RI No. 5 Tahun 2019.",
        tip: "Didapatkan setelah orang tua dan calon mempelai mendaftar pernikahan di KUA setempat."
      },
      {
        id: "dn_ktp_ortu",
        title: "KTP & KK Kedua Orang Tua / Wali Calon Mempelai",
        description: "KTP asli serta fotokopi Ayah dan Ibu kandung calon pengantin.",
        isMandatory: true,
        category: "Identitas",
        legalNote: "Fotokopi masing-masing 1 lembar.",
        tip: "Jika salah satu orang tua telah wafat, lampirkan Surat Kematian."
      },
      {
        id: "dn_akta_kelahiran_anak",
        title: "Akta Kelahiran & Ijazah Terakhir Calon Mempelai",
        description: "Bukti otentik tanggal lahir dan usia sebenarnya dari calon pengantin yang dimohonkan dispensasi.",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Fotokopi dilegalisasi kantor pos (nazegelen).",
        tip: "Untuk membuktikan usia anak yang belum genap 19 tahun."
      },
      {
        id: "dn_surat_kesehatan",
        title: "Surat Keterangan Pemeriksaan Kesehatan / Rekomendasi Medis",
        description: "Surat hasil pemeriksaan medis dari Puskesmas / Rumah Sakit / BKKBN mengenai kesehatan reproduksi dan kesiapan psikologis calon mempelai.",
        isMandatory: true,
        category: "Kesehatan",
        legalNote: "Wajib berdasarkan PERMA No. 5 Tahun 2019 Pasal 5.",
        tip: "Periksakan calon mempelai ke Puskesmas kecamatan terdekat."
      },
      {
        id: "dn_surat_permohonan",
        title: "Surat Permohonan Dispensasi Kawin",
        description: "Surat permohonan yang diajukan oleh kedua orang tua kepada Ketua Pengadilan Agama.",
        isMandatory: true,
        category: "Surat Resmi",
        legalNote: "Rangkap 5, ditandatangani kedua orang tua di atas meterai Rp 10.000.",
        tip: "Dapat dibantu pembuatannya di Posbakum Pengadilan Agama secara gratis."
      },
      {
        id: "dn_berkas_calon_pasangan",
        title: "Fotokopi KTP/Akta Kelahiran Calon Suami / Istri (Pasangannya)",
        description: "Identitas calon besan dan pasangan yang akan dinikahi.",
        isMandatory: false,
        category: "Identitas Pasangan",
        legalNote: "Fotokopi 1 lembar untuk kelengkapan berkas pemeriksaan.",
        tip: "Orang tua pasangan juga wajib dihadirkan pada saat persidangan."
      }
    ]
  },

  waris: {
    caseName: "Penetapan & Sengketa Waris",
    caseSubtitle: "Penetapan Ahli Waris (PAW) & Hukum Kewarisan Islam",
    totalMandatory: 5,
    documents: [
      {
        id: "w_akta_kematian",
        title: "Akta / Surat Keterangan Kematian Pewaris",
        description: "Akta Kematian resmi dari Disdukcapil atau Surat Keterangan Kematian dari Kepala Desa/Lurah tempat meninggalnya pewaris.",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Fotokopi bermeterai dan dicap leges di Kantor Pos (Nazegelen).",
        tip: "Wajib membuktikan secara sah bahwa pewaris telah meninggal dunia."
      },
      {
        id: "w_silsilah",
        title: "Bagan Silsilah Ahli Waris yang Disahkan Kelurahan & Kecamatan",
        description: "Bagan silsilah keluarga almarhum/almarhumah yang ditandatangani seluruh ahli waris dan diketahui serta distempel Lurah dan Camat.",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Dokumen kunci untuk memverifikasi siapa saja dzawil furudh dan ashabah.",
        tip: "Cantumkan nama lengkap seluruh anak, pasangan, orang tua pewaris, serta tanggal lahir."
      },
      {
        id: "w_ktp_kk_ahli_waris",
        title: "KTP & Kartu Keluarga (KK) Seluruh Ahli Waris",
        description: "Identitas kependudukan seluruh anak, pasangan yang masih hidup, dan ahli waris sah lainnya.",
        isMandatory: true,
        category: "Identitas",
        legalNote: "Fotokopi masing-masing 1 lembar.",
        tip: "Pastikan penulisan nama di KTP selaras dengan nama di bagan silsilah."
      },
      {
        id: "w_akta_kelahiran_anak",
        title: "Akta Kelahiran Seluruh Anak Kandung",
        description: "Bukti sah hubungan nasab anak kandung dengan almarhum pewaris.",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Fotokopi dileges pos.",
        tip: "Wajib untuk semua anak kandung laki-laki maupun perempuan."
      },
      {
        id: "w_buku_nikah_pewaris",
        title: "Buku Nikah / Akta Nikah Pewaris",
        description: "Buku nikah resmi almarhum dengan suami/istri yang bersangkutan.",
        isMandatory: true,
        category: "Bukti Pokok",
        legalNote: "Asli dan fotokopi bermeterai pos.",
        tip: "Untuk membuktikan keabsahan hubungan suami-istri pewaris."
      },
      {
        id: "w_bukti_objek_waris",
        title: "Bukti Kepemilikan Harta (Sertifikat / BPKB / Buku Tabungan)",
        description: "Sertifikat Hak Milik (SHM) tanah, BPKB kendaraan, atau rekening bank atas nama almarhum (Wajib jika berupa Gugatan Sengketa Waris).",
        isMandatory: false,
        category: "Objek Harta",
        legalNote: "Diperlukan apabila mengajukan permohonan yang merinci pembagian objek atau gugatan sengketa waris.",
        tip: "Bila hanya permohonan penetapan figur ahli waris, bukti objek harta bersifat fakultatif."
      }
    ]
  }
};
