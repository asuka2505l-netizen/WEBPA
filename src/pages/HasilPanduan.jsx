import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import { PERKARA_LIST } from '../data/perkaraData';
import PrintHeader from '../components/common/PrintHeader';
import CourtCalendarTimeline from '../components/flow/CourtCalendarTimeline';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';
import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  CheckSquare,
  Calculator,
  GitFork,
  Sparkles,
  Printer,
  MessageSquare,
  Calendar
} from 'lucide-react';

export default function HasilPanduan() {
  const { activeCaseType, answers, restartWizard, setCalcCase } = usePortal();
  const navigate = useNavigate();

  const caseInfo =
    PERKARA_LIST.find((c) => c.id === activeCaseType) || PERKARA_LIST[0];

  // Evaluate preparation status based on answers
  const isBukuNikahMissing = answers.perceraian_buku_nikah === "buku_hilang";
  const isAlamatGhoib = answers.perceraian_alamat === "alamat_ghoib";
  const isSaksiBelum = answers.perceraian_saksi === "saksi_belum";
  const isSuratKuaBelum = answers.dispensasi_surat_kua === "kua_belum";
  const isAktaKematianBelum = answers.waris_surat_kematian === "akta_kematian_belum";

  const hasMissingPrerequisites =
    isBukuNikahMissing ||
    isAlamatGhoib ||
    isSaksiBelum ||
    isSuratKuaBelum ||
    isAktaKematianBelum;

  const handleRestart = () => {
    restartWizard();
    navigate('/panduan');
  };

  const handleGoToCalculator = () => {
    setCalcCase(caseInfo.id);
    navigate('/kalkulator');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    let text = `*RINGKASAN PANDUAN PERKARA PENGADILAN AGAMA BANDUNG KELAS 1A*\n`;
    text += `==========================================\n`;
    text += `📌 *Jenis Perkara:* ${caseInfo.name}\n`;
    text += `📄 *Kategori:* ${caseInfo.type}\n`;
    text += `⏱️ *Estimasi Waktu:* ${caseInfo.estimatedDuration}\n\n`;
    text += `📋 *Status Persiapan Dokumen:*\n`;
    if (isBukuNikahMissing) {
      text += `- ⚠️ Buku nikah belum ada: Wajib urus Duplikat Akta Nikah di KUA.\n`;
    }
    if (isAlamatGhoib) {
      text += `- ⚠️ Pasangan ghoib: Perlu Surat Keterangan Ghoib dari Kelurahan setempat di Kota Bandung.\n`;
    }
    if (isSaksiBelum) {
      text += `- ⚠️ Saksi belum siap: Wajib menyiapkan 2 orang saksi keluarga dekat.\n`;
    }
    if (!hasMissingPrerequisites) {
      text += `- ✅ Dokumen utama siap diperiksa di meja PTSP.\n`;
    }
    text += `\n📍 *Lokasi PTSP Pengadilan Agama Bandung:*
Jl. Terusan Jakarta No. 120, Antapani, Kota Bandung (40291)
📞 WhatsApp PTSP: 0813-2049-9227
🌐 Jadwal Sidang: https://sipp.pa-bandung.go.id`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="page-wrapper">
      {/* Printable Official Header (Visible on print only) */}
      <PrintHeader
        title="LEMBAR HASIL EVALUASI PANDUAN PERKARA MANDIRI"
        subtitle={`Pengadilan Agama Bandung Kelas 1A • Perkara: ${caseInfo.name}`}
      />

      {/* Page Header (Hidden on print) */}
      <div className="page-header no-print">
        <div className="page-header-content">
          <div className="page-header-badge">
            <Sparkles size={14} />
            <span>Hasil Evaluasi Panduan Mandiri</span>
          </div>
          <h1 className="page-header-title">Ringkasan Panduan Perkara Anda</h1>
          <p className="page-header-desc">
            Berdasarkan serangkaian jawaban yang Anda pilih, berikut rekomendasi klasifikasi perkara, catatan persiapan berkas, dan langkah-langkah selanjutnya yang disarankan.
          </p>
        </div>
      </div>

      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* Main Result Card */}
          <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            {/* Classification Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E2E8F0' }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
                  {caseInfo.type}
                </span>
                <h2 style={{ fontSize: '1.65rem', color: '#0F172A', margin: '0 0 0.5rem 0' }}>
                  {caseInfo.name}
                </h2>
                <p style={{ margin: 0, color: '#64748B', fontSize: '0.95rem' }}>
                  {caseInfo.description}
                </p>
              </div>

              {/* Action Buttons: WhatsApp & Print */}
              <div className="no-print" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="btn btn-sm"
                  style={{ backgroundColor: '#059669', color: '#FFFFFF', border: 'none' }}
                  title="Simpan atau teruskan ringkasan ke WhatsApp Anda"
                >
                  <MessageSquare size={15} />
                  <span>Kirim ke WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#0F172A', borderColor: '#CBD5E1' }}
                  title="Cetak atau simpan sebagai PDF"
                >
                  <Printer size={15} />
                  <span>Cetak / Simpan PDF</span>
                </button>
              </div>
            </div>

            {/* Preparation Notes / Warnings */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '1rem' }}>
                Catatan Evaluasi Berkas Anda:
              </h3>

              {hasMissingPrerequisites ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {isBukuNikahMissing && (
                    <div className="alert-box alert-warning">
                      <AlertTriangle size={20} style={{ color: '#D97706', flexShrink: 0 }} />
                      <div>
                        <strong>Buku Nikah Asli Tidak Ada / Hilang:</strong>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                          Sebelum mendaftarkan perkara ke Pengadilan Agama Bandung, Anda wajib mengurus <strong>Duplikat Kutipan Akta Nikah</strong> terlebih dahulu di KUA tempat pernikahan Anda dicatatkan dengan membawa surat keterangan hilang dari Kepolisian.
                        </p>
                      </div>
                    </div>
                  )}

                  {isAlamatGhoib && (
                    <div className="alert-box alert-warning">
                      <AlertTriangle size={20} style={{ color: '#D97706', flexShrink: 0 }} />
                      <div>
                        <strong>Alamat Pasangan Tidak Diketahui (Ghoib):</strong>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                          Perkara Anda dikategorikan sebagai <em>Cerai Ghoib</em>. Anda wajib melampirkan <strong>Surat Keterangan Ghoib</strong> dari kantor Kelurahan tempat tinggal Anda di Kota Bandung yang menyatakan bahwa pasangan telah pergi dan tidak diketahui lagi alamatnya. Pemanggilan sidang akan dilakukan melalui siaran radio atau papan pengumuman resmi PA Bandung.
                        </p>
                      </div>
                    </div>
                  )}

                  {isSaksiBelum && (
                    <div className="alert-box alert-warning">
                      <AlertTriangle size={20} style={{ color: '#D97706', flexShrink: 0 }} />
                      <div>
                        <strong>Kesiapan Saksi Sidang:</strong>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                          Dalam hukum acara peradilan agama, keterangan minimal <strong>2 (dua) orang saksi</strong> dari pihak keluarga atau orang terdekat yang sudah dewasa (bukan anak di bawah umur) mutlak diperlukan pada tahap pembuktian.
                        </p>
                      </div>
                    </div>
                  )}

                  {isSuratKuaBelum && (
                    <div className="alert-box alert-warning">
                      <AlertTriangle size={20} style={{ color: '#D97706', flexShrink: 0 }} />
                      <div>
                        <strong>Surat Penolakan Nikah dari KUA (Model N5/N6):</strong>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                          Surat penolakan pendaftaran nikah dari Kepala KUA merupakan syarat mutlak dasar permohonan Dispensasi Kawin sesuai PERMA No. 5 Tahun 2019.
                        </p>
                      </div>
                    </div>
                  )}

                  {isAktaKematianBelum && (
                    <div className="alert-box alert-warning">
                      <AlertTriangle size={20} style={{ color: '#D97706', flexShrink: 0 }} />
                      <div>
                        <strong>Akta Kematian Pewaris:</strong>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                          Surat Keterangan / Akta Kematian dari Disdukcapil atau Kelurahan setempat adalah bukti utama terbukanya hak waris.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="alert-box alert-success">
                  <CheckCircle2 size={20} style={{ color: '#059669', flexShrink: 0 }} />
                  <div>
                    <strong>Dokumen Utama Terlihat Lengkap:</strong>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                      Berdasarkan jawaban Anda, tidak terdapat kendala prasyarat dokumen kritis. Anda dapat melanjutkan ke pengecekan checklist detail dan perhitungan panjar biaya.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Next Steps Checklist Box */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '1rem' }}>
                Langkah-Langkah yang Perlu Anda Lakukan:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065F46', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                      Periksa dan Centang Persyaratan Dokumen
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>
                      Buka halaman checklist untuk memeriksa berkas asli, jumlah fotokopi, dan cap leges pos (nazegelen). Anda juga dapat mencetaknya langsung.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065F46', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                      Hitung Estimasi Panjar Biaya Perkara
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>
                      Gunakan fitur kalkulator dengan mengetik kelurahan tempat tinggal Anda di Kota Bandung (Radius I, II, atau III).
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065F46', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                      Pelajari 8 Tahapan Alur Persidangan
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>
                      Pahami proses mulai dari pendaftaran, mediasi wajib, agenda pembuktian saksi, hingga penerbitan produk pengadilan (Akta Cerai / Putusan).
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065F46', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                    4
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                      Kunjungi Loket Meja 1 PTSP Pengadilan Agama Bandung
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>
                      Bawa seluruh berkas lengkap ke loket Meja 1 PTSP Jl. Terusan Jakarta No. 120 Antapani (Senin - Jumat 08.00 - 15.30 WIB).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Hearing Calendar Preview */}
            <div style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
              <CourtCalendarTimeline caseTitle={caseInfo.name} />
            </div>

            {/* Quick Action Buttons (Hidden on Print) */}
            <div className="no-print" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0' }}>
              <Link to="/checklist" className="btn btn-primary">
                <CheckSquare size={16} />
                <span>Lihat Checklist Dokumen</span>
              </Link>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleGoToCalculator}
                style={{ color: '#0F172A', borderColor: '#CBD5E1' }}
              >
                <Calculator size={16} />
                <span>Hitung Estimasi Panjar</span>
              </button>
              <Link to="/peta-alur" className="btn btn-secondary" style={{ color: '#0F172A', borderColor: '#CBD5E1' }}>
                <GitFork size={16} />
                <span>Lihat Peta Alur Visual</span>
              </Link>
            </div>

            {/* Restart Button (Hidden on Print) */}
            <div className="no-print" style={{ marginTop: '1.75rem', textAlign: 'center' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleRestart}
                style={{ color: '#64748B' }}
              >
                <RotateCcw size={14} />
                <span>Mulai Ulang Panduan Dari Awal</span>
              </button>
            </div>
          </div>

          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
