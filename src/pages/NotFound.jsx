import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '540px' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#ECFDF5', color: '#065F46', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Compass size={36} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.35rem', color: '#334155', marginBottom: '1rem' }}>
          Halaman Tidak Ditemukan
        </h2>
        <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '2rem' }}>
          Halaman yang Anda tuju tidak tersedia atau tautan telah dipindahkan. Silakan kembali ke beranda atau gunakan fitur panduan perkara interaktif.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-secondary">
            <Home size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link to="/panduan" className="btn btn-primary">
            <Compass size={16} />
            <span>Mulai Panduan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
