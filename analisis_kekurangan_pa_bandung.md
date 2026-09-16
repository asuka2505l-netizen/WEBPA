# Analisis Fitur, Evaluasi Kritis, dan Kekurangan Situs Resmi Pengadilan Agama Bandung (pa-bandung.go.id)

Dokumen ini disusun sebagai hasil audit antarmuka pengguna (*User Experience / User Interface*), alur informasi hukum, dan evaluasi arsitektur digital terhadap situs web resmi **Pengadilan Agama Bandung Kelas 1A** ([https://pa-bandung.go.id/](https://pa-bandung.go.id/)).

---

## I. Ringkasan Eksekutif

Situs `pa-bandung.go.id` merupakan portal resmi Pengadilan Agama Bandung Kelas 1A yang dibangun menggunakan platform CMS **WordPress** (*Genesis Framework* dengan *child theme* instansi). Situs ini berfungsi ganda sebagai:
1. Media transparansi akuntabilitas kinerja kedinasan (LRA, CALK, DIPA, ZI/WBK, PPID).
2. Pintu gerbang tautan ke berbagai aplikasi pusat Mahkamah Agung RI dan Badilag (SIPP, e-Court, Gugatan Mandiri, SIWAS, ACO).

**Temuan Utama**: Meskipun memuat data hukum dan laporan birokrasi yang sangat lengkap, situs ini didesain dengan pola **portal berita dinas klasik**. Pola ini kurang ramah bagi masyarakat umum pencari keadilan yang awam hukum dan teknologi. Terdapat jurang (*gap*) signifikan antara informasi yang dipublikasikan instansi dengan **kebutuhan praktis warga** yang ingin mengetahui:
- *"Perkara saya masuk kategori apa?"*
- *"Berkas apa saja yang wajib saya bawa besok ke loket PTSP Antapani?"*
- *"Berapa estimasi uang panjar yang harus saya siapkan sesuai kecamatan saya?"*
- *"Bagaimana urutan sidangnya dari awal sampai putusan?"*

---

## II. Inventarisasi Fitur yang Ada di pa-bandung.go.id

Berikut adalah daftar fitur utama yang saat ini berjalan pada situs eksisting:

| No | Nama Fitur / Modul | Deskripsi & Implementasi Saat Ini |
| :--- | :--- | :--- |
| 1 | **Formulir Cek Nomor Perkara SIPP** | Input pencarian nomor perkara pada sidebar kanan yang terhubung ke server SIPP (`sipp.pa-bandung.go.id/list_perkara/search`). |
| 2 | **Embed Jadwal Sidang Harian** | *Iframe* penampil jadwal sidang otomatis yang mengambil data dari SIPP PA Bandung. |
| 3 | **Hero Slider Program Prioritas** | Carousel spanduk program prioritas Ditjen Badilag, e-Court, gugatan mandiri, dan anti-gratifikasi. |
| 4 | **Slider Ucapan Duka & Selamat** | Slider kedua pada bagian bawah artikel yang menampilkan warta mutasi/pelantikan pimpinan dan bela sungkawa. |
| 5 | **Tombol Cepat Layanan (Siema Grid)** | Kumpulan gambar tautan ke e-Court, SIPP, Gugatan Mandiri, Pengambilan Akta Cerai, Posbakum, dan Survey. |
| 6 | **Panggilan Ghoib Elektronik** | Halaman publikasi daftar pihak Tergugat/Termohon yang tidak diketahui alamatnya di wilayah RI. |
| 7 | **Pengambilan Akta Cerai Online** | Formulir pemesanan antrean pengambilan produk hukum melalui Google Forms (`forms.gle/DtLKsY1AJLieG2RL6`). |
| 8 | **Floating WhatsApp PTSP** | Tombol mengambang di pojok kanan bawah menuju nomor WhatsApp layanan (+62 813-2049-9227). |
| 9 | **Menu Transparansi PPID & ZI** | Kumpulan dokumen laporan DIPA, RKT, IKU, LKjIP, LHKPN, dan area Zona Integritas. |
| 10 | **Teks Berjalan (*Marquee*) Waspada Calo** | Banner peringatan penolakan pungli dan penipuan calo di luar loket PTSP. |

---

## III. Evaluasi 7 Kekurangan Utama (Pain Points & UX Deficiencies)

### 1. Beban Kognitif Berlebih (*Information Overload & Cluttered Interface*)
- **Deskripsi Masalah**: Halaman beranda (*homepage*) dijejali berbagai elemen yang saling berebut perhatian: teks berjalan (*marquee*), jam digital dengan sapaan waktu, dua slider gambar berukuran besar, *iframe* jadwal sidang setinggi 480px, video YouTube, poster berukuran variatif, dan widget statistik pengunjung.
- **Dampak bagi Pengguna**: Masyarakat awam yang sedang mengalami permasalahan keluarga sering kali datang dalam kondisi stres emosional. Tampilan yang padat dan riuh membuat mereka frustrasi dan kebingungan menentukan titik awal (*Where do I start?*).

### 2. Ketiadaan Panduan Interaktif (*No Decision Tree Wizard*)
- **Deskripsi Masalah**: Di menu "Persyaratan Berperkara", informasi hanya disajikan dalam bentuk daftar pasal dan teks deskriptif satu arah.
- **Dampak bagi Pengguna**:
  - Banyak masyarakat tidak paham perbedaan mendasar antara **Gugatan Cerai** (inisiatif istri) dan **Cerai Talak** (inisiatif suami).
  - Tidak ada sistem tanya-jawab dinamis yang mengidentifikasi kondisi spesifik (misalnya: apakah alamat pasangan ghoib, apakah buku nikah hilang, atau apakah ada anak di bawah umur). Akibatnya, masyarakat sering salah berkas saat datang ke loket Meja 1 PTSP.

### 3. Fitur Hitung Panjar Terfragmentasi ke Tautan Luar (*TinyURL & Form Terpisah*)
- **Deskripsi Masalah**: Pada menu navigasi *PTSP Online $\rightarrow$ Hitung Panjar Biaya Perkara*, pengguna diarahkan ke tautan pihak ketiga *shortlink* (`https://tinyurl.com/y79u8n4f`) atau tabel PDF SK Panjar Biaya Perkara.
- **Dampak bagi Pengguna**:
  - Pengguna terlempar keluar dari website utama, menimbulkan kecurigaan keamanan (*phishing/broken link*).
  - Tidak ada kalkulator bawaan (*in-app calculator*) yang transparan menampilkan rincian: PNBP Pendaftaran (Rp 30.000), ATK Proses (Rp 100.000), PNBP Relaas, Redaksi (Rp 10.000), Meterai (Rp 10.000), serta perkalian frekuensi panggilan berdasarkan **Radius I (Rp 100.000), Radius II (Rp 125.000), dan Radius III (Rp 150.000)** di 30 kecamatan Kota Bandung.

### 4. Tidak Ada Fitur Checklist Dokumen Mandiri dengan Penyimpanan (*Zero Interactivity*)
- **Deskripsi Masalah**: Daftar berkas persyaratan hanya berupa teks statis biasa.
- **Dampak bagi Pengguna**:
  - Pengguna harus mencatat ulang di buku atau mengingat berkas satu per satu.
  - Tidak ada fitur centang berkas yang tersimpan otomatis di perangkat (LocalStorage).
  - Tidak ada fasilitas **Cetak Lembar Persiapan Dokumen** yang rapi dan berstandar resmi pengadilan untuk dibawa ke kantor pengadilan.

### 5. Struktur Navigasi Hirarkis yang Terlalu Dalam (Hingga 4 Level Dropdown)
- **Deskripsi Masalah**: Struktur navigasi memiliki puluhan anak menu bertingkat (contoh: *Layanan Publik $\rightarrow$ Panjar Biaya $\rightarrow$ SK Panjar Biaya $\rightarrow$ Prosedur Pengajuan Perkara Tingkat Pertama*).
- **Dampak bagi Pengguna**:
  - Pada layar ponsel (*smartphone*), menu dropdown bertingkat 3 hingga 4 tingkat sangat sulit dioperasikan dan rawan tertutup secara tidak sengaja (*flyout menu usability failure*).

### 6. Berita Seremonial Birokrasi Menggeser Kebutuhan Layanan Publik
- **Deskripsi Masalah**: Area tengah halaman utama (*prime real estate*) dihabiskan untuk memuat berita pelantikan pejabat internal, mutasi panitera, studi tiru, dan slider ucapan duka cita/selamat.
- **Dampak bagi Pengguna**: Proporsi konten tidak seimbang. Kebutuhan warga (panduan perkara, biaya, syarat dokumen) terdorong ke posisi bawah atau tersembunyi di dalam sub-menu, sementara 90% pengunjung situs peradilan datang bukan untuk membaca berita pelantikan pegawai.

### 7. Penggunaan Gambar/Poster Berisi Teks Padat (*Baked-in Text Accessibility*)
- **Deskripsi Masalah**: Informasi jam pelayanan dan jadwal pengambilan produk hukum diunggah dalam bentuk gambar poster (JPEG/PNG beresolusi tinggi dengan tulisan kecil-kecil di dalam gambar).
- **Dampak bagi Pengguna**:
  - Teks tidak bisa dibaca oleh mesin pembaca layar (*screen reader*) bagi penyandang disabilitas tuna netra.
  - Saat dibuka di ponsel dengan layar kecil, tulisan pada gambar mengecil drastis (*unreadable*) dan pengguna terpaksa melakukan *pinch-to-zoom* yang merepotkan.

---

## IV. Matriks Perbandingan: pa-bandung.go.id vs Portal Panduan Interaktif Modern

| Parameter Evaluasi | Situs pa-bandung.go.id (Saat Ini) | Portal Panduan Interaktif Modern (Solusi Baru) |
| :--- | :--- | :--- |
| **Arsitektur Pengguna** | *Institution-centric* (Berpusat pada birokrasi kedinasan) | **User-centric** (Berpusat pada solusi praktis masyarakat) |
| **Pemandu Perkara** | Tidak ada. Pengguna membaca pasal/SOP mandiri | **Decision Tree Engine**: Bertahap, responsif, dan memberikan kesimpulan jalur hukum otomatis |
| **Pengecekan Berkas** | Teks statis | **Checklist Interaktif**: Tersimpan di LocalStorage, progress bar %, & siap cetak (*Print Ready*) |
| **Kalkulator Biaya** | Tautan luar (*tinyurl*) / dokumen gambar SK | **Kalkulator Terintegrasi**: Menggunakan SK Radius resmi PA Bandung (Radius 1-3 & Ghoib) secara transparan |
| **Alur Proses Sidang** | Tersebar di puluhan sub-halaman SOP teks | **Peta Visual 8 Tahap**: Garis waktu interaktif, indikator langkah, durasi, dan modal berkas sidang |
| **Dukungan Mobile** | Rumit (dropdown 4 level, poster gambar mengecil) | **100% Responsif**: Hamburger drawer sederhana, kartu lebar, tombol sentuh ergonomis |
| **Pencarian Informasi** | Search box umum WordPress | **Pusat FAQ Terstruktur**: Filter kategori + *live keyword filter* |

---

## V. Rekomendasi Solusi & Transformasi Digital

Untuk mengatasi kekurangan pada `pa-bandung.go.id`, berikut langkah transformasi yang disarankan:

1. **Memisahkan Fungsi Portal Berita dengan Portal Pelayanan Mandiri**:
   - Menjadikan situs utama sebagai pusat berita kedinasan dan keterbukaan informasi publik, sementara seluruh alur pelayanan perkara dialihkan ke sub-domain mandiri (misalnya: `panduan.pa-bandung.go.id` atau `portal.pa-bandung.go.id`).
2. **Menerapkan Sistem Panduan Interaktif Langkah demi Langkah**:
   - Mengadopsi konsep *Decision Tree* (satu layar, satu pertanyaan, satu keputusan) agar warga tidak salah menentukan gugatan atau permohonan.
3. **Mengintegrasikan Kalkulator Panjar Biaya Bawaan**:
   - Menyediakan kalkulator langsung di web yang memetakan 30 kecamatan Kota Bandung ke dalam Radius 1 (Rp 100.000), Radius 2 (Rp 125.000), dan Radius 3 (Rp 150.000) tanpa perlu melempar warga ke situs lain.
4. **Menyediakan Lembar Checklist Dokumen Siap Cetak**:
   - Memfasilitasi checklist interaktif dengan penjelasan legalisasi meterai kantor pos (*nazegelen*) dan tombol cetak resmi berlogo Pengadilan Agama.
5. **Menyederhanakan Antarmuka Beranda**:
   - Mengutamakan 3 tombol aksi utama di bagian atas: *Mulai Panduan Perkara*, *Lihat Syarat Dokumen*, dan *Hitung Estimasi Biaya*.
