import React from 'react';
import { formatRupiah } from '../../data/biayaPerkara';
import { DollarSign, ShieldCheck } from 'lucide-react';

export default function CostBreakdownTable({
  caseInfo,
  radiusP1,
  radiusP2,
  panggilanP1Count,
  panggilanP2Count,
  totalBiayaP1,
  totalBiayaP2,
  totalPanjar
}) {
  return (
    <div className="calc-breakdown-card">
      <div className="calc-breakdown-header">
        <div>
          <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
            {caseInfo.type}
          </span>
          <h3 style={{ fontSize: '1.25rem', color: '#0F172A', margin: 0 }}>
            Rincian Estimasi Panjar
          </h3>
        </div>
        <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DollarSign size={22} />
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        {/* Pendaftaran */}
        <div className="breakdown-row">
          <span>Biaya Pendaftaran (PNBP)</span>
          <strong style={{ color: '#0F172A' }}>{formatRupiah(caseInfo.pendaftaran)}</strong>
        </div>

        {/* Biaya Proses / ATK */}
        <div className="breakdown-row">
          <span>Biaya Proses / Administrasi ATK</span>
          <strong style={{ color: '#0F172A' }}>{formatRupiah(caseInfo.proses)}</strong>
        </div>

        {/* Panggilan P1 */}
        <div className="breakdown-row">
          <div>
            <span>Pemanggilan Pihak I ({radiusP1.name})</span>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
              {panggilanP1Count}x panggilan @ {formatRupiah(radiusP1.costPerCall)}
            </div>
          </div>
          <strong style={{ color: '#0F172A' }}>{formatRupiah(totalBiayaP1)}</strong>
        </div>

        {/* Panggilan P2 (jika ada pihak lawan) */}
        {panggilanP2Count > 0 && (
          <div className="breakdown-row">
            <div>
              <span>Pemanggilan Pihak II ({radiusP2.name})</span>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                {panggilanP2Count}x panggilan @ {formatRupiah(radiusP2.costPerCall)}
              </div>
            </div>
            <strong style={{ color: '#0F172A' }}>{formatRupiah(totalBiayaP2)}</strong>
          </div>
        )}

        {/* PNBP Panggilan */}
        <div className="breakdown-row">
          <span>PNBP Relaas Panggilan Sidang</span>
          <strong style={{ color: '#0F172A' }}>{formatRupiah(caseInfo.pnbpPanggilan)}</strong>
        </div>

        {/* Redaksi */}
        <div className="breakdown-row">
          <span>Redaksi Putusan / Penetapan</span>
          <strong style={{ color: '#0F172A' }}>{formatRupiah(caseInfo.redaksi)}</strong>
        </div>

        {/* Meterai */}
        <div className="breakdown-row">
          <span>Meterai Putusan</span>
          <strong style={{ color: '#0F172A' }}>{formatRupiah(caseInfo.meterai)}</strong>
        </div>

        {/* TOTAL */}
        <div className="breakdown-row total-row" style={{ 
          backgroundColor: '#ECFDF5', 
          border: '2px solid #059669', 
          borderRadius: '12px', 
          padding: '1.25rem', 
          marginTop: '1rem' 
        }}>
          <div>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', display: 'block' }}>
              TOTAL ESTIMASI PANJAR
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              (Besaran uang muka awal)
            </span>
          </div>
          <span className="total-amount">{formatRupiah(totalPanjar)}</span>
        </div>
      </div>

      {/* Sisa Panjar Explanation Box */}
      <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1rem', fontSize: '0.825rem', color: '#475569', lineHeight: 1.55 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065F46', fontWeight: 700, marginBottom: '0.35rem' }}>
          <ShieldCheck size={16} />
          <span>Kompensasi Pengembalian Sisa Panjar:</span>
        </div>
        <p style={{ margin: 0 }}>
          Jumlah di atas merupakan estimasi panjar sementara. Jika proses perkara selesai dengan frekuensi panggilan yang lebih sedikit, sisa panjar biaya yang belum terpakai <strong>WAJIB DIKEMBALIKAN 100%</strong> kepada pihak penyetor melalui kasir PTSP Pengadilan Agama.
        </p>
      </div>
    </div>
  );
}
