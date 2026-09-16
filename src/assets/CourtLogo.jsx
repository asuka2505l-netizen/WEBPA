import React from 'react';

export default function CourtLogo({ size = 44, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Resmi Pengadilan Agama"
    >
      {/* Outer shield background */}
      <path
        d="M50 4L88 18V48C88 72 50 94 50 94C50 94 12 72 12 48V18L50 4Z"
        fill="#065F46"
        stroke="#B45309"
        strokeWidth="3.5"
      />
      
      {/* Inner decorative border */}
      <path
        d="M50 9L83 21V48C83 69 50 88 50 88C50 88 17 69 17 48V21L50 9Z"
        stroke="#FDE68A"
        strokeWidth="1.5"
        strokeDasharray="3 2"
        fill="none"
      />

      {/* Central Scales of Justice Pillar */}
      <rect x="48" y="24" width="4" height="46" rx="2" fill="#FEF3C7" />
      <path d="M38 70H62V74H38V70Z" fill="#F59E0B" rx="1" />
      
      {/* Scale Beam */}
      <path d="M26 34L50 28L74 34" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

      {/* Left Pan */}
      <path d="M26 35L20 48H32L26 35Z" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
      <line x1="26" y1="35" x2="20" y2="48" stroke="#B45309" strokeWidth="1" />
      <line x1="26" y1="35" x2="32" y2="48" stroke="#B45309" strokeWidth="1" />

      {/* Right Pan */}
      <path d="M74 35L68 48H80L74 35Z" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
      <line x1="74" y1="35" x2="68" y2="48" stroke="#B45309" strokeWidth="1" />
      <line x1="74" y1="35" x2="80" y2="48" stroke="#B45309" strokeWidth="1" />

      {/* Stars on Top */}
      <circle cx="50" cy="18" r="3.5" fill="#F59E0B" />
      <circle cx="40" cy="20" r="2" fill="#FDE68A" />
      <circle cx="60" cy="20" r="2" fill="#FDE68A" />
    </svg>
  );
}
