import React from 'react';
import CostCalculator from '../components/calculator/CostCalculator';
import { Calculator } from 'lucide-react';

export default function KalkulatorPanjar() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <Calculator size={14} />
            <span>Simulasi Biaya Mandiri</span>
          </div>
          <h1 className="page-header-title">Kalkulator Estimasi Panjar Biaya Perkara</h1>
          <p className="page-header-desc">
            Hitung perkiraan panjar biaya perkara secara transparan berdasarkan jenis perkara yang diajukan dan zonasi radius tempat tinggal para pihak oleh jurusita.
          </p>
        </div>
      </div>

      <div className="container">
        <CostCalculator />
      </div>
    </div>
  );
}
