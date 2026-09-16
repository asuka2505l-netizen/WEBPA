# Rencana Implementasi: Portal Panduan Perkara Interaktif Pengadilan Agama

Membangun website modern, resmi, profesional, responsif, dan mudah digunakan untuk **Pengadilan Agama** dengan konsep utama sebagai **Portal Panduan Perkara Interaktif**. Portal ini dirancang untuk mempermudah masyarakat umum (termasuk yang awam hukum dan teknologi) dalam memahami alur perkara, menentukan prosedur yang tepat berdasarkan kondisi riil, menyiapkan checklist berkas persyaratan, dan menghitung estimasi panjar biaya perkara secara mandiri dan transparan.

---

## 1. Arsitektur & Desain Visual

- **Teknologi Utama**:
  - React 19 + Vite
  - React Router DOM untuk navigasi multi-halaman
  - Lucide React untuk ikonografi resmi, bersih, dan intuitif
  - LocalStorage untuk retensi status checklist dokumen, riwayat sesi panduan, dan input kalkulator
  - Vanilla CSS Modern dengan Design Tokens (warna institusi kejaksaan/peradilan Islam: *Deep Emerald Green* `#064e3b` / `#0f5132`, aksen emas wibawa *Court Gold* `#b45309` / `#d97706`, latar belakang bersih *Slate/Off-white* `#f8fafc`, kartu dengan bayangan lembut, tipografi *Inter* / *Plus Jakarta Sans*)
  - Print Stylesheet (`@media print`) untuk mencetak checklist persyaratan dokumen siap dibawa ke loket PTSP pengadilan

- **Arsitektur Data Tanpa Backend**:
  - Seluruh struktur alur keputusan (*decision tree*), daftar persyaratan dokumen, skema radius biaya pemanggilan, dan daftar tanya jawab (FAQ) disimpan dalam berkas data JavaScript modular di folder `src/data/`.
  - Data bersifat terstruktur dan diberi penanda placeholder resmi agar instansi Pengadilan Agama dapat dengan mudah memperbarui tarif, regulasi, maupun checklist tanpa merombak komponen UI.

---

## 2. Struktur Modul & Berkas

```
webPAB/
├── src/
│   ├── assets/
│   │   └── CourtLogo.jsx (Komponen emblem resmi lambang Pengadilan Agama / Cakra Mahkamah Agung)
│   ├── data/
│   │   ├── perkaraData.js (Daftar & deskripsi jenis perkara utama: Perceraian, Dispensasi Nikah, Waris, dsb.)
│   │   ├── flowData.js (Decision Tree Engine: start, percabangan pemohon, kondisi dokumen, hasil akhir)
│   │   ├── visualFlowData.js (Tahapan detail alur perkara visual: Pendaftaran, Sidang, Putusan, Akta Cerai)
│   │   ├── documentData.js (Daftar checklist berkas perkara, catatan hukum, & status wajib/fakultatif)
│   │   ├── biayaPerkara.js (Komponen panjar: pendaftaran, proses ATK, PNBP, redaksi, meterai)
│   │   ├── radiusData.js (Data radius 1 - 4 dengan tarif pemanggilan jurusita per pihak)
│   │   └── faqData.js (Koleksi tanya jawab seputar perkara, e-court, dan layanan prodeo/posbakum)
│   ├── context/
│   │   └── PortalContext.jsx (Pengelola state global: riwayat wizard, status checklist LocalStorage, data kalkulator)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx (Header navigasi resmi dengan menu aktif & hamburger mobile)
│   │   │   ├── Footer.jsx (Tautan institusi, jam PTSP, akreditasi WBK/WBBM, hak cipta)
│   │   │   └── DisclaimerBanner.jsx (Pemberitahuan hukum bahwa portal adalah panduan estimasi)
│   │   ├── home/
│   │   │   ├── Hero.jsx (Headline terpercaya, subjudul informatif, tombol CTA utama)
│   │   │   ├── FeatureCards.jsx (3 Kartu fitur utama: Panduan, Checklist, Kalkulator)
│   │   │   ├── FlowOverviewSection.jsx (4 Langkah mudah pelayanan perkara di PA)
│   │   │   └── QuickInfoSection.jsx (PTSP, Posbakum Bantuan Hukum Gratis, E-Court Terintegrasi)
│   │   ├── wizard/
│   │   │   ├── QuestionCard.jsx (Satu pertanyaan, satu keputusan, kartu pilihan interaktif)
│   │   │   ├── ProgressBar.jsx (Indikator langkah dinamis: "Pertanyaan X dari Y")
│   │   │   └── WizardControls.jsx (Tombol Kembali, Mulai Ulang, & Simpan Progres)
│   │   ├── flow/
│   │   │   ├── FlowDiagram.jsx (Diagram peta alur interaktif dengan garis penghubung)
│   │   │   └── StageDetailModal.jsx (Detail tahapan terpilih: penjelasan, berkas, & tips)
│   │   ├── checklist/
│   │   │   ├── DocumentChecklist.jsx (Daftar dokumen interaktif dapat dicentang)
│   │   │   └── ChecklistSummary.jsx (Status kelengkapan, cetak ke printer/PDF, reset)
│   │   ├── calculator/
│   │   │   ├── CostCalculator.jsx (Form interaktif: jenis perkara & radius pemanggilan)
│   │   │   └── CostBreakdownTable.jsx (Rincian transparan per komponen panjar biaya)
│   │   └── common/
│   │       └── TooltipBadge.jsx (Penjelasan istilah hukum yang ramah masyarakat awam)
│   ├── pages/
│   │   ├── Home.jsx (Beranda komprehensif)
│   │   ├── PanduanPerkara.jsx (Halaman Wizard Interaktif)
│   │   ├── HasilPanduan.jsx (Rangkuman keputusan, rekomendasi langkah & tautan langsung)
│   │   ├── PetaAlur.jsx (Visualisasi tahapan alur perkara dari awal sampai putusan)
│   │   ├── ChecklistDokumen.jsx (Halaman checklist kelengkapan berkas)
│   │   ├── KalkulatorPanjar.jsx (Halaman kalkulator estimasi panjar biaya)
│   │   ├── FAQ.jsx (Tanya jawab dengan pencarian dan filter kategori)
│   │   ├── Kontak.jsx (Informasi loket PTSP, jam layanan, alamat, peta lokasi, kontak aduan)
│   │   └── NotFound.jsx (Halaman 404 ramah pengguna)
│   ├── styles/
│   │   ├── index.css (Design system, tokens, resets, tipografi)
│   │   └── components.css (Gaya kartu, diagram alur, checklist, kalkulator, animasi)
│   ├── App.jsx (Router & layout wrapper)
│   └── main.jsx
```

