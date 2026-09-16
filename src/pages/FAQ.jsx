import React, { useState, useMemo } from 'react';
import { FAQ_CATEGORIES, FAQ_LIST } from '../data/faqData';
import DisclaimerBanner from '../components/layout/DisclaimerBanner';
import { HelpCircle, Search, ChevronDown, ChevronUp, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [expandedId, setExpandedId] = useState('faq_1');

  // Filter FAQ items based on category and search query
  const filteredFaqs = useMemo(() => {
    return FAQ_LIST.filter((item) => {
      const matchCategory =
        selectedCategory === 'semua' || item.category === selectedCategory;
      const matchSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <HelpCircle size={14} />
            <span>Pusat Tanya Jawab Resmi</span>
          </div>
          <h1 className="page-header-title">Pertanyaan yang Sering Diajukan (FAQ)</h1>
          <p className="page-header-desc">
            Temukan jawaban atas pertanyaan umum seputar tata cara berperkara di Pengadilan Agama, dokumen pendukung, panjar biaya perkara, dan hak bantuan hukum gratis.
          </p>
        </div>
      </div>

      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* Live Search Input */}
          <div className="faq-search-box">
            <Search className="faq-search-icon" size={20} />
            <input
              type="text"
              className="faq-search-input"
              placeholder="Cari pertanyaan (contoh: prodeo, nazegelen, cerai talak, saksi)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Cari Pertanyaan FAQ"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="faq-category-pills" role="tablist">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`faq-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div style={{ marginBottom: '2.5rem' }}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;

                return (
                  <div key={faq.id} className="faq-item">
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleExpand(faq.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{faq.question}</span>
                      <div style={{ color: '#065F46', flexShrink: 0 }}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="faq-answer-panel">
                        <p style={{ margin: 0 }}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="card" style={{ padding: '3rem', textAlign: 'center', color: '#64748B' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Tidak ditemukan pertanyaan dengan kata kunci "<strong>{searchTerm}</strong>".
                </p>
                <p style={{ fontSize: '0.875rem', margin: 0 }}>
                  Silakan ganti kata kunci pencarian atau hubungi loket informasi PTSP kami.
                </p>
              </div>
            )}
          </div>

          {/* Posbakum & Prodeo Callout */}
          <div className="card" style={{ padding: '2rem', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#065F46', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HeartHandshake size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#065F46', marginBottom: '0.35rem' }}>
                  Butuh Konsultasi Langsung & Pembuatan Surat Gugatan Gratis?
                </h4>
                <p style={{ color: '#166534', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Kunjungi loket <strong>Pos Bantuan Hukum (Posbakum)</strong> di gedung Pengadilan Agama. Anda berhak mendapatkan layanan konsultasi hukum, advis perkara, dan pengetikan surat gugatan atau permohonan tanpa dipungut biaya sepeser pun.
                </p>
                <Link to="/kontak" className="btn btn-primary btn-sm">
                  <span>Lihat Jam Layanan Posbakum</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
