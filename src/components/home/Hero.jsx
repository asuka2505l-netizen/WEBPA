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
    <section 
      className="hero-section" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        minHeight: '100vh', 
        padding: '4rem 0',
        display: 'flex',
        alignItems: 'center', /* Memastikan konten berada pas di tengah layar secara vertikal */
        backgroundColor: '#F8FAFC' 
      }}
    >
      
      {/* 1. LAYER VIDEO BACKGROUND (Z-Index: 0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0 
        }}
      >
        <source src="/sample.mp4" type="video/mp4" />
      </video>

      {/* 2. LAYER OVERLAY TRANSPARAN DENGAN EFEK BLUR (Z-Index: 1) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.88)', /* Putih transparan 88% agar tulisan sangat jelas */
          backdropFilter: 'blur(6px)', /* Efek modern: mem-blur video di belakangnya sedikit */
          zIndex: 1
        }}
      />

      {/* 3. KONTEN UTAMA HERO (Z-Index: 2) */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 2rem', maxWidth: '1440px', margin: '0 auto' }}>
        
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
            fontSize: '0.85rem',
            color: '#991B1B',
            marginBottom: '2.5rem',
            maxWidth: 'fit-content' /* Agar kotaknya tidak terlalu melebar */
          }}
          role="alert"
        >
          <AlertOctagon size={18} style={{ color: '#DC2626', flexShrink: 0 }} />
          <div>
            <strong>WASPADA CALO:</strong> Pengurusan perkara di Pengadilan Agama Bandung <strong>TIDAK</strong> dipungut biaya di luar ketentuan resmi PTSP.
          </div>
        </div>

        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Kolom Kiri: Headline & Action */}
          <div className="hero-content">
            <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#F1F5F9', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '1.5rem' }}>
              <ShieldCheck size={16} style={{ color: '#059669' }} />
              <span>PA Bandung Kelas 1A • Wilayah Bebas Korupsi</span>
            </div>

            {/* Bagian Judul: Solid, Kontras Tinggi, Tanpa Gradasi */}
            <h1 className="hero-title" style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.2, color: '#0F172A', marginBottom: '1.25rem', fontFamily: 'system-ui, sans-serif' }}>
              Panduan Perkara Pengadilan Agama, <br />
              <span style={{ color: '#065F46' }}> {/* Menggunakan Hijau Botol Solid agar sangat jelas terbaca */}
                Lebih Mudah Dipahami
              </span>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#475569', marginBottom: '2.5rem', maxWidth: '90%' }}>
              Portal panduan interaktif resmi bagi warga Kota Bandung untuk memahami alur perkara perceraian, dispensasi kawin, kewarisan, persyaratan berkas, dan estimasi panjar biaya berdasarkan zonasi radius kecamatan.
            </p>

            <div className="hero-actions" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link to="/panduan" className="btn btn-primary btn-lg" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', backgroundColor: '#059669', color: 'white', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                <Compass size={20} />
                <span>Mulai Panduan Interaktif</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/asisten-ai" className="btn btn-secondary btn-lg" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', backgroundColor: '#ECFDF5', border: '1px solid #34D399', color: '#065F46', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
                <Bot size={20} style={{ color: '#059669' }} />
                <span>Tanya Si-PANDU AI</span>
              </Link>
            </div>

            {/* Direct Official Fast Links from PA Bandung */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <a href="https://sipp.pa-bandung.go.id/list_jadwal_sidang" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 0.8rem', backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '6px', textDecoration: 'none', color: '#334155', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <span>Jadwal Sidang SIPP</span>
                <ExternalLink size={12} style={{ color: '#94A3B8' }} />
              </a>
              <a href="https://ecourt.mahkamahagung.go.id/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 0.8rem', backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '6px', textDecoration: 'none', color: '#334155', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <Laptop size={14} style={{ color: '#64748B' }} />
                <span>Pendaftaran e-Court</span>
              </a>
              <a href="https://gugatanmandiri.badilag.net/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 0.8rem', backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '6px', textDecoration: 'none', color: '#334155', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <FileCheck2 size={14} style={{ color: '#64748B' }} />
                <span>Gugatan Mandiri</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-badges" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                <span>Bebas Pungli (WBK)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                <span>Posbakum Gratis</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Interactive Card Preview */}
          <div className="hero-card-visual" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '2rem', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', border: '1px solid #F1F5F9' }}>
            <div className="hero-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700 }}>Sistem Pemandu Warga</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.75rem', color: '#0F172A', fontWeight: 700 }}>Alur Panduan Cerdas</h3>
              </div>
              <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, backgroundColor: '#F1F5F9', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Tahap 1 dari 5</span>
            </div>

            {/* Simulated interactive steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px' }}>
                <div style={{ color: '#059669', marginTop: '0.1rem' }}><Compass size={20} /></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#065F46', fontWeight: 700 }}>1. Tentukan Keperluan Anda</h4>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#047857' }}>Gugatan Cerai (Istri), Cerai Talak (Suami), Dispensasi Nikah, atau Waris.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', border: '1px solid #E2E8F0', borderRadius: '8px', opacity: 0.7 }}>
                <div style={{ color: '#94A3B8', marginTop: '0.1rem' }}><CheckCircle2 size={20} /></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#334155', fontWeight: 600 }}>2. Jawab Kondisi Nyata</h4>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748B' }}>Ketersediaan buku nikah asli & alamat.</p>
                </div>
              </div>

            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Waktu pengerjaan: <strong>~2 menit</strong>
              </span>
              <Link to="/panduan" style={{ fontSize: '0.9rem', color: '#0F172A', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                Mulai sekarang <ArrowRight size={16} style={{ color: '#059669' }} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}