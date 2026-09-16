import React from 'react';
import { usePortal } from '../context/PortalContext';
import FlowDiagram from '../components/flow/FlowDiagram';
import CourtCalendarTimeline from '../components/flow/CourtCalendarTimeline';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';
import { GitFork, Info } from 'lucide-react';

export default function PetaAlur() {
  const { activeCaseType } = usePortal();

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <GitFork size={14} />
            <span>Peta Visual Proses Persidangan</span>
          </div>
          <h1 className="page-header-title">Peta Alur Perkara Pengadilan Agama</h1>
          <p className="page-header-desc">
            Pahami rangkaian tahapan hukum resmi dari pendaftaran perkara, pemanggilan oleh jurusita, mediasi wajib, hingga pengambilan produk pengadilan (Akta Cerai atau Salinan Putusan).
          </p>
        </div>
      </div>

      <div className="container">
        {/* Interactive Flow Diagram */}
        <FlowDiagram initialCase={activeCaseType || "gugatanCerai"} />

        {/* Predictive Court Hearing Calendar Timeline */}
        <div style={{ marginTop: '2.5rem' }}>
          <CourtCalendarTimeline caseTitle={activeCaseType === 'ceraiTalak' ? 'Cerai Talak' : 'Gugatan Cerai'} />
        </div>

        {/* Mediation reminder */}
        <div className="info-box" style={{ marginTop: '2.5rem' }}>
          <Info size={22} style={{ color: '#0284C7', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ color: '#0C4A6E' }}>Kewajiban Menghadiri Proses Mediasi (PERMA No. 1 Tahun 2016):</strong>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Dalam perkara gugatan perceraian maupun sengketa perdata lainnya di mana kedua pihak hadir di persidangan, Majelis Hakim WAJIB mengupayakan perdamaian melalui proses mediasi. Pihak prinsipal wajib hadir langsung didampingi atau tanpa kuasa hukum.
            </p>
          </div>
        </div>

        <DisclaimerBanner />
      </div>
    </div>
  );
}
