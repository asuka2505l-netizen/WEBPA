import React from 'react';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building,
  Navigation,
  ExternalLink,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function Kontak() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <MapPin size={14} />
            <span>Informasi &amp; Loket PTSP</span>
          </div>
          <h1 className="page-header-title">Kontak &amp; Lokasi Pengadilan Agama Bandung</h1>
          <p className="page-header-desc">
            Hubungi kanal resmi Pelayanan Terpadu Satu Pintu (PTSP) Pengadilan Agama Bandung Kelas 1A atau kunjungi langsung kantor kami di Antapani, Kota Bandung.
          </p>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Left Column: Contact Cards */}
          <div>
            <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '1.25rem' }}>
              Saluran Pelayanan Publik
            </h3>

            {/* Address */}
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>
                  Gedung Pengadilan Agama Bandung Kelas 1A
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Jl. Terusan Jakarta No. 120, Kelurahan Antapani Tengah, Kecamatan Antapani, Kota Bandung, Jawa Barat 40291
                </p>
              </div>
            </div>

            {/* Phone & Hotline */}
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>
                  Telepon Kantor &amp; Call Center
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                  Telepon: <strong>(022) 7202357</strong><br />
                  Faksimile: (022) 7202357
                </p>
              </div>
            </div>

            {/* WhatsApp PTSP Online */}
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '4px solid #10B981' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageSquare size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>
                  WhatsApp Pelayanan PTSP Online
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '0.75rem' }}>
                  Layanan pesan langsung untuk konsultasi syarat, informasi sisa panjar, dan status akta cerai:
                </p>
                <a
                  href="https://wa.me/6281320499227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ backgroundColor: '#059669' }}
                >
                  <MessageSquare size={14} />
                  <span>Chat WhatsApp (+62 813-2049-9227)</span>
                </a>
              </div>
            </div>

            {/* Email & Pengawasan */}
            <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.25rem' }}>
                  Surat Elektronik &amp; Layanan Pengaduan
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
                  Email Resmi: <strong>info@pa-bandung.go.id</strong><br />
                  Pengaduan Perilaku (SIWAS MA-RI): <strong>siwas.mahkamahagung.go.id</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Office Hours & Location Map */}
          <div>
            <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '1.25rem' }}>
              Jam Pelayanan Loket PTSP
            </h3>

            {/* Working Hours Card */}
            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Clock size={22} style={{ color: '#065F46' }} />
                <h4 style={{ fontSize: '1.1rem', margin: 0, color: '#0F172A' }}>
                  Jadwal Operasional Loket Antapani
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px dashed #E2E8F0' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>Senin s.d. Kamis:</span>
                  <span style={{ color: '#065F46', fontWeight: 700 }}>08.00 - 16.00 WIB</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px dashed #E2E8F0' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>Jumat:</span>
                  <span style={{ color: '#065F46', fontWeight: 700 }}>08.00 - 16.30 WIB</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px dashed #E2E8F0' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>Istirahat (Senin - Kamis):</span>
                  <span style={{ color: '#64748B' }}>12.00 - 13.00 WIB</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>Istirahat (Jumat):</span>
                  <span style={{ color: '#64748B' }}>11.30 - 13.00 WIB</span>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', padding: '0.75rem', backgroundColor: '#FFFBEB', borderRadius: '8px', border: '1px solid #FDE68A', fontSize: '0.8rem', color: '#92400E' }}>
                *Pendaftaran perkara baru dan penyerahan produk pengadilan (Akta Cerai) dilayani hingga pukul 15.00 WIB setiap hari kerja.
              </div>
            </div>

            {/* Map Visual / Location Guide */}
            <div className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Navigation size={18} style={{ color: '#065F46' }} />
                  <span>Peta Lokasi Kantor Antapani</span>
                </h4>
                <a
                  href="https://maps.google.com/?q=Pengadilan+Agama+Bandung+Jl+Terusan+Jakarta+No+120"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.825rem', fontWeight: 700, color: '#065F46', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  Buka Google Maps <ExternalLink size={12} />
                </a>
              </div>

              {/* Map visual card mockup */}
              <div
                style={{
                  height: '180px',
                  backgroundColor: '#ECFDF5',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#065F46',
                  border: '1px solid #A7F3D0',
                  textAlign: 'center',
                  padding: '1rem'
                }}
              >
                <MapPin size={36} style={{ color: '#DC2626', marginBottom: '0.5rem' }} />
                <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>Gedung Pengadilan Agama Bandung Kelas 1A</strong>
                <span style={{ fontSize: '0.8rem', color: '#475569' }}>
                  Jl. Terusan Jakarta No. 120, Antapani, Kota Bandung (Sebelah Timur flyover Pelangi Antapani)
                </span>
              </div>
            </div>
          </div>
        </div>

        <DisclaimerBanner />
      </div>
    </div>
  );
}
