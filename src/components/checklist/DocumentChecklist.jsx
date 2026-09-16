import React from 'react';
import { DOCUMENT_DATA } from '../../data/documentData';
import { usePortal } from '../../context/PortalContext';
import ChecklistSummary from './ChecklistSummary';
import PrintHeader from '../common/PrintHeader';
import DisclaimerBanner from '../layout/DisclaimerBanner';
import { Check, Info } from 'lucide-react';

export default function DocumentChecklist({ activeCase, onCaseChange }) {
  const { checkedDocs, toggleDocCheck, resetCaseChecklist } = usePortal();

  const caseData = DOCUMENT_DATA[activeCase] || DOCUMENT_DATA.gugatanCerai;
  const docs = caseData.documents;

  const totalCount = docs.length;
  const checkedCount = docs.filter((d) => !!checkedDocs[d.id]).length;

  const mandatoryDocs = docs.filter((d) => d.isMandatory);
  const mandatoryTotalCount = mandatoryDocs.length;
  const mandatoryCheckedCount = mandatoryDocs.filter((d) => !!checkedDocs[d.id]).length;

  const handleReset = () => {
    if (window.confirm(`Apakah Anda yakin ingin mengosongkan checklist untuk ${caseData.caseName}?`)) {
      resetCaseChecklist(docs);
    }
  };

  return (
    <div>
      <PrintHeader caseName={caseData.caseName} />

      {/* Case Selector Tabs */}
      <div className="flow-tabs-wrapper no-print" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeCase === "gugatanCerai"}
          className={`flow-tab-btn ${activeCase === "gugatanCerai" ? 'active' : ''}`}
          onClick={() => onCaseChange("gugatanCerai")}
        >
          Gugatan Cerai (Istri)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCase === "ceraiTalak"}
          className={`flow-tab-btn ${activeCase === "ceraiTalak" ? 'active' : ''}`}
          onClick={() => onCaseChange("ceraiTalak")}
        >
          Cerai Talak (Suami)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCase === "dispensasiNikah"}
          className={`flow-tab-btn ${activeCase === "dispensasiNikah" ? 'active' : ''}`}
          onClick={() => onCaseChange("dispensasiNikah")}
        >
          Dispensasi Kawin
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCase === "waris"}
          className={`flow-tab-btn ${activeCase === "waris" ? 'active' : ''}`}
          onClick={() => onCaseChange("waris")}
        >
          Penetapan Ahli Waris
        </button>
      </div>

      {/* Checklist Summary Card */}
      <ChecklistSummary
        checkedCount={checkedCount}
        totalCount={totalCount}
        mandatoryCheckedCount={mandatoryCheckedCount}
        mandatoryTotalCount={mandatoryTotalCount}
        onReset={handleReset}
      />

      {/* Document Items List */}
      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#0F172A' }}>
          Daftar Kelengkapan Berkas: {caseData.caseName}
        </h3>

        <div role="group" aria-label={`Daftar dokumen ${caseData.caseName}`}>
          {docs.map((doc) => {
            const isChecked = !!checkedDocs[doc.id];

            return (
              <div
                key={doc.id}
                className={`document-item ${isChecked ? 'checked' : ''}`}
                onClick={() => toggleDocCheck(doc.id)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggleDocCheck(doc.id);
                  }
                }}
              >
                {/* Custom Checkbox */}
                <div className="custom-checkbox" aria-hidden="true">
                  {isChecked && <Check size={16} strokeWidth={3} />}
                </div>

                {/* Doc Content */}
                <div className="doc-info">
                  <div className="doc-title">
                    <span>{doc.title}</span>
                    {doc.isMandatory ? (
                      <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                        Wajib
                      </span>
                    ) : (
                      <span className="badge badge-slate" style={{ fontSize: '0.7rem' }}>
                        Kondisional
                      </span>
                    )}
                    <span className="badge badge-slate" style={{ fontSize: '0.7rem' }}>
                      {doc.category}
                    </span>
                  </div>

                  <p className="doc-desc">{doc.description}</p>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {doc.legalNote && (
                      <span className="doc-notes">
                        Legalisasi: {doc.legalNote}
                      </span>
                    )}
                    {doc.tip && (
                      <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Info size={13} style={{ color: '#0284C7' }} />
                        <span>{doc.tip}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Disclaimer Banner */}
      <DisclaimerBanner
        customText="Daftar checklist ini merupakan panduan persiapan mandiri. Pemeriksaan keabsahan alat bukti asli dan kelayakan berkas gugatan/permohonan secara yuridis tetap menjadi kewenangan penuh Meja 1 PTSP dan Majelis Hakim Pengadilan Agama."
      />
    </div>
  );
}
