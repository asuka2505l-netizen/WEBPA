import React, { useState } from 'react';
import { findLocations } from '../../data/bandungRegions';
import { getRadiusById } from '../../data/radiusData';
import { formatRupiah } from '../../data/biayaPerkara';
import { Search, MapPin, Check, X } from 'lucide-react';

export default function LocationSearchPicker({ label, currentRadiusId, onSelectRadius, partyLabel = "Pihak" }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocationName, setSelectedLocationName] = useState(null);

  const currentRadius = getRadiusById(currentRadiusId);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length >= 2) {
      const results = findLocations(val);
      setSuggestions(results);
      setIsOpen(results.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (loc) => {
    onSelectRadius(loc.radiusId);
    setSelectedLocationName(loc.label);
    setQuery(loc.label);
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedLocationName(null);
    setSuggestions([]);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
      <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{label}</span>
        {selectedLocationName && (
          <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
            <Check size={12} /> {selectedLocationName}
          </span>
        )}
      </label>

      {/* Search Input Box */}
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          className="form-input"
          placeholder={`Ketik nama kelurahan / kecamatan ${partyLabel} (contoh: Dago, Pasteur, Antapani)...`}
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            if (query.trim().length >= 2) {
              setSuggestions(findLocations(query));
              setIsOpen(true);
            }
          }}
          style={{ paddingLeft: '2.5rem', paddingRight: query ? '2.5rem' : '1rem' }}
        />
        <Search
          size={16}
          style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'y(-50%)', color: '#94A3B8', pointerEvents: 'none' }}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', padding: '0.25rem' }}
            aria-label="Hapus pencarian"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Auto-complete Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #059669',
            borderRadius: '10px',
            boxShadow: 'var(--shadow-lg)',
            marginTop: '4px',
            overflow: 'hidden',
            maxHeight: '260px',
            overflowY: 'auto'
          }}
        >
          {suggestions.map((item, idx) => {
            const rad = getRadiusById(item.radiusId);
            return (
              <div
                key={idx}
                onClick={() => handleSelect(item)}
                style={{
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  borderBottom: idx < suggestions.length - 1 ? '1px solid #F1F5F9' : 'none',
                  backgroundColor: '#FFFFFF',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ECFDF5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={15} style={{ color: '#059669', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#0F172A', display: 'block' }}>
                      {item.kelurahan ? `Kelurahan ${item.kelurahan}` : `Kecamatan ${item.kecamatan}`}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      Kecamatan {item.kecamatan}, Kota Bandung
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                    {rad.name.split(' (')[0]}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>
                    {formatRupiah(rad.costPerCall)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Selected Radius Feedback Badge */}
      <div style={{ marginTop: '0.45rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#64748B' }}>
        <span>
          Terpilih: <strong>{currentRadius.name}</strong> ({formatRupiah(currentRadius.costPerCall)}/panggilan)
        </span>
      </div>
    </div>
  );
}
