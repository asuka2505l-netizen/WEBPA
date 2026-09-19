import React, { useEffect, useState } from 'react';
import ChatWindow from '../components/chat/ChatWindow';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';
import {
  Sparkles,
  Bot,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  PhoneCall,
  Clock,
  ExternalLink,
  MapPin
} from 'lucide-react';

export default function AsistenAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <Sparkles size={14} />
            <span>Kecerdasan Buatan Pelayanan Publik</span>
          </div>
          <h1 className="page-header-title">Si-PANDU AI — Asisten Virtual Peradilan</h1>
          <p className="page-header-desc">
            Tanyakan segala hal seputar alur persidangan, kelengkapan berkas, tarif radius kecamatan/kelurahan di Kota Bandung, dan layanan Posbakum gratis 24 jam sehari.
          </p>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
          {/* Main Chat Column (Takes 2 fractions on desktop if available) */}
          <div style={{ flex: '1 1 60%' }}>
            <ChatWindow />
          </div>

          {/* Sidebar Column: Capabilities & Human Fallback */}
          <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* About AI Card */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#065F46', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.975rem', color: '#0F172A' }}>Tentang Si-PANDU AI</h4>
                  <span style={{ fontSize: '0.75rem', color: '#065F46', fontWeight: 600 }}>Sistem Panduan Mandiri Terpadu</span>
                </div>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#334155', lineHeight: 1.55, margin: 0 }}>
                Si-PANDU AI dilatih menggunakan basis data peraturan Mahkamah Agung RI, SOP Pengadilan Agama Bandung Kelas 1A, dan Surat Keputusan Zonasi Radius 30 Kecamatan &amp; 151 Kelurahan di Kota Bandung.
              </p>
            </div>

            {/* Human Assistance Card */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <PhoneCall size={18} style={{ color: '#059669' }} />
                <span>Konsultasi Petugas PTSP Asli</span>
              </h4>
              <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
                Jika Anda membutuhkan bantuan mendalam, perbaikan berkas rumit, atau kendala teknis persidangan, silakan hubungi petugas Meja Informasi:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <a
                  href="https://wa.me/6281320499227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ backgroundColor: '#059669', justifyContent: 'center' }}
                >
                  <MessageSquare size={14} />
                  <span>Chat WhatsApp PTSP (0813-2049-9227)</span>
                </a>
                <a
                  href="https://sipp.pa-bandung.go.id/list_jadwal_sidang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'center', color: '#0F172A' }}
                >
                  <ExternalLink size={14} />
                  <span>Lihat Jadwal Sidang Hari Ini (SIPP)</span>
                </a>
              </div>
            </div>

            {/* Office Location Antapani */}
            <div className="card" style={{ padding: '1.25rem', backgroundColor: '#F8FAFC' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.825rem', color: '#475569' }}>
                <MapPin size={16} style={{ color: '#065F46', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#0F172A' }}>Loket Meja 1 PTSP Antapani:</strong><br />
                  Jl. Terusan Jakarta No. 120, Antapani, Kota Bandung<br />
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    Senin - Kamis: 08.00 - 16.00 WIB | Jumat: 08.00 - 16.30 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* Privacy & Anti-Calo Notice */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748B', padding: '0.5rem' }}>
              <ShieldCheck size={16} style={{ color: '#059669', flexShrink: 0 }} />
              <span>
                <strong>Privasi Terjaga:</strong> Seluruh konsultasi bot dijalankan secara aman. Sistem tidak merekam NIK atau data identitas rahasia Anda.
              </span>
            </div>
          </div>
        </div>

        <DisclaimerBanner />
      </div>
    </div>
  );
}
