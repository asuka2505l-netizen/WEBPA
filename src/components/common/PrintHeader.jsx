import React from 'react';
import CourtLogo from '../../assets/CourtLogo';

export default function PrintHeader({ title = "Lembar Checklist Persyaratan Dokumen", caseName = "" }) {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="print-only" style={{ marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <CourtLogo size={50} />
        <div>
          <h2 style={{ fontSize: '1.25rem', margin: 0, textTransform: 'uppercase', color: '#000' }}>
            PENGADILAN AGAMA
          </h2>
          <p style={{ margin: '2px 0 0', fontSize: '0.9rem', color: '#333' }}>
            Portal Pelayanan Publik Mandiri - {title}
          </p>
        </div>
      </div>
      <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
        <span>Jenis Perkara: <strong>{caseName}</strong></span>
        <span>Dicetak pada: <strong>{currentDate}</strong></span>
      </div>
    </div>
  );
}
