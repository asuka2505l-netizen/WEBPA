// Knowledge Base & NLP Engine untuk Asisten AI Pengadilan Agama Bandung Kelas 1A ("Si-PANDU AI")
import { BANDUNG_REGIONS } from './bandungRegions';
import { RADIUS_ZONES, getRadiusById } from './radiusData';
import { formatRupiah } from './biayaPerkara';

export const INITIAL_BOT_MESSAGE = {
  id: "welcome-msg",
  sender: "bot",
  text: "Sampurasun! Selamat datang di **Si-PANDU AI** (Asisten Virtual Interaktif Pengadilan Agama Bandung Kelas 1A).\n\nSaya siap membantu Anda menjawab seputar:\n- 📋 Persyaratan berkas perkara (Cerai, Dispensasi Nikah, Waris)\n- 💰 Estimasi panjar biaya & tarif radius 30 kecamatan Kota Bandung\n- ⚖️ Alur dan tahapan persidangan\n- 🏛️ Bantuan hukum gratis (Posbakum/Prodeo) & jadwal loket\n\nSilakan ketik pertanyaan Anda atau pilih topik cepat di bawah ini.",
  quickReplies: [
    "Berapa biaya cerai di Kota Bandung?",
    "Bagaimana jika buku nikah hilang?",
    "Apa beda Cerai Gugat dan Cerai Talak?",
    "Berapa lama proses sampai Akta Cerai keluar?",
    "Apakah ada layanan pengacara gratis?",
    "Alamat & jam buka loket PTSP Antapani"
  ],
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

// Intent and pattern matching logic
export function processUserQuery(input) {
  const query = input.toLowerCase().trim();

  // 1. Check for specific sub-districts / villages (Kelurahan & Kecamatan) in Bandung
  for (const reg of BANDUNG_REGIONS) {
    const kecMatch = query.includes(reg.kecamatan.toLowerCase());
    const matchedKel = reg.kelurahan.find((k) => query.includes(k.toLowerCase()));

    if (kecMatch || matchedKel) {
      const radius = getRadiusById(reg.radiusId);
      const locName = matchedKel ? `Kelurahan ${matchedKel}, Kecamatan ${reg.kecamatan}` : `Kecamatan ${reg.kecamatan}`;
      return {
        text: `📍 Wilayah **${locName}** di Kota Bandung masuk dalam zonasi **${radius.name}** Pengadilan Agama Bandung.\n\n` +
          `• **Tarif Pemanggilan Jurusita:** **${formatRupiah(radius.costPerCall)}** per satu kali panggilan.\n` +
          `• **Estimasi Panjar Gugatan Cerai:** Sekitar **${formatRupiah(30000 + 100000 + 20000 + 10000 + 10000 + (2 * radius.costPerCall) + (3 * radius.costPerCall))}** (dengan asumsi kedua pihak bertempat tinggal di wilayah yang sama).\n\n` +
          `💡 Sisa uang panjar yang tidak terpakai dalam pemanggilan sidang **100% wajib dikembalikan** kepada Anda setelah perkara diputus.`,
        actionLink: { text: "Buka Kalkulator Biaya", url: "/kalkulator" }
      };
    }
  }

  // 2. Intent: Biaya Panjar & Radius Umum
  if (query.includes("biaya") || query.includes("ongkos") || query.includes("tarif") || query.includes("panjar") || query.includes("bayar") || query.includes("uang")) {
    return {
      text: `💰 **Estimasi Panjar Biaya Perkara di PA Bandung Kelas 1A** dihitung berdasarkan SK Ketua Pengadilan Agama Bandung:\n\n` +
        `1. **Komponen Tetap:**\n` +
        `   - Pendaftaran (PNBP): Rp 30.000\n` +
        `   - Biaya Proses / ATK: Rp 100.000 (Gugatan) / Rp 75.000 (Permohonan)\n` +
        `   - PNBP Relaas Panggilan: Rp 20.000\n` +
        `   - Redaksi Putusan: Rp 10.000\n` +
        `   - Meterai: Rp 10.000\n\n` +
        `2. **Biaya Pemanggilan Berdasarkan Radius Domisili:**\n` +
        `   - **Radius I:** Rp 100.000 / panggilan (Antapani, Arcamanik, Kiaracondong, Batununggal, Cibeunying Kidul, Mandalajati, Cinambo)\n` +
        `   - **Radius II:** Rp 125.000 / panggilan (Coblong, Dago, Bandung Wetan, Buahbatu, Lengkong, Ujungberung, Cibiru, dll.)\n` +
        `   - **Radius III:** Rp 150.000 / panggilan (Sukajadi, Pasteur, Sukasari, Cicendo, Andir, Bojongloa, Bandung Kulon, dll.)\n` +
        `   - **Pihak Ghoib:** Rp 150.000 (Iklan radio / papan pengumuman)\n\n` +
        `Rata-rata total panjar awal perceraian berkisar antara **Rp 800.000 s.d. Rp 1.100.000**. Sisa panjar dikembalikan secara utuh melalui kasir.`,
      actionLink: { text: "Hitung Simulasi di Kalkulator", url: "/kalkulator" }
    };
  }

  // 3. Intent: Buku Nikah Hilang / Rusak
  if (query.includes("buku nikah hilang") || query.includes("akta nikah hilang") || query.includes("duplikat") || query.includes("buku nikah rusak")) {
    return {
      text: `📖 **Jika Buku Nikah Asli Hilang atau Rusak:**\n\n` +
        `Pengadilan Agama Bandung **tidak dapat memproses** perkara tanpa bukti pernikahan sah. Namun Anda tidak perlu khawatir, silakan ikuti alur berikut:\n\n` +
        `1. Buat **Surat Tanda Laporan Kehilangan (STLK)** di Polsek terdekat.\n` +
        `2. Bawa surat kehilangan tersebut ke **KUA Kecamatan tempat Anda menikah dulu**.\n` +
        `3. Mintalah penerbitan **Duplikat Kutipan Akta Nikah** (berwarna kuning/cokelat berstempel KUA).\n` +
        `4. Setelah Duplikat Buku Nikah terbit, fotokopi 1 rangkap dan beri cap leges (*nazegelen*) di Kantor Pos sebelum didaftarkan ke PTSP.`,
      actionLink: { text: "Lihat Checklist Lengkap", url: "/checklist" }
    };
  }

  // 4. Intent: Perbedaan Cerai Gugat vs Cerai Talak
  if (query.includes("cerai gugat") || query.includes("cerai talak") || query.includes("beda cerai") || query.includes("perbedaan cerai") || query.includes("siapa yang mengajukan")) {
    return {
      text: `⚖️ **Perbedaan Mendasar Cerai Gugat dan Cerai Talak:**\n\n` +
        `• **Gugatan Cerai:**\n` +
        `  - Diajukan oleh **ISTRI** terhadap suami.\n` +
        `  - Didaftarkan di Pengadilan Agama pada yurisdiksi tempat tinggal istri (Pasal 73 UU No. 7/1989).\n` +
        `  - Putusan berkekuatan hukum tetap langsung mengakhiri perkawinan dan menerbitkan Akta Cerai tanpa ikrar talak.\n\n` +
        `• **Permohonan Cerai Talak:**\n` +
        `  - Diajukan oleh **SUAMI** yang ingin menceraikan istri.\n` +
        `  - Didaftarkan di Pengadilan Agama tempat tinggal istri (kecuali istri ghoib).\n` +
        `  - Memerlukan sidang tambahan: **Sidang Pengucapan Ikrar Talak** oleh suami di hadapan Majelis Hakim setelah putusan inkracht.`,
      actionLink: { text: "Ikuti Panduan Mandiri", url: "/panduan" }
    };
  }

  // 5. Intent: Pasangan Ghoib (Kabur / Alamat Tidak Diketahui)
  if (query.includes("ghoib") || query.includes("gaib") || query.includes("kabur") || query.includes("tidak diketahui") || query.includes("menghilang") || query.includes("alamat tidak tahu")) {
    return {
      text: `🔍 **Prosedur Perkara Cerai Ghoib (Pasangan Tidak Diketahui Alamatnya):**\n\n` +
        `Apabila suami/istri telah meninggalkan tempat kediaman bersama dan tidak diketahui lagi keberadaannya di seluruh wilayah RI:\n\n` +
        `1. Wajib mengurus **Surat Keterangan Ghoib** dari kantor Kelurahan setempat di Kota Bandung.\n` +
        `2. Pemanggilan Tergugat dilakukan secara resmi melalui **pengumuman siaran radio pemerintah** atau papan pengumuman elektronik website PA Bandung sebanyak 2 kali.\n` +
        `3. Jarak antara pemanggilan pertama dan kedua adalah 1 bulan, dan sidang digelar minimal 3 bulan setelah panggilan terakhir.\n` +
        `4. Perkara biasanya diputus secara **Verstek** (tanpa kehadiran pihak Tergugat).`,
      actionLink: { text: "Buka Checklist Cerai Ghoib", url: "/checklist" }
    };
  }

  // 6. Intent: Durasi / Berapa Lama Proses Sidang
  if (query.includes("berapa lama") || query.includes("durasi") || query.includes("lama sidang") || query.includes("waktu") || query.includes("kapan selesai") || query.includes("jadwal")) {
    return {
      text: `⏱️ **Estimasi Jangka Waktu Persidangan di PA Bandung Kelas 1A:**\n\n` +
        `• **Perkara Cerai Standar (Para Pihak Kooperatif):**\n` +
        `  - Sekitar **1 s.d. 3 bulan** (rata-rata 4 hingga 6 kali persidangan).\n` +
        `• **Perkara Cerai Ghoib:**\n` +
        `  - Sekitar **4 s.d. 6 bulan** (karena memerlukan masa tenggang panggilan radio 3 bulan).\n` +
        `• **Perkara Permohonan (Dispensasi Nikah / Ahli Waris):**\n` +
        `  - Sekitar **2 s.d. 4 minggu** (biasanya 2-3 kali persidangan cepat).\n\n` +
        `📅 Anda dapat melihat simulasi kalender tanggal sidang dengan memilih tanggal pendaftaran perkara Anda!`,
      actionLink: { text: "Lihat Simulasi Kalender Sidang", url: "/peta-alur" }
    };
  }

  // 7. Intent: Bantuan Hukum Gratis (Posbakum & Prodeo)
  if (query.includes("gratis") || query.includes("posbakum") || query.includes("prodeo") || query.includes("tidak mampu") || query.includes("pengacara gratis") || query.includes("sktm")) {
    return {
      text: `🤝 **Layanan Bantuan Hukum Cuma-Cuma di PA Bandung Kelas 1A:**\n\n` +
        `1. **Posbakum (Pos Bantuan Hukum):**\n` +
        `   - **100% GRATIS** tanpa dipungut biaya apa pun.\n` +
        `   - Membantu pembuatan surat gugatan/permohonan mandiri dan konsultasi hukum.\n` +
        `   - Lokasi: Lantai dasar gedung PTSP Jl. Terusan Jakarta No. 120 Antapani.\n\n` +
        `2. **Perkara Prodeo (Pembebasan Biaya Perkara):**\n` +
        `   - Bagi warga miskin/tidak mampu, seluruh biaya panjar ditanggung negara (Rp 0).\n` +
        `   - **Syarat Wajib:** Melampirkan Surat Keterangan Tidak Mampu (SKTM) dari Lurah setempat atau Kartu Bansos resmi (KIS / KIP / PKH).`,
      actionLink: { text: "Lihat Persyaratan Prodeo di FAQ", url: "/faq" }
    };
  }

  // 8. Intent: Alamat, Lokasi, Jam Buka PTSP
  if (query.includes("alamat") || query.includes("lokasi") || query.includes("kantor") || query.includes("jam buka") || query.includes("operasional") || query.includes("antapani") || query.includes("kontak") || query.includes("telepon")) {
    return {
      text: `🏛️ **Gedung Pengadilan Agama Bandung Kelas 1A:**\n\n` +
        `• **Alamat:** Jl. Terusan Jakarta No. 120, Antapani Tengah, Kec. Antapani, Kota Bandung 40291 (sebelah timur flyover Pelangi Antapani).\n` +
        `• **Jam Pelayanan Loket PTSP:**\n` +
        `  - Senin - Kamis: 08.00 - 16.00 WIB (Istirahat 12.00 - 13.00 WIB)\n` +
        `  - Jumat: 08.00 - 16.30 WIB (Istirahat 11.30 - 13.00 WIB)\n` +
        `• **Telepon:** (022) 7202357\n` +
        `• **WhatsApp PTSP:** +62 813-2049-9227`,
      actionLink: { text: "Lihat Peta Lokasi & Kontak", url: "/kontak" }
    };
  }

  // 9. Intent: Akta Cerai & Pengambilan Produk
  if (query.includes("akta cerai") || query.includes("ambil akta") || query.includes("salinan putusan") || query.includes("produk pengadilan")) {
    return {
      text: `📜 **Pengambilan Akta Cerai di Pengadilan Agama Bandung:**\n\n` +
        `1. Akta Cerai hanya dapat diterbitkan **setelah perkara berkekuatan hukum tetap (Inkracht/BHT)**, yaitu 14 hari kerja setelah putusan dibacakan/diberitahukan tanpa ada banding.\n` +
        `2. Pengambilan dapat dilakukan langsung di loket Pengambilan Produk PTSP Antapani atau memesan antrean online melalui formulir resmi PA Bandung.\n` +
        `3. **Syarat Pengambilan:**\n` +
        `   - Membawa KTP Asli pemohon.\n` +
        `   - Membawa nomor perkara resmi.\n` +
        `   - Membayar PNBP Akta Cerai sebesar Rp 10.000 di kasir.`,
      actionLink: { text: "Form Pengambilan Akta Online", url: "https://forms.gle/DtLKsY1AJLieG2RL6", isExternal: true }
    };
  }

  // 10. Intent: Dispensasi Kawin / Nikah Dini
  if (query.includes("dispensasi") || query.includes("nikah muda") || query.includes("bawah umur") || query.includes("kurang umur") || query.includes("19 tahun")) {
    return {
      text: `💍 **Permohonan Dispensasi Kawin (Usia Calon Pengantin < 19 Tahun):**\n\n` +
        `Berdasarkan UU No. 16 Tahun 2019 dan PERMA No. 5 Tahun 2019:\n\n` +
        `1. Permohonan diajukan oleh **KEDUA ORANG TUA KANDUNG** calon pengantin yang belum cukup umur.\n` +
        `2. **Berkas Mutlak:**\n` +
        `   - Surat Penolakan dari KUA (Model N5).\n` +
        `   - KTP & Kartu Keluarga orang tua dan calon mempelai.\n` +
        `   - Akta Kelahiran dan ijazah terakhir calon pengantin.\n` +
        `   - Surat Keterangan Kesehatan / Rekomendasi Puskesmas atau Dokter.\n` +
        `3. Dalam persidangan, calon mempelai pria dan wanita serta kedua pasang orang tua **wajib hadir** untuk didengar keterangannya oleh Hakim.`,
      actionLink: { text: "Buka Checklist Dispensasi", url: "/checklist" }
    };
  }

  // 11. Intent: Waris / Penetapan Ahli Waris
  if (query.includes("waris") || query.includes("ahli waris") || query.includes("paw") || query.includes("harta peninggalan") || query.includes("silsilah")) {
    return {
      text: `📜 **Penetapan Ahli Waris (PAW / Voluntair):**\n\n` +
        `Permohonan PAW diajukan secara sukarela untuk keperluan administratif perbankan, balik nama sertifikat tanah, atau klaim asuransi:\n\n` +
        `1. Seluruh ahli waris sah harus bertindak sebagai **Para Pemohon** (atau memberikan surat kuasa persetujuan jika berhalangan).\n` +
        `2. **Berkas Wajib:**\n` +
        `   - Akta Kematian Pewaris dari Disdukcapil.\n` +
        `   - Surat Silsilah Ahli Waris yang diketahui dan dicap oleh RT, RW, dan Lurah setempat.\n` +
        `   - KTP, KK, dan Akta Kelahiran seluruh ahli waris.\n` +
        `   - Buku Nikah pewaris.\n` +
        `   - Bukti kepemilikan objek harta (buku tabungan/sertifikat).`,
      actionLink: { text: "Lihat Dokumen Waris", url: "/checklist" }
    };
  }

  // 12. Intent: Calo & Keamanan Transaksi
  if (query.includes("calo") || query.includes("pungli") || query.includes("titip perkara") || query.includes("biaya tambahan") || query.includes("bayar hakim")) {
    return {
      text: `🚫 **PENGADILAN AGAMA BANDUNG BEBAS DARI CALO & PUNGLI!**\n\n` +
        `• Seluruh pembayaran perkara HANYA dilakukan melalui sistem perbankan resmi (Virtual Account Bank / Mesin EDC Loket Kasir) dengan bukti lembar SKUM resmi.\n` +
        `• **JANGAN PERNAH** memberikan uang tunai kepada siapa pun yang mengaku pegawai, panitera, atau jurusita di luar loket kasir.\n` +
        `• Segala penawaran bantuan calo harap segera dilaporkan ke **SIWAS Bawas Mahkamah Agung RI** melalui [siwas.mahkamahagung.go.id](https://siwas.mahkamahagung.go.id/).`,
      actionLink: { text: "Hubungi Layanan Pengaduan", url: "/kontak" }
    };
  }

  // 13. Default Fallback
  return {
    text: `Terima kasih atas pertanyaan Anda. Untuk pertanyaan khusus atau konsultasi perkara Anda di wilayah hukum Kota Bandung:\n\n` +
      `1. Silakan manfaatkan menu **Panduan Perkara Interaktif** untuk mendapatkan rekomendasi alur berkas langkah demi langkah.\n` +
      `2. Gunakan **Kalkulator Panjar** untuk menghitung estimasi biaya berdasarkan 151 kelurahan di Kota Bandung.\n` +
      `3. Atau hubungi langsung **Petugas Meja Informasi PTSP PA Bandung** melalui WhatsApp resmi di bawah ini.`,
    actionLink: {
      text: "Chat WhatsApp PTSP (0813-2049-9227)",
      url: "https://wa.me/6281320499227",
      isExternal: true
    }
  };
}
