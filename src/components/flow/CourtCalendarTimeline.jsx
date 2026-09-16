import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

// Helper function to add working days (skipping Saturday and Sunday)
function addWorkingDays(startDate, daysToAdd) {
  let currentDate = new Date(startDate);
  let added = 0;
  while (added < daysToAdd) {
    currentDate.setDate(currentDate.getDate() + 1);
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday (0) or Saturday (6)
      added++;
    }
  }
  return currentDate;
}

// Format date in Indonesian: "Kamis, 17 September 2026"
function formatIndoDate(dateObj) {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(dateObj);
}

export default function CourtCalendarTimeline({ caseTitle = "Perkara Gugatan Cerai" }) {
  const [startDateStr, setStartDateStr] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const parsedStartDate = new Date(startDateStr);

  const milestones = [
    {
      step: 1,
      name: "Pendaftaran & Pembayaran Panjar",
      targetDate: parsedStartDate,
      daysOffset: 0,
      description: "Mendaftarkan berkas ke loket Meja 1 PTSP Antapani atau e-Court dan membayar SKUM via Bank/VA.",
      status: "Hari H Pendaftaran",
      badgeColor: "badge-primary"
    },
    {
      step: 2,
      name: "Penetapan Majelis Hakim (PMH) & Hari Sidang (PHS)",
      targetDate: addWorkingDays(parsedStartDate, 3),
      daysOffset: 3,
      description: "Ketua PA Bandung menunjuk Majelis Hakim dan menetapkan tanggal pelaksanaan sidang pertama.",
      status: "+3 Hari Kerja",
      badgeColor: "badge-slate"
    },
    {
      step: 3,
      name: "Penyampaian Relaas Panggilan oleh Jurusita",
      targetDate: addWorkingDays(parsedStartDate, 7),
      daysOffset: 7,
      description: "Jurusita mengantarkan surat panggilan sidang (relaas) ke alamat tempat tinggal para pihak di Kota Bandung.",
      status: "+7 Hari Kerja",
      badgeColor: "badge-slate"
    },
    {
      step: 4,
      name: "Sidang Pertama & Mediasi Wajib",
      targetDate: addWorkingDays(parsedStartDate, 12),
      daysOffset: 12,
      description: "Sidang perdana di ruang sidang PA Bandung. Jika kedua pihak hadir, wajib mediasi selama maksimal 30 hari.",
      status: "+12 Hari Kerja (~2 Minggu)",
      badgeColor: "badge-gold"
    },
    {
      step: 5,
      name: "Sidang Pemeriksaan Bukti & Saksi Keluarga",
      targetDate: addWorkingDays(parsedStartDate, 25),
      daysOffset: 25,
      description: "Pemeriksaan bukti surat asli berleges kantor pos dan mendengar keterangan minimal 2 orang saksi keluarga.",
      status: "+25 Hari Kerja (~4-5 Minggu)",
      badgeColor: "badge-slate"
    },
    {
      step: 6,
      name: "Sidang Pembacaan Putusan Akhir",
      targetDate: addWorkingDays(parsedStartDate, 38),
      daysOffset: 38,
      description: "Majelis Hakim membacakan amar putusan akhir dalam sidang terbuka untuk umum.",
      status: "+38 Hari Kerja (~7-8 Minggu)",
      badgeColor: "badge-primary"
    },
    {
      step: 7,
      name: "Masa Tunggu Inkracht / BHT (14 Hari)",
      targetDate: addWorkingDays(parsedStartDate, 48),
      daysOffset: 48,
      description: "Masa tenggang 14 hari kerja pengajuan banding. Jika tidak ada banding, putusan berkekuatan hukum tetap.",
      status: "+48 Hari Kerja",
      badgeColor: "badge-slate"
    },
    {
      step: 8,
      name: "Penerbitan & Pengambilan Akta Cerai di PTSP",
      targetDate: addWorkingDays(parsedStartDate, 55),
      daysOffset: 55,
      description: "Akta Cerai resmi diterbitkan dan dapat diambil langsung di loket PTSP Jl. Terusan Jakarta No. 120 Antapani.",
      status: "+55 Hari Kerja (~2-3 Bulan)",
      badgeColor: "badge-primary"
    }
  ];

  return (
    <div className="card" style={{ padding: '2rem', marginBottom: '2.5rem', borderLeft: '5px solid var(--primary)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #F1F5F9' }}>
        <div>
          <span className="badge badge-primary" style={{ marginBottom: '0.4rem' }}>
            Inovasi Layanan Publik
          </span>
          <h3 style={{ fontSize: '1.35rem', color: '#0F172A', margin: 0 }}>
            Simulasi Kalender Prediksi Jadwal Persidangan
          </h3>
          <p style={{ margin: '0.25rem 0 0', color: '#64748B', fontSize: '0.875rem' }}>
            Estimasi tanggal riil pelaksanaan tahapan perkara {caseTitle} berdasarkan hari kerja Pengadilan Agama Bandung.
          </p>
        </div>

        {/* Date Picker Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#F8FAFC', padding: '0.6rem 1rem', borderRadius: '10px', border: '1.5px solid #CBD5E1' }}>
          <Calendar size={18} style={{ color: '#065F46' }} />
          <div>
            <label htmlFor="input-simulasi-tgl" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569' }}>
              Rencana Tanggal Pendaftaran:
            </label>
            <input
              id="input-simulasi-tgl"
              type="date"
              value={startDateStr}
              onChange={(e) => setStartDateStr(e.target.value)}
              style={{ border: 'none', background: 'none', fontWeight: 700, color: '#0F172A', fontSize: '0.9rem', outline: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Timeline Steps Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {milestones.map((m) => (
          <div
            key={m.step}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '1.25rem',
              position: 'relative',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <span className={`badge ${m.badgeColor}`} style={{ fontSize: '0.75rem' }}>
                Tahap {m.step}: {m.status}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                {m.step}/8
              </span>
            </div>

            <div style={{ marginBottom: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065F46', fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem' }}>
                <Calendar size={15} />
                <span>{formatIndoDate(m.targetDate)}</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', color: '#0F172A', margin: 0 }}>
                {m.name}
              </h4>
            </div>

            <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.55, margin: 0, flexGrow: 1 }}>
              {m.description}
            </p>
          </div>
        ))}
      </div>

      {/* Advisory footnote */}
      <div style={{ marginTop: '1.5rem', padding: '0.85rem 1rem', backgroundColor: '#FFFBEB', borderRadius: '8px', border: '1px solid #FDE68A', fontSize: '0.8rem', color: '#92400E', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <AlertCircle size={18} style={{ flexShrink: 0 }} />
        <span>
          <strong>Catatan Simulasi:</strong> Jadwal di atas merupakan prediksi waktu rata-rata apabila para pihak hadir tepat waktu dan bersikap kooperatif. Jangka waktu aktual dapat berbeda tergantung kelancaran pemanggilan jurusita dan durasi proses mediasi.
        </span>
      </div>
    </div>
  );
}
