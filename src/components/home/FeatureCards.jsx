import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckSquare, Calculator, GitFork, ArrowRight } from 'lucide-react';

export default function FeatureCards() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pelayanan Terpadu</span>
          <h2 className="section-title">Tiga Fitur Utama untuk Membantu Anda</h2>
          <p className="section-desc">
            Portal ini dirancang untuk menjawab pertanyaan masyarakat umum seputar alur perkara, dokumen yang wajib dibawa, serta perkiraan biaya yang transparan.
          </p>
        </div>

        <div className="feature-grid">
          {/* Card 1: Panduan Perkara Interaktif */}
          <div className="feature-card primary">
            <div className="feature-icon-wrapper">
              <Compass size={28} />
            </div>
            <h3>Panduan Perkara Interaktif</h3>
            <p>
              Jawab beberapa pertanyaan praktis tentang kondisi Anda untuk mengetahui jalur hukum yang tepat (Gugatan Cerai, Cerai Talak, Dispensasi Nikah, atau Waris).
            </p>
            <div className="feature-card-footer">
              <Link to="/panduan" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Mulai Panduan</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 2: Checklist Dokumen */}
          <div className="feature-card gold">
            <div className="feature-icon-wrapper">
              <CheckSquare size={28} />
            </div>
            <h3>Checklist Dokumen</h3>
            <p>
              Periksa dan centang berkas persyaratan yang wajib disiapkan sebelum datang ke loket PTSP. Data tersimpan otomatis dan dapat dicetak langsung.
            </p>
            <div className="feature-card-footer">
              <Link to="/checklist" className="btn btn-gold" style={{ width: '100%' }}>
                <span>Lihat Persyaratan</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 3: Kalkulator Panjar */}
          <div className="feature-card secondary">
            <div className="feature-icon-wrapper">
              <Calculator size={28} />
            </div>
            <h3>Kalkulator Panjar</h3>
            <p>
              Hitung estimasi panjar biaya perkara secara transparan berdasarkan jenis perkara dan kategori radius wilayah pemanggilan para pihak oleh jurusita.
            </p>
            <div className="feature-card-footer">
              <Link to="/kalkulator" className="btn btn-secondary" style={{ width: '100%', borderColor: '#334155', color: '#0F172A' }}>
                <span>Hitung Estimasi</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Highlight Banner: Peta Alur Visual */}
        <div style={{ marginTop: '2.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GitFork size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                Ingin melihat peta alur persidangan secara visual?
              </h4>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.9rem' }}>
                Pelajari 8 tahapan resmi perkara mulai dari pendaftaran, mediasi, persidangan, hingga pengambilan produk pengadilan (Akta Cerai / Putusan).
              </p>
            </div>
          </div>
          <Link to="/peta-alur" className="btn btn-outline-primary">
            <span>Buka Peta Alur 8 Tahap</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
