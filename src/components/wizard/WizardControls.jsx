import React from 'react';
import { ArrowLeft, RotateCcw, Save } from 'lucide-react';

export default function WizardControls({ canGoBack, onBack, onRestart }) {
  return (
    <div className="wizard-footer-actions">
      <div>
        {canGoBack && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onBack}
            aria-label="Kembali ke pertanyaan sebelumnya"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Pertanyaan Sebelumnya</span>
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#64748B' }}>
          <Save size={14} style={{ color: '#059669' }} />
          <span>Progres tersimpan otomatis</span>
        </div>

        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => {
            if (window.confirm("Apakah Anda yakin ingin mengulang panduan dari awal?")) {
              onRestart();
            }
          }}
          style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}
        >
          <RotateCcw size={14} />
          <span>Mulai Ulang</span>
        </button>
      </div>
    </div>
  );
}
