import React from 'react';
import { Building2, Scale, Laptop, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickInfoSection() {
  const services = [
    {
      title: "PTSP (Pelayanan Terpadu Satu Pintu)",
      desc: "Layanan meja terpadu mulai dari Meja Informasi, Pendaftaran Perkara, Pembayaran Kasir, hingga Pengambilan Produk Pengadilan (Akta Cerai/Salinan Putusan).",
      badge: "Layanan Tatap Muka",
      icon: <Building2 size={24} />
    },
    {
      title: "Posbakum (Bantuan Hukum Cuma-cuma)",
      desc: "Ruang konsultasi hukum dan pembuatan surat gugatan / permohonan secara gratis oleh advokat piket bagi masyarakat yang membutuhkan pendampingan teknis hukum.",
      badge: "Gratis 100%",
      icon: <Scale size={24} />
    },
    {
      title: "e-Court Mahkamah Agung RI",
      desc: "Pendaftaran perkara, pembayaran panjar (e-Payment), pemanggilan sidang (e-Summons), dan persidangan secara elektronik (e-Litigation) langsung dari gawai Anda.",
      badge: "Layanan Daring",
      icon: <Laptop size={24} />
    },
    {
      title: "Layanan Prodeo (Biaya Rp 0)",
      desc: "Hak pembebasan biaya panjar perkara bagi masyarakat yang secara ekonomi tidak mampu dengan melampirkan Surat Keterangan Tidak Mampu (SKTM) atau kartu KIS/KKS/PKH.",
      badge: "Bantuan Ekonomi",
      icon: <HeartHandshake size={24} />
    }
  ];

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Komitmen Pelayanan</span>
          <h2 className="section-title">Fasilitas & Bantuan Resmi Pengadilan Agama</h2>
          <p className="section-desc">
            Pengadilan Agama berkomitmen memberikan pelayanan yang ramah, transparan, akuntabel, dan berkeadilan bagi seluruh lapisan masyarakat.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {services.map((item, idx) => (
            <div
              key={idx}
              className="card card-hover"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span className="badge badge-primary">{item.badge}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#0F172A' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.25rem' }}>
                {item.desc}
              </p>
              <Link
                to="/faq"
                style={{ fontSize: '0.85rem', fontWeight: 700, color: '#065F46', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                Pelajari syarat & ketentuan <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