---

## 3. Fitur Utama & Logika Alur

### A. Panduan Alur Perkara Interaktif (Decision Tree Engine)
- **Konsep**: *Satu Pertanyaan, Satu Keputusan, Satu Langkah*.
- **Data-Driven Tree**:
  - `start`: Memilih kategori kebutuhan (`perceraian`, `dispensasi`, `waris`).
  - Cabang `perceraian`:
    - Pertanyaan: *"Siapa yang mengajukan permohonan atau gugatan perceraian?"*
    - Pilihan **Istri** $\rightarrow$ Jalur **Gugatan Cerai** (Penggugat vs Tergugat).
    - Pilihan **Suami** $\rightarrow$ Jalur **Cerai Talak** (Pemohon vs Termohon).
    - Pertanyaan lanjutan: Ketersediaan buku nikah asli, kejelasan alamat tempat tinggal pasangan (ghoib / diketahui), kesiapan saksi keluarga.
  - Cabang `dispensasi`:
    - Jalur permohonan dispensasi kawin bagi calon pengantin di bawah usia 19 tahun sesuai UU No. 16 Tahun 2019.
    - Pengecekan surat penolakan dari KUA (Model N8) dan kesiapan orang tua pemohon.
  - Cabang `waris`:
    - Penetapan Ahli Waris (*Voluntair*) vs Gugatan Sengketa Waris (*Contentiosa*).
    - Pengecekan surat kematian pewaris, silsilah keluarga dari kelurahan.
- **Navigasi Fleksibel**:
  - Tombol **Kembali** memundurkan step ke simpul sebelumnya menggunakan tumpukan riwayat (*history stack*) tanpa menghapus pilihan yang sudah dipilih.
  - Tombol **Mulai Ulang** mereset panduan ke awal dengan konfirmasi halus.
  - Tombol **Lanjutkan ke Hasil** mengarah ke `/hasil-panduan` membawa ringkasan status kelengkapan.

### B. Halaman Hasil Akhir Panduan (`/hasil-panduan`)
- Menampilkan:
  1. Identifikasi Jenis Perkara (contoh: **Gugatan Cerai** atau **Cerai Talak**).
  2. Status Kesiapan Dokumen Awal.
  3. 4 Langkah Terarah yang Disarankan (Periksa Dokumen $\rightarrow$ Hitung Panjar $\rightarrow$ Pelajari Peta Alur $\rightarrow$ Datang ke PTSP / Ajukan via E-Court).
  4. Kartu Tombol Aksi Cepat langsung menuju Checklist, Kalkulator, dan Peta Alur dengan jenis perkara yang sudah terisi otomatis (*pre-filled*).
  5. *Disclaimer* resmi perlindungan hukum.

