import React from 'react';
import { usePortal } from '../context/PortalContext';
import DocumentChecklist from '../components/checklist/DocumentChecklist';
import { CheckSquare, Stamp } from 'lucide-react';

export default function ChecklistDokumen() {
  const { activeCaseType, setActiveCaseType } = usePortal();

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header no-print">
        <div className="page-header-content">
          <div className="page-header-badge">
            <CheckSquare size={14} />
            <span>Persiapan Berkas Mandiri</span>
          </div>
          <h1 className="page-header-title">Checklist Persyaratan Dokumen Perkara</h1>
          <p className="page-header-desc">
            Periksa dan centang kelengkapan berkas yang wajib Anda siapkan sebelum mendatangi loket Pelayanan Terpadu Satu Pintu (PTSP). Status centang tersimpan otomatis di perangkat Anda dan dapat dicetak langsung.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Interactive Document Checklist Component */}
        <DocumentChecklist
          activeCase={activeCaseType || "gugatanCerai"}
          onCaseChange={(caseKey) => setActiveCaseType(caseKey)}
        />

        {/* Education Box on Nazegelen */}
        <div className="card no-print" style={{ padding: '1.75rem', marginTop: '2rem', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Stamp size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', margin: 0 }}>
                Apa itu Legalisasi Dokumen di Kantor Pos (Nazegelen)?
              </h4>
              <p style={{ margin: 0, fontSize: '0.825rem', color: '#64748B' }}>
                Aturan pemeteraian kemudian berdasarkan Undang-Undang Bea Meterai Republik Indonesia
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Seluruh fotokopi surat bukti (seperti Buku Nikah, KTP, Kartu Keluarga, dan Akta Kelahiran) yang akan diserahkan kepada Majelis Hakim di persidangan <strong>wajib ditempeli meterai tempel Rp 10.000</strong> dan dicap leges di loket Kantor Pos terdekat (istilah hukumnya adalah <em>Nazegelen</em>). Berkas fotokopi yang belum dileges tidak dapat diterima sebagai alat bukti surat yang sah di pengadilan.
          </p>
        </div>
      </div>
    </div>
  );
}
