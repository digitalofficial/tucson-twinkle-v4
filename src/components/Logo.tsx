'use client';

export default function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Clean 4-point star — prints on shirts, hats, cards, anything */}
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16Z" fill="#FFD700" />
        <circle cx="20" cy="20" r="4" fill="#1a1a2e" />
        <circle cx="20" cy="20" r="2.5" fill="#FFD700" />
      </svg>
      {showText && (
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: '#FFD700', letterSpacing: '0.08em' }}>
            TUCSON TWINKLE
          </div>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>
            HOLIDAY LIGHTING
          </div>
        </div>
      )}
    </div>
  );
}
