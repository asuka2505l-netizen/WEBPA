import React from 'react';
import { AlertCircle, Scale } from 'lucide-react';
import Marquee from "react-fast-marquee";
export default function DisclaimerBanner({ type = "general", customText = null }) {
  if (type === "calculator") {
    return (
      <div className="disclaimer-box" role="alert">
        <Scale size={22} style={{ flexShrink: 0, marginTop: '2px', color: '#B45309' }} />
        <div>
          <strong>Pemberitahuan Estimasi Biaya (Bukan Penetapan Resmi):</strong>
          <p style={{ margin: 0 }}>
            {customText ||
              "Hasil perhitungan ini merupakan estimasi panjar sementara berdasarkan kategori radius dan komponen biaya yang berlaku saat ini. Jumlah panjar final ditetapkan oleh Petugas Meja 1 PTSP Pengadilan Agama melalui Surat Kuasa Untuk Membayar (SKUM). Kelebihan atau sisa panjar biaya perkara yang tidak terpakai akan dikembalikan kepada pihak berperkara."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="disclaimer-box" role="alert">
      <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px', color: '#B45309' }} />
      <div>
        <strong>Disclaimer Panduan Resmi:</strong>
        <p style={{ margin: 0 }}>
          {customText ||
            "Informasi dalam portal ini bersifat panduan umum untuk memudahkan pemahaman masyarakat. Setiap perkara memiliki kondisi hukum dan latar belakang yang berbeda. Prosedur akhir, kelengkapan berkas, dan penetapan biaya resmi sepenuhnya mengikuti peraturan perundang-undangan serta verifikasi resmi petugas Pengadilan Agama."}
        </p>
      </div>
    </div>
  );
}
