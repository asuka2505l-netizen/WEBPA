// Data Kategori Wilayah Radius dan Tarif Pemanggilan Jurusita Pengadilan Agama Bandung Kelas 1A
// Sesuai SK Ketua Pengadilan Agama Bandung & Surat Keputusan Bersama (SKB) tentang Panjar Biaya Perkara

export const RADIUS_ZONES = [
  {
    id: "radius_1",
    name: "Radius I (Zona Dekat Kantor PA)",
    distanceText: "Kecamatan sekitar Kantor Jl. Terusan Jakarta No. 120 Antapani",
    costPerCall: 100000,
    description: "Wilayah kecamatan yang berdekatan langsung dengan gedung kantor Pengadilan Agama Bandung.",
    sampleAreas: "Kec. Antapani, Arcamanik, Kiaracondong, Batununggal, Cibeunying Kidul, Mandalajati, Cinambo"
  },
  {
    id: "radius_2",
    name: "Radius II (Zona Tengah Kota Bandung)",
    distanceText: "Kecamatan wilayah pusat dan timur Kota Bandung",
    costPerCall: 125000,
    description: "Wilayah kecamatan di Kota Bandung dengan jarak tempuh menengah dari kantor pengadilan.",
    sampleAreas: "Kec. Bandung Wetan, Sumur Bandung, Lengkong, Regol, Cibeunying Kaler, Coblong, Buahbatu, Rancasari, Gedebage, Panyileukan, Ujungberung, Cibiru"
  },
  {
    id: "radius_3",
    name: "Radius III (Zona Barat & Utara Kota Bandung)",
    distanceText: "Kecamatan wilayah barat, barat daya, dan utara Kota Bandung",
    costPerCall: 150000,
    description: "Wilayah kecamatan Kota Bandung yang berada di perbatasan barat, selatan, dan utara.",
    sampleAreas: "Kec. Sukajadi, Sukasari, Cidadap, Cicendo, Andir, Astanaanyar, Bojongloa Kaler, Bojongloa Kidul, Babakan Ciparay, Bandung Kulon, Bandung Kidul"
  },
  {
    id: "radius_ghoib",
    name: "Panggilan Ghoib (Media Massa / Radio)",
    distanceText: "Tergugat/Termohon Tidak Diketahui Tempat Tinggalnya di RI",
    costPerCall: 150000,
    description: "Pemanggilan resmi melalui pengumuman siaran radio pemerintah / papan pengumuman ghoib Pengadilan Agama Bandung sebanyak 2 kali.",
    sampleAreas: "Diumumkan di radio resmi dan papan pengumuman website pa-bandung.go.id/panggilan-ghoib/"
  }
];

export function getRadiusById(id) {
  return RADIUS_ZONES.find((r) => r.id === id) || RADIUS_ZONES[0];
}
