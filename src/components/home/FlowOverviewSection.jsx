import React from 'react';
import { HelpCircle, GitMerge, FileCheck, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlowOverviewSection() {
  const steps = [
    {
      num: "01",
      title: "Pilih Keperluan Anda",
      desc: "Tentukan kategori perkara: Perceraian, Dispensasi Nikah, atau Masalah Waris.",
      icon: <HelpCircle size={22} />
    },
    {
      num: "02",
      title: "Jawab Pertanyaan Kondisi",
      desc: "Sistem cerdas memetakan jalur hukum yang sesuai (Gugatan Cerai vs Cerai Talak, dsb).",
      icon: <GitMerge size={22} />
    },
    {
      num: "03",
      title: "Cek Berkas Persyaratan",
      desc: "Lengkapi dan centang checklist dokumen yang wajib dibawa ke loket PTSP.",
      icon: <FileCheck size={22} />
    },
    {
      num: "04",
      title: "Estimasi Biaya & Siap Berperkara",
      desc: "Ketahui perkiraan biaya panjar dan tahapan sidang sebelum datang ke kantor pengadilan.",
      icon: <DollarSign size={22} />
    }
  ];

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '4.5rem 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Cara Kerja Portal</span>
          <h2 className="section-title">Bagaimana Portal Ini Membantu Anda?</h2>
          <p className="section-desc">
            Ikuti 4 langkah terarah dari rumah sebelum datang ke kantor Pengadilan Agama, menghemat waktu dan mencegah berkas ditolak karena tidak lengkap.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '2rem 1.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: 'var(--shadow-xs)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {step.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#CBD5E1' }}>
                  {step.num}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/panduan" className="btn btn-primary btn-lg">
            <span>Mulai Langkah Pertama Sekarang</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
