import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  GitFork,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  ExternalLink,
  AlertOctagon,
  FileCheck2,
  Laptop,
  Bot,
  Sparkles
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Anti-Calo Official Announcement Ticker */}
        <div
          style={{
            backgroundColor: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '10px',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: '0.825rem',
            color: '#991B1B',
            marginBottom: '2rem'
          }}
          role="alert"
        >
          <AlertOctagon size={18} style={{ color: '#DC2626', flexShrink: 0 }} />
          <div>
            <strong>WASPADA CALO:</strong> Pengurusan perkara di Pengadilan Agama Bandung <strong>TIDAK</strong> dipungut biaya di luar ketentuan resmi PTSP. Laporkan segala bentuk pungli atau penipuan melalui layanan <strong>SIWAS Mahkamah Agung RI</strong>.
          </div>
        </div>

        <div className="hero-grid">
          {/* Left Column: Headline & Action */}
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} />
              <span>Pengadilan Agama Bandung Kelas 1A • Wilayah Bebas Korupsi</span>
            </div>

            <h1 className="hero-title">
              Panduan Perkara Pengadilan Agama, <span>Lebih Mudah Dipahami</span>
            </h1>

            <p className="hero-subtitle">
              Portal panduan interaktif resmi bagi warga Kota Bandung untuk memahami alur perkara perceraian, dispensasi kawin, kewarisan, persyaratan berkas, dan estimasi panjar biaya berdasarkan zonasi radius kecamatan.
            </p>

            <div className="hero-actions">
              <Link to="/panduan" className="btn btn-primary btn-lg">
                <Compass size={20} />
                <span>Mulai Panduan Interaktif</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/asisten-ai" className="btn btn-secondary btn-lg" style={{ borderColor: '#34D399', color: '#065F46', fontWeight: 700 }}>
                <Bot size={20} style={{ color: '#059669' }} />
                <span>Tanya Si-PANDU AI</span>
              </Link>
              <Link to="/kalkulator" className="btn btn-secondary btn-lg">
                <Calculator size={20} />
                <span>Kalkulator Radius Biaya</span>
              </Link>
            </div>

            {/* Direct Official Fast Links from PA Bandung */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <a
                href="https://sipp.pa-bandung.go.id/list_jadwal_sidang"
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-slate"
                style={{ padding: '0.45rem 0.75rem', textDecoration: 'none', color: '#1E293B', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>Jadwal Sidang SIPP</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://ecourt.mahkamahagung.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-slate"
                style={{ padding: '0.45rem 0.75rem', textDecoration: 'none', color: '#1E293B', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <Laptop size={12} />
                <span>Pendaftaran e-Court</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://gugatanmandiri.badilag.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-slate"
                style={{ padding: '0.45rem 0.75rem', textDecoration: 'none', color: '#1E293B', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <FileCheck2 size={12} />
                <span>Gugatan Mandiri Badilag</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://forms.gle/DtLKsY1AJLieG2RL6"
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-slate"
                style={{ padding: '0.45rem 0.75rem', textDecoration: 'none', color: '#1E293B', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>Pengambilan Akta Cerai Online</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-badges">
              <div className="trust-item">
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
                <span>Bebas Pungli (Zona Integritas WBK)</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
                <span>Transparansi Sisa Panjar Biaya</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
                <span>Posbakum Gratis di Loket Antapani</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Preview */}
          <div className="hero-card-visual">
            <div className="hero-card-header">
              <div>
                <span className="badge badge-primary">Sistem Pemandu Warga</span>
                <h3 style={{ fontSize: '1.1rem', marginTop: '0.35rem', color: '#0F172A' }}>
                  Alur Panduan Cerdas
                </h3>
              </div>
              <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                Tahap 1 dari 5
              </span>
            </div>

            {/* Simulated interactive steps */}
            <div className="hero-flow-step active">
              <div className="step-icon-wrap">
                <Compass size={18} />
              </div>
              <div className="step-content">
                <h4>1. Tentukan Keperluan Anda</h4>
                <p>Gugatan Cerai (Istri), Cerai Talak (Suami), Dispensasi Nikah, atau Waris.</p>
              </div>
            </div>

            <div className="hero-flow-step">
              <div className="step-icon-wrap">
                <CheckCircle2 size={18} />
              </div>
              <div className="step-content">
                <h4>2. Jawab Kondisi Nyata</h4>
                <p>Ketersediaan buku nikah asli, alamat di 30 kecamatan Kota Bandung, &amp; saksi.</p>
              </div>
            </div>

            <div className="hero-flow-step">
              <div className="step-icon-wrap">
                <Calculator size={18} />
              </div>
              <div className="step-content">
                <h4>3. Dapatkan Checklist &amp; Estimasi Biaya</h4>
                <p>Cek berkas wajib, hitung panjar Radius 1, 2, atau 3, &amp; siap datang ke PTSP.</p>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Waktu pengerjaan: <strong>~2 menit</strong>
              </span>
              <Link to="/panduan" style={{ fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Mulai sekarang <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
