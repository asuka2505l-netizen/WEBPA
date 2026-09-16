import React from 'react';
import { X, Clock, FileText, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StageDetailModal({
  stage,
  totalStages,
  isOpen,
  onClose,
  onPrev,
  onNext
}) {
  if (!isOpen || !stage) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span style={{ fontSize: '0.8rem', color: '#FDE68A', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
              Tahap {stage.step} dari {totalStages}
            </span>
            <h3>{stage.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Detail"
            style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Estimated duration badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#ECFDF5', color: '#065F46', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            <Clock size={15} />
            <span>Estimasi Waktu: {stage.estimatedTime}</span>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              Penjelasan Tahapan:
            </h4>
            <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
              {stage.fullDesc}
            </p>
          </div>

          {/* Requirements */}
          {stage.requirements && stage.requirements.length > 0 && (
            <div style={{ marginBottom: '1.5rem', backgroundColor: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FileText size={16} style={{ color: '#065F46' }} />
                <span>Hal / Berkas yang Perlu Dipersiapkan:</span>
              </h4>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {stage.requirements.map((req, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem' }}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Important Legal Notes */}
          {stage.notes && (
            <div className="info-box" style={{ margin: 0 }}>
              <AlertCircle size={18} style={{ color: '#0369A1', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#0C4A6E', marginBottom: '0.2rem' }}>
                  Catatan Penting Pengadilan:
                </strong>
                <span style={{ fontSize: '0.875rem' }}>{stage.notes}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onPrev}
            disabled={stage.step === 1}
            style={{ opacity: stage.step === 1 ? 0.4 : 1, cursor: stage.step === 1 ? 'not-allowed' : 'pointer' }}
          >
            <ChevronLeft size={16} />
            <span>Tahap Sebelumnya</span>
          </button>

          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B' }}>
            {stage.step} / {totalStages}
          </span>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onNext}
            disabled={stage.step === totalStages}
            style={{ opacity: stage.step === totalStages ? 0.4 : 1, cursor: stage.step === totalStages ? 'not-allowed' : 'pointer' }}
          >
            <span>Tahap Selanjutnya</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
