import React, { useState } from 'react';
import { BIAYA_PERKARA, formatRupiah } from '../../data/biayaPerkara';
import { RADIUS_ZONES, getRadiusById } from '../../data/radiusData';
import { usePortal } from '../../context/PortalContext';
import CostBreakdownTable from './CostBreakdownTable';
import LocationSearchPicker from './LocationSearchPicker';
import DisclaimerBanner from '../layout/DisclaimerBanner';
import { Calculator, MapPin, ArrowRight, Search, ListFilter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CostCalculator() {
  const {
    calcCase,
    setCalcCase,
    calcRadiusP1,
    setCalcRadiusP1,
    calcRadiusP2,
    setCalcRadiusP2
  } = usePortal();

  const [useSearchMode, setUseSearchMode] = useState(true);

  const caseInfo = BIAYA_PERKARA[calcCase] || BIAYA_PERKARA.gugatanCerai;
  const radiusP1 = getRadiusById(calcRadiusP1);
  const radiusP2 = getRadiusById(calcRadiusP2);

  // Calculation parameters
  const panggilanP1Count = caseInfo.defaultPanggilanP1;
  const panggilanP2Count = caseInfo.defaultPanggilanP2;

  const totalBiayaP1 = panggilanP1Count * radiusP1.costPerCall;
  const totalBiayaP2 = panggilanP2Count * radiusP2.costPerCall;

  const totalPanjar =
    caseInfo.pendaftaran +
    caseInfo.proses +
    caseInfo.pnbpPanggilan +
    caseInfo.redaksi +
    caseInfo.meterai +
    totalBiayaP1 +
    totalBiayaP2;

  const hasPihak2 = panggilanP2Count > 0;

  return (
    <div>
      {/* Mode Switcher Banner: Smart Search vs Manual Dropdown */}
      <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '0.85rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
          <MapPin size={16} style={{ color: '#059669' }} />
          <span>
            Mode Penentuan Wilayah: <strong>{useSearchMode ? 'Pencarian Cerdas 151 Kelurahan Kota Bandung' : 'Pilihan Dropdown Manual'}</strong>
          </span>
        </div>
        <button
          type="button"
          onClick={() => setUseSearchMode(!useSearchMode)}
          className="btn btn-secondary btn-sm"
          style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
        >
          {useSearchMode ? (
            <>
              <ListFilter size={14} />
              <span>Ganti ke Dropdown Manual</span>
            </>
          ) : (
            <>
              <Search size={14} />
              <span>Ganti ke Cari Kelurahan</span>
            </>
          )}
        </button>
      </div>

      {/* Calculator Grid */}
      <div className="calc-grid">
        {/* Left Form: Inputs */}
        <div>
          <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #F1F5F9' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calculator size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#0F172A', margin: 0 }}>
                  Formulir Parameter Biaya PA Bandung
                </h3>
                <p style={{ margin: 0, fontSize: '0.825rem', color: '#64748B' }}>
                  Pilih jenis perkara dan radius wilayah domisili para pihak di Kota Bandung.
                </p>
              </div>
            </div>

            {/* Input 1: Jenis Perkara */}
            <div className="form-group">
              <label htmlFor="select-case-type" className="form-label">
                1. Jenis Perkara / Permohonan:
              </label>
              <select
                id="select-case-type"
                className="form-select"
                value={calcCase}
                onChange={(e) => setCalcCase(e.target.value)}
              >
                <option value="gugatanCerai">Gugatan Cerai (Diajukan oleh Istri)</option>
                <option value="ceraiTalak">Cerai Talak (Diajukan oleh Suami)</option>
                <option value="dispensasiNikah">Dispensasi Kawin / Nikah (Usia &lt; 19 Tahun)</option>
                <option value="waris">Penetapan Ahli Waris (PAW / Voluntair)</option>
              </select>
              <small style={{ display: 'block', marginTop: '0.35rem', color: '#64748B', fontSize: '0.8rem' }}>
                {caseInfo.description}
              </small>
            </div>

            {/* Input 2: Radius Pihak 1 (Smart Search vs Manual) */}
            {useSearchMode ? (
              <LocationSearchPicker
                label={`2. Cari Wilayah Tempat Tinggal Pihak I (${hasPihak2 ? 'Penggugat / Pemohon' : 'Pemohon'}):`}
                currentRadiusId={calcRadiusP1}
                onSelectRadius={(radId) => setCalcRadiusP1(radId)}
                partyLabel="Pihak I"
              />
            ) : (
              <div className="form-group">
                <label htmlFor="select-radius-p1" className="form-label">
                  2. Wilayah / Radius Pihak I ({hasPihak2 ? 'Penggugat / Pemohon' : 'Pemohon'}):
                </label>
                <select
                  id="select-radius-p1"
                  className="form-select"
                  value={calcRadiusP1}
                  onChange={(e) => setCalcRadiusP1(e.target.value)}
                >
                  {RADIUS_ZONES.filter((r) => r.id !== "radius_ghoib").map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} ({formatRupiah(zone.costPerCall)} / panggilan) - {zone.distanceText}
                    </option>
                  ))}
                </select>
                <small style={{ display: 'block', marginTop: '0.35rem', color: '#64748B', fontSize: '0.8rem' }}>
                  Contoh: {radiusP1.sampleAreas}
                </small>
              </div>
            )}

            {/* Input 3: Radius Pihak 2 (Hanya jika perkara gugatan) */}
            {hasPihak2 && (
              useSearchMode ? (
                <div>
                  <LocationSearchPicker
                    label="3. Cari Wilayah Tempat Tinggal Pihak II (Tergugat / Termohon):"
                    currentRadiusId={calcRadiusP2}
                    onSelectRadius={(radId) => setCalcRadiusP2(radId)}
                    partyLabel="Pihak II"
                  />
                  {/* Option for Ghoib */}
                  <div style={{ marginBottom: '1.25rem', marginTop: '-0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      className={`btn btn-sm ${calcRadiusP2 === 'radius_ghoib' ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => setCalcRadiusP2(calcRadiusP2 === 'radius_ghoib' ? 'radius_1' : 'radius_ghoib')}
                      style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem' }}
                    >
                      {calcRadiusP2 === 'radius_ghoib' ? '✓ Pihak Ghoib Aktif' : 'Atau Pilih Pihak Ghoib (Alamat Tidak Diketahui)'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="select-radius-p2" className="form-label">
                    3. Wilayah / Radius Pihak II (Tergugat / Termohon):
                  </label>
                  <select
                    id="select-radius-p2"
                    className="form-select"
                    value={calcRadiusP2}
                    onChange={(e) => setCalcRadiusP2(e.target.value)}
                  >
                    {RADIUS_ZONES.map((zone) => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name} ({formatRupiah(zone.costPerCall)} / panggilan) - {zone.distanceText}
                      </option>
                    ))}
                  </select>
                  <small style={{ display: 'block', marginTop: '0.35rem', color: '#64748B', fontSize: '0.8rem' }}>
                    {radiusP2.id === 'radius_ghoib'
                      ? 'Tergugat tidak diketahui alamatnya (pemanggilan melalui iklan pengumuman radio/media massa).'
                      : `Contoh: ${radiusP2.sampleAreas}`}
                  </small>
                </div>
              )
            )}
          </div>

          {/* Radius Explanation Info Box */}
          <div className="card" style={{ padding: '1.5rem', backgroundColor: '#F8FAFC' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={16} style={{ color: '#065F46' }} />
              <span>SK Radius Resmi Pengadilan Agama Bandung Kelas 1A:</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: '#475569' }}>
              {RADIUS_ZONES.map((zone) => (
                <div key={zone.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px dashed #E2E8F0' }}>
                  <span><strong>{zone.name.split(' (')[0]}</strong>: {zone.distanceText}</span>
                  <span style={{ fontWeight: 600, color: '#065F46' }}>{formatRupiah(zone.costPerCall)}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>
              *Ditetapkan secara resmi melalui Surat Keputusan (SK) Ketua Pengadilan Agama Bandung tentang Panjar Biaya Perkara.
            </p>
          </div>
        </div>

        {/* Right Card: Live Breakdown Table */}
        <div>
          <CostBreakdownTable
            caseInfo={caseInfo}
            radiusP1={radiusP1}
            radiusP2={radiusP2}
            panggilanP1Count={panggilanP1Count}
            panggilanP2Count={panggilanP2Count}
            totalBiayaP1={totalBiayaP1}
            totalBiayaP2={totalBiayaP2}
            totalPanjar={totalPanjar}
          />

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link to="/checklist" className="btn btn-outline-primary" style={{ width: '100%' }}>
              <span>Cek Persyaratan Dokumen {caseInfo.name}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Official Calculator Disclaimer */}
      <DisclaimerBanner type="calculator" />
    </div>
  );
}
