import React from 'react';

export default function ProgressBar({ stepNumber = 1, totalSteps = 5, category = "Panduan Perkara" }) {
  const percentage = Math.min(100, Math.round((stepNumber / totalSteps) * 100));

  return (
    <div className="wizard-progress-card">
      <div className="wizard-progress-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span className="badge badge-primary">{category}</span>
          <span className="step-indicator">
            Pertanyaan {stepNumber} dari {totalSteps}
          </span>
        </div>
        <span className="step-percentage">{percentage}% Selesai</span>
      </div>

      <div className="progress-bar-bg" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