### C. Peta Alur Visual Interaktif (`/peta-alur`)
- Menampilkan visualisasi diagram tahapan perkara dari Pendaftaran sampai Penyerahan Produk Pengadilan:
  - 8 Tahapan Berurutan:
    1. Persiapan Berkas & Surat Gugatan/Permohonan
    2. Pendaftaran Perkara (Loket PTSP / E-Court)
    3. Pembayaran Panjar Biaya Perkara via Virtual Account Bank
    4. Penetapan Majelis Hakim & Hari Sidang (PMH & PHS)
    5. Pemanggilan Para Pihak (Relaas Panggilan oleh Jurusita)
    6. Proses Mediasi (Wajib dihadiri prinsipal) & Persidangan
    7. Pembacaan Putusan / Penetapan Akhir
    8. Pengambilan Akta Cerai / Salinan Putusan
- Setiap node tahapan dapat diklik untuk menampilkan modal/panel informasi mendalam:
  - Penjelasan apa yang terjadi pada tahap tersebut.
  - Berkas yang wajib dibawa saat hadir di ruang sidang/PTSP.
  - Estimasi durasi dan catatan penting.
  - Indikator posisi langkah: "Tahap X dari 8".

### D. Checklist Persyaratan Dokumen (`/checklist`)
- Tab filter: Gugatan Cerai, Cerai Talak, Dispensasi Nikah, Waris.
- Fitur interaktif:
  - Kotak centang (*checkbox*) untuk setiap berkas.
  - *Progress bar* dan counter: "3 dari 5 dokumen telah disiapkan (60%)".
  - Pesan status kontekstual (Belum Lengkap vs Lengkap).
  - Penyimpanan otomatis ke **LocalStorage** (data centang tidak hilang saat halaman di-refresh).
  - Tombol **Reset Checklist** dan **Cetak Checklist** (dengan format cetak siap pakai berlogo Pengadilan Agama).

### E. Kalkulator Estimasi Panjar Biaya Perkara (`/kalkulator`)
- Input Perhitungan:
  - Pilihan Jenis Perkara.
  - Pilihan Radius Wilayah Pihak 1 (Penggugat/Pemohon).
  - Pilihan Radius Wilayah Pihak 2 (Tergugat/Termohon).
  - Opsi Pihak Tidak Diketahui Tempat Tinggalnya (*Ghoib* melalui Pengumuman Radio / Surat Kabar).
- Rincian Transparan:
  - Biaya Pendaftaran / Kepaniteraan (PNBP)
  - Biaya Proses / ATK
  - Biaya Pemanggilan Pihak 1 (perkiraan 2x panggilan)
  - Biaya Pemanggilan Pihak 2 (perkiraan 3x panggilan)
  - Biaya Redaksi & Meterai
  - **Total Estimasi Panjar Biaya Perkara**
- Penegasan resmi (*Disclaimer*): Perhitungan bersifat estimasi panjar sementara, sisa panjar biaya yang tidak terpakai akan dikembalikan kepada pihak berperkara (*Kompensasi Sisa Panjar*).

### F. Halaman FAQ & Kontak PTSP
- **FAQ**: Kategori terorganisir (Perceraian, Dokumen, Biaya, Persidangan, Layanan Posbakum Gratis), dilengkapi fitur pencarian cepat teks (*live search*).
- **Kontak**: Alamat gedung Pengadilan Agama, Call Center, Layanan WhatsApp PTSP Online, Jam Operasional Loket (Senin-Jumat), Jam Istirahat, dan petunjuk bantuan hukum prodeo untuk masyarakat kurang mampu.

---

## 4. Rencana Verifikasi

1. **Uji Fungsionalitas Alur Decision Tree**:
   - Memastikan navigasi pilihan Istri menghasilkan jalur "Gugatan Cerai" dan Suami menghasilkan "Cerai Talak".
   - Memastikan tombol "Kembali" berfungsi mundur tanpa error dan tombol "Mulai Ulang" mereset state.
2. **Uji Retensi LocalStorage**:
   - Mencentang beberapa item dokumen pada checklist, refresh halaman, dan verifikasi status centang tetap tersimpan.
   - Uji tombol Reset Checklist mengosongkan centang dan membarui progress bar.
3. **Uji Kalkulator Biaya**:
   - Memilih kombinasi jenis perkara dan radius yang berbeda, memverifikasi formula rincian biaya dan total perhitungan akurat.
4. **Uji Responsivitas & Tampilan**:
   - Menjalankan dev server Vite dan menguji tampilan di layar desktop (1920x1080 / 1440x900) dan mobile (iPhone / Android 375px - 414px).
   - Memastikan menu navigasi hamburger bekerja mulus pada layar kecil.
5. **Uji Fitur Cetak (Print View)**:
   - Memastikan checklist dokumen tampil bersih dan terformat rapi saat memicu fungsi cetak.

---

## 5. Pertanyaan / Ulasan Pengguna

> [!IMPORTANT]
> Sistem data awal (biaya, radius, dan persyaratan dokumen) akan diisi dengan data struktur acuan baku Pengadilan Agama di Indonesia (Mahkamah Agung RI) yang realistis dan informatif, serta diberi label disclaimer resmi bahwa data dapat disesuaikan dengan Keputusan Ketua Pengadilan Agama setempat.
