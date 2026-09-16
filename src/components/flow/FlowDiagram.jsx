import React, { useState } from 'react';
import { VISUAL_FLOWS } from '../../data/visualFlowData';
import StageDetailModal from './StageDetailModal';
import { Clock, Info, ChevronRight } from 'lucide-react';

export default function FlowDiagram({ initialCase = "gugatanCerai" }) {
  const [selectedCaseKey, setSelectedCaseKey] = useState(initialCase);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentFlow = VISUAL_FLOWS[selectedCaseKey] || VISUAL_FLOWS.gugatanCerai;
  const stages = currentFlow.stages;
  const currentStage = stages[activeStageIndex] || stages[0];

  const handleNodeClick = (index) => {
    setActiveStageIndex(index);
    setIsModalOpen(true);
  };

  const handlePrevStage = () => {
    if (activeStageIndex > 0) {
      setActiveStageIndex((prev) => prev - 1);
    }
  };

  const handleNextStage = () => {
    if (activeStageIndex < stages.length - 1) {
      setActiveStageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flow-map-container">
      {/* Case Type Tabs */}
      <div className="flow-tabs-wrapper" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={selectedCaseKey === "gugatanCerai"}
          className={`flow-tab-btn ${selectedCaseKey === "gugatanCerai" ? 'active' : ''}`}
          onClick={() => {
            setSelectedCaseKey("gugatanCerai");
            setActiveStageIndex(0);
          }}
        >
          Gugatan Cerai (Istri)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCaseKey === "ceraiTalak"}
          className={`flow-tab-btn ${selectedCaseKey === "ceraiTalak" ? 'active' : ''}`}
          onClick={() => {
            setSelectedCaseKey("ceraiTalak");
            setActiveStageIndex(0);
          }}
        >
          Cerai Talak (Suami)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCaseKey === "dispensasiNikah"}
          className={`flow-tab-btn ${selectedCaseKey === "dispensasiNikah" ? 'active' : ''}`}
          onClick={() => {
            setSelectedCaseKey("dispensasiNikah");
            setActiveStageIndex(0);
          }}
        >
          Dispensasi Kawin
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCaseKey === "waris"}
          className={`flow-tab-btn ${selectedCaseKey === "waris" ? 'active' : ''}`}
          onClick={() => {
            setSelectedCaseKey("waris");
            setActiveStageIndex(0);
          }}
        >
          Penetapan Ahli Waris
        </button>
      </div>

      {/* Header Info for Selected Case */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.25rem' }}>
              {currentFlow.title}
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.925rem', margin: 0 }}>
              {currentFlow.subtitle}
            </p>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#ECFDF5', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #A7F3D0' }}>
            <span style={{ fontSize: '0.85rem', color: '#065F46', fontWeight: 700 }}>
              Total: {currentFlow.totalStages} Tahapan Proses Resmi
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Track */}
      <div className="timeline-track">
        {stages.map((stg, idx) => {
          const isActive = idx === activeStageIndex;

          return (
            <div
              key={stg.step}
              className={`timeline-node ${isActive ? 'active' : ''}`}
              onClick={() => handleNodeClick(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Tahap ${stg.step}: ${stg.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNodeClick(idx);
                }
              }}
            >
              {/* Circular Number Badge */}
              <div className="node-number-badge">
                {stg.step}
              </div>

              {/* Node Card */}
              <div className="node-card card-hover">
                <div className="node-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="badge badge-primary">
                      Tahap {stg.step} dari {currentFlow.totalStages}
                    </span>
                    <h4 className="node-card-title">{stg.title}</h4>
                  </div>
                  <ChevronRight size={18} style={{ color: '#94A3B8' }} />
                </div>

                <p className="node-card-desc">{stg.shortDesc}</p>

                <div className="node-meta-row">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} style={{ color: '#059669' }} />
                    <span>Estimasi: {stg.estimatedTime}</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Info size={14} style={{ color: '#0284C7' }} />
                    <span style={{ color: '#0284C7', fontWeight: 600 }}>Klik untuk rincian & berkas</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Detail Modal */}
      <StageDetailModal
        stage={currentStage}
        totalStages={currentFlow.totalStages}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrev={handlePrevStage}
        onNext={handleNextStage}
      />
    </div>
  );
}
