import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CourtLogo from '../../assets/CourtLogo';
import {
  Compass,
  GitFork,
  CheckSquare,
  Calculator,
  HelpCircle,
  PhoneCall,
  Menu,
  X,
  Clock,
  MapPin,
  ExternalLink,
  MessageCircle,
  Bot,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar-wrapper no-print">
      {/* Top Notification / Information Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} />
              <span>Jl. Terusan Jakarta No. 120, Antapani, Kota Bandung</span>
            </span>
            <span className="top-bar-item">
              <Clock size={13} />
              <span>Loket PTSP: Senin - Jumat (08.00 - 15.30 WIB)</span>
            </span>
          </div>
          <div className="top-bar-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://wa.me/6281320499227"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-item"
              style={{ color: '#6EE7B7', fontWeight: 600, textDecoration: 'none' }}
            >
              <MessageCircle size={13} />
              <span>WA PTSP: 0813-2049-9227</span>
            </a>
            <a
              href="https://sipp.pa-bandung.go.id/list_jadwal_sidang"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-item"
              style={{ color: '#FDE68A', fontWeight: 600, textDecoration: 'none' }}
            >
              <span>Jadwal Sidang SIPP</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container">
        <nav className="navbar" aria-label="Navigasi Utama">
          {/* Logo & Brand Identity */}
          <Link to="/" className="nav-brand" onClick={closeMobile}>
            <CourtLogo size={44} />
            <div className="brand-text">
              <span className="brand-title">PA BANDUNG KELAS 1A</span>
              <span className="brand-subtitle">Portal Panduan Perkara Interaktif</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/panduan" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <Compass size={16} />
                <span>Panduan Perkara</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/peta-alur" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <GitFork size={16} />
                <span>Peta Alur</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/checklist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <CheckSquare size={16} />
                <span>Checklist</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/kalkulator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <Calculator size={16} />
                <span>Kalkulator</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/asisten-ai"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={{ color: '#047857', fontWeight: 700 }}
              >
                <Bot size={16} />
                <span>Asisten AI</span>
                <span
                  style={{
                    fontSize: '0.625rem',
                    backgroundColor: '#10B981',
                    color: '#FFF',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '8px',
                    marginLeft: '2px',
                    fontWeight: 800
                  }}
                >
                  AI
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <HelpCircle size={16} />
                <span>FAQ</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontak" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <PhoneCall size={16} />
                <span>Kontak</span>
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMobile}
            aria-label="Buka Menu Navigasi"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="nav-link" onClick={closeMobile}>
          Beranda
        </NavLink>
        <NavLink to="/panduan" className="nav-link" onClick={closeMobile}>
          <Compass size={18} />
          <span>Panduan Perkara Interaktif</span>
        </NavLink>
        <NavLink to="/peta-alur" className="nav-link" onClick={closeMobile}>
          <GitFork size={18} />
          <span>Peta Alur Visual 8 Tahap</span>
        </NavLink>
        <NavLink to="/checklist" className="nav-link" onClick={closeMobile}>
          <CheckSquare size={18} />
          <span>Checklist Dokumen</span>
        </NavLink>
        <NavLink to="/kalkulator" className="nav-link" onClick={closeMobile}>
          <Calculator size={18} />
          <span>Kalkulator Panjar Biaya</span>
        </NavLink>
        <NavLink to="/asisten-ai" className="nav-link" onClick={closeMobile} style={{ color: '#047857', fontWeight: 700 }}>
          <Bot size={18} />
          <span>Si-PANDU AI (Chatbot)</span>
        </NavLink>
        <NavLink to="/faq" className="nav-link" onClick={closeMobile}>
          <HelpCircle size={18} />
          <span>Tanya Jawab (FAQ)</span>
        </NavLink>
        <NavLink to="/kontak" className="nav-link" onClick={closeMobile}>
          <PhoneCall size={18} />
          <span>Kontak &amp; Loket Antapani</span>
        </NavLink>
        <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid #E2E8F0', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a
            href="https://wa.me/6281320499227"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ backgroundColor: '#059669', justifyContent: 'flex-start' }}
          >
            <MessageCircle size={15} />
            <span>Chat WhatsApp PTSP: 0813-2049-9227</span>
          </a>
          <a
            href="https://sipp.pa-bandung.go.id/list_jadwal_sidang"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ justifyContent: 'flex-start' }}
          >
            <ExternalLink size={15} />
            <span>Jadwal Sidang Hari Ini (SIPP)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
