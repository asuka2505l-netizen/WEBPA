import React from 'react';
import { Link } from 'react-router-dom';
import CourtLogo from '../../assets/CourtLogo';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import Marquee from "react-fast-marquee";
export default function Footer() {
  return (
    <footer className="footer no-print">
      <div className="container">
        <div className="footer-grid">
          {/* Institutional Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <CourtLogo size={46} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>PENGADILAN AGAMA BANDUNG</h4>
                <span style={{ fontSize: '0.75rem', color: '#FDE68A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Kelas 1A • Mahkamah Agung RI
                </span>
              </div>
            </div>
            <p>
              Portal Panduan Perkara Interaktif adalah media pelayanan publik digital resmi untuk membantu masyarakat Kota Bandung memahami alur berperkara secara mandiri, transparan, dan mudah dipahami.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', color: '#A7F3D0' }}>
              <ShieldCheck size={16} />
              <span>Wilayah Bebas dari Korupsi (WBK) &amp; Menuju WBBM</span>
            </div>
          </div>

          {/* Fitur Utama */}
          <div className="footer-col">
            <h5>Fitur Pelayanan</h5>
            <ul className="footer-links">
              <li><Link to="/panduan">Panduan Perkara Interaktif</Link></li>
              <li><Link to="/peta-alur">Peta Alur Visual 8 Tahap</Link></li>
              <li><Link to="/checklist">Checklist Persyaratan Dokumen</Link></li>
              <li><Link to="/kalkulator">Kalkulator Radius Biaya Panjar</Link></li>
              <li><Link to="/faq">Pusat Bantuan &amp; FAQ</Link></li>
            </ul>
          </div>

          {/* Layanan Resmi PA Bandung Online */}
          <div className="footer-col">
            <h5>Integrasi Sistem PA Bandung</h5>
            <ul className="footer-links">
              <li>
                <a href="https://pa-bandung.go.id" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Website Resmi PA Bandung</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://sipp.pa-bandung.go.id/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>SIPP PA Bandung (Cek Perkara)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://forms.gle/DtLKsY1AJLieG2RL6" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Pengambilan Akta Cerai Online</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pa-bandung.go.id/panggilan-ghoib/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Papan Panggilan Ghoib Elektronik</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://ecourt.mahkamahagung.go.id" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Aplikasi e-Court Mahkamah Agung</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://gugatanmandiri.badilag.net/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Blanko Gugatan Mandiri Badilag</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Loket Antapani */}
          <div className="footer-col">
            <h5>Kontak Loket Antapani</h5>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#F59E0B', flexShrink: 0, marginTop: '3px' }} />
                <span>Jl. Terusan Jakarta No. 120, Antapani, Kota Bandung, Jawa Barat 40291</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={15} style={{ color: '#F59E0B', flexShrink: 0 }} />
                <span>Telepon: (022) 7202357</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MessageSquare size={15} style={{ color: '#10B981', flexShrink: 0 }} />
                <a href="https://wa.me/6281320499227" target="_blank" rel="noopener noreferrer" style={{ color: '#6EE7B7' }}>
                  WhatsApp: 0813-2049-9227
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={15} style={{ color: '#F59E0B', flexShrink: 0 }} />
                <span>info@pa-bandung.go.id</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Clock size={15} style={{ color: '#F59E0B', flexShrink: 0, marginTop: '3px' }} />
                <span>Senin - Kamis: 08.00 - 16.00 WIB<br />Jumat: 08.00 - 16.30 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pengadilan Agama Bandung Kelas 1A. Seluruh Hak Cipta Dilindungi.</p>
          <p style={{ color: '#94A3B8' }}>
            Inovasi Digital Mandiri untuk Mewujudkan Pelayanan Peradilan yang Cepat, Sederhana, dan Biaya Ringan.
          </p>
        </div>
      </div>
    </footer>
  );
}
