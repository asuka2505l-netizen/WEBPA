// Data Lengkap 30 Kecamatan & 151 Kelurahan di Kota Bandung
// Dipetakan berdasarkan Surat Keputusan (SK) Zonasi Radius Pengadilan Agama Bandung Kelas 1A (Kantor Jl. Terusan Jakarta No. 120 Antapani)

export const BANDUNG_REGIONS = [
  // =========================================================================
  // RADIUS 1 (Zona Dekat Kantor Antapani - Tarif Rp 100.000 / panggilan)
  // =========================================================================
  {
    kecamatan: "Antapani",
    radiusId: "radius_1",
    kelurahan: ["Antapani Kidul", "Antapani Kulon", "Antapani Tengah", "Antapani Wetan"]
  },
  {
    kecamatan: "Arcamanik",
    radiusId: "radius_1",
    kelurahan: ["Cisaranten Bina Harapan", "Cisaranten Endah", "Cisaranten Kulon", "Sukamiskin"]
  },
  {
    kecamatan: "Kiaracondong",
    radiusId: "radius_1",
    kelurahan: ["Babakan Surabaya", "Babakansari", "Cicaheum", "Kebon Kangkung", "Kebonjayanti", "Sukapura"]
  },
  {
    kecamatan: "Batununggal",
    radiusId: "radius_1",
    kelurahan: ["Binong", "Cibangkong", "Gumuruh", "Kacapiring", "Kebon Gedang", "Kebon Pisang", "Maleer", "Samoja"]
  },
  {
    kecamatan: "Cibeunying Kidul",
    radiusId: "radius_1",
    kelurahan: ["Cicadas", "Cikutra", "Padasuka", "Pasirlayung", "Sukamaju"]
  },
  {
    kecamatan: "Mandalajati",
    radiusId: "radius_1",
    kelurahan: ["Jatihandap", "Karangpamulang", "Pasir Impun", "Sindangjaya"]
  },
  {
    kecamatan: "Cinambo",
    radiusId: "radius_1",
    kelurahan: ["Babakan Penghulu", "Cisaranten Wetan", "Pakemitan", "Sukamulya"]
  },

  // =========================================================================
  // RADIUS 2 (Zona Tengah & Timur Kota Bandung - Tarif Rp 125.000 / panggilan)
  // =========================================================================
  {
    kecamatan: "Bandung Wetan",
    radiusId: "radius_2",
    kelurahan: ["Cihapit", "Citarum", "Tamansari"]
  },
  {
    kecamatan: "Sumur Bandung",
    radiusId: "radius_2",
    kelurahan: ["Babakan Ciamis", "Braga", "Kebon Pisang", "Merdeka"]
  },
  {
    kecamatan: "Lengkong",
    radiusId: "radius_2",
    kelurahan: ["Burangrang", "Cijagra", "Cikawao", "Lingkar Selatan", "Malabar", "Paledang", "Turangga"]
  },
  {
    kecamatan: "Regol",
    radiusId: "radius_2",
    kelurahan: ["Ancol", "Balonggede", "Ciateul", "Ciseureuh", "Pasirluyu", "Pungkur"]
  },
  {
    kecamatan: "Cibeunying Kaler",
    radiusId: "radius_2",
    kelurahan: ["Cigadung", "Cihaurgeulis", "Neglasari", "Sukaluyu"]
  },
  {
    kecamatan: "Coblong",
    radiusId: "radius_2",
    kelurahan: ["Cipaganti", "Dago", "Lebak Siliwangi", "Lebakgede", "Sadang Serang", "Sekeloa"]
  },
  {
    kecamatan: "Buahbatu",
    radiusId: "radius_2",
    kelurahan: ["Cijaura", "Jatisari", "Margasari", "Sekejati"]
  },
  {
    kecamatan: "Rancasari",
    radiusId: "radius_2",
    kelurahan: ["Cipamokolan", "Darwati", "Manjahlega", "Mekarmulya"]
  },
  {
    kecamatan: "Gedebage",
    radiusId: "radius_2",
    kelurahan: ["Cimincrang", "Cisaranten Rancasumur", "Rancabolang", "Rancanumpang"]
  },
  {
    kecamatan: "Panyileukan",
    radiusId: "radius_2",
    kelurahan: ["Cipadung Kidul", "Cipadung Kulon", "Cipadung Wetan", "Mekar Mulya"]
  },
  {
    kecamatan: "Ujungberung",
    radiusId: "radius_2",
    kelurahan: ["Cigending", "Pasanggrahan", "Pasir Endah", "Pasirjati", "Pasirwangi"]
  },
  {
    kecamatan: "Cibiru",
    radiusId: "radius_2",
    kelurahan: ["Cipadung", "Cisurupan", "Palasari", "Pasirbiru"]
  },

  // =========================================================================
  // RADIUS 3 (Zona Barat, Selatan & Utara Kota Bandung - Tarif Rp 150.000 / panggilan)
  // =========================================================================
  {
    kecamatan: "Sukajadi",
    radiusId: "radius_3",
    kelurahan: ["Cipedes", "Pasteur", "Sukabungah", "Sukagalih", "Sukawarna"]
  },
  {
    kecamatan: "Sukasari",
    radiusId: "radius_3",
    kelurahan: ["Gegerkalong", "Isola", "Sarijadi", "Sukarasa"]
  },
  {
    kecamatan: "Cidadap",
    radiusId: "radius_3",
    kelurahan: ["Ciumbuleuit", "Hegarmanah", "Ledeng"]
  },
  {
    kecamatan: "Cicendo",
    radiusId: "radius_3",
    kelurahan: ["Arjuna", "Husen Sastranegara", "Pajajaran", "Pamoyanan", "Pasirkaliki", "Sukaraja"]
  },
  {
    kecamatan: "Andir",
    radiusId: "radius_3",
    kelurahan: ["Campaka", "Ciroyom", "Dunguscariang", "Garuda", "Kebon Jeruk", "Maleber"]
  },
  {
    kecamatan: "Astanaanyar",
    radiusId: "radius_3",
    kelurahan: ["Cibadak", "Karanganyar", "Karasak", "Nyengseret", "Panjunan", "Pelindung Hewan"]
  },
  {
    kecamatan: "Bojongloa Kaler",
    radiusId: "radius_3",
    kelurahan: ["Babakan Asih", "Babakan Tarogong", "Jamika", "Kopo", "Suka Asih"]
  },
  {
    kecamatan: "Bojongloa Kidul",
    radiusId: "radius_3",
    kelurahan: ["Cibaduyut", "Cibaduyut Kidul", "Cibaduyut Wetan", "Kebon Lega", "Mekarwangi", "Situsaeur"]
  },
  {
    kecamatan: "Babakan Ciparay",
    radiusId: "radius_3",
    kelurahan: ["Babakan", "Babakan Ciparay", "Cirangrang", "Margahayu Utara", "Margasuka", "Sukahaji"]
  },
  {
    kecamatan: "Bandung Kulon",
    radiusId: "radius_3",
    kelurahan: ["Caringin", "Cibuntu", "Cigondewah Kaler", "Cigondewah Kidul", "Cigondewah Rahayu", "Cijerah", "Gempolsari", "Warung Muncang"]
  },
  {
    kecamatan: "Bandung Kidul",
    radiusId: "radius_3",
    kelurahan: ["Batununggal", "Kujangsari", "Mengger", "Wates"]
  }
];

// Flat searchable list: each entry represents a Kelurahan with its parent Kecamatan & Radius
export const SEARCHABLE_LOCATIONS = [];
BANDUNG_REGIONS.forEach((reg) => {
  // Add kecamatan itself
  SEARCHABLE_LOCATIONS.push({
    type: "Kecamatan",
    name: `Kecamatan ${reg.kecamatan}`,
    kecamatan: reg.kecamatan,
    kelurahan: null,
    radiusId: reg.radiusId,
    label: `Kecamatan ${reg.kecamatan}`
  });

  // Add each kelurahan
  reg.kelurahan.forEach((kel) => {
    SEARCHABLE_LOCATIONS.push({
      type: "Kelurahan",
      name: `Kelurahan ${kel}`,
      kecamatan: reg.kecamatan,
      kelurahan: kel,
      radiusId: reg.radiusId,
      label: `Kelurahan ${kel}, Kec. ${reg.kecamatan}`
    });
  });
});

export function findLocations(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return SEARCHABLE_LOCATIONS.filter((loc) =>
    loc.label.toLowerCase().includes(q)
  ).slice(0, 8); // max 8 suggestions
}
