import React from 'react';
import { Printer, RotateCcw, ArrowLeft, Calculator, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChecklistSummary({
  checkedCount,
  totalCount,
  mandatoryCheckedCount,
  mandatoryTotalCount,
  onReset
}) {
  const percentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
  const isAllMandatoryChecked = mandatoryTotalCount > 0 && mandatoryCheckedCount >= mandatoryTotalCount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="checklist-header-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#065F46', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Status Pemeriksaan Mandiri
          </span>
          <h3 style={{ fontSize: '1.4rem', color: '#0F172A', marginTop: '0.2rem' }}>
            {checkedCount} dari {totalCount} Dokumen Telah Diperiksa
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: percentage === 100 ? '#059669' : '#B45309' }}>
            {percentage}%
          </span>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>
            ({mandatoryCheckedCount}/{mandatoryTotalCount} berkas pokok)
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-bg" style={{ height: '10px', marginBottom: '1.25rem' }}>
        <div
          className="progress-bar-fill"
          style={{
            width: `${percentage}%`,
            background: percentage === 100
              ? 'linear-gradient(90deg, #059669 0%, #10B981 100%)'
              : 'linear-gradient(90deg, #D97706 0%, #F59E0B 100%)'
          }}
        />
      </div>

      {/* Dynamic Status Alert as requested */}
      {isAllMandatoryChecked ? (
        <div className="success-box" style={{ margin: 0 }}>
          <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: '2px', color: '#15803D' }} />
          <div>
            <strong>Checklist utama telah selesai diperiksa!</strong>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Seluruh berkas persyaratan pokok telah Anda centang. Pastikan kembali persyaratan resmi yang berlaku dan siapkan dokumen asli saat hadir ke loket PTSP Pengadilan Agama.
            </p>
          </div>
        </div>
      ) : (
        <div className="disclaimer-box" style={{ margin: 0, backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
          <AlertTriangle size={20} style={{ flexShrink: 0, marginTop: '2px', color: '#B45309' }} />
          <div>
            <strong>Masih terdapat dokumen yang perlu Anda periksa.</strong>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Silakan periksa satu per satu daftar di bawah. Berkas dengan label <strong>Wajib</strong> merupakan syarat pokok pendaftaran perkara di Pengadilan Agama.
            </p>
          </div>
        </div>
      )}

      {/* Actions Toolbar */}
      <div className="checklist-actions-bar no-print">
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link to="/panduan" className="btn btn-secondary btn-sm">
            <ArrowLeft size={15} />
            <span>Kembali ke Panduan</span>
          </Link>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onReset}
            style={{ color: '#DC2626', borderColor: '#FECACA' }}
          >
            <RotateCcw size={15} />
            <span>Reset Checklist</span>
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handlePrint}
          >
            <Printer size={15} />
            <span>Cetak Checklist</span>
          </button>
          <Link to="/kalkulator" className="btn btn-primary btn-sm">
            <Calculator size={15} />
            <span>Hitung Panjar Biaya</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
