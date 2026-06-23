'use client';

import { useEffect, useRef } from 'react';

// Light bulb positions along the roofline of the SVG house
const bulbs = [
  // Left roof slope
  { x: 135, y: 148, color: '#FF4444' },
  { x: 160, y: 133, color: '#FFD700' },
  { x: 185, y: 118, color: '#44FF44' },
  { x: 210, y: 103, color: '#4488FF' },
  { x: 235, y: 88, color: '#FF4444' },
  { x: 260, y: 73, color: '#FFD700' },
  { x: 285, y: 58, color: '#44FF44' },
  // Peak area
  { x: 310, y: 48, color: '#FF4444' },
  { x: 335, y: 43, color: '#FFD700' },
  { x: 360, y: 43, color: '#4488FF' },
  { x: 385, y: 48, color: '#44FF44' },
  // Right roof slope
  { x: 410, y: 58, color: '#FFD700' },
  { x: 435, y: 73, color: '#FF4444' },
  { x: 460, y: 88, color: '#4488FF' },
  { x: 485, y: 103, color: '#44FF44' },
  { x: 510, y: 118, color: '#FFD700' },
  { x: 535, y: 133, color: '#FF4444' },
  { x: 560, y: 148, color: '#4488FF' },
  // Gutterline / eaves
  { x: 140, y: 165, color: '#FFD700' },
  { x: 180, y: 165, color: '#FF4444' },
  { x: 220, y: 165, color: '#44FF44' },
  { x: 260, y: 165, color: '#4488FF' },
  { x: 300, y: 165, color: '#FFD700' },
  { x: 340, y: 165, color: '#FF4444' },
  { x: 380, y: 165, color: '#44FF44' },
  { x: 420, y: 165, color: '#4488FF' },
  { x: 460, y: 165, color: '#FFD700' },
  { x: 500, y: 165, color: '#FF4444' },
  { x: 540, y: 165, color: '#44FF44' },
  { x: 560, y: 165, color: '#4488FF' },
];

export default function HouseWithLights() {
  const bulbRefs = useRef<(SVGCircleElement | null)[]>([]);
  const glowRefs = useRef<(SVGCircleElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current?.closest('section');
      if (!container) return;
      const containerHeight = container.scrollHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / (containerHeight * 0.8)));

      // Turn on lights progressively — each bulb has a threshold
      bulbs.forEach((_, i) => {
        const threshold = i / bulbs.length;
        const on = progress > threshold;
        const opacity = on ? Math.min(1, (progress - threshold) * bulbs.length * 0.5) : 0;

        if (bulbRefs.current[i]) {
          bulbRefs.current[i]!.style.opacity = String(opacity);
        }
        if (glowRefs.current[i]) {
          glowRefs.current[i]!.style.opacity = String(opacity * 0.6);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '5vh', pointerEvents: 'none', zIndex: 2 }}>
      <svg viewBox="0 0 700 450" style={{ width: '80%', maxWidth: '900px', height: 'auto' }} fill="none">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0814" />
            <stop offset="60%" stopColor="#111128" />
            <stop offset="100%" stopColor="#1a1a3e" />
          </linearGradient>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a40" />
            <stop offset="100%" stopColor="#1e1e30" />
          </linearGradient>
        </defs>

        {/* Ground */}
        <rect x="0" y="380" width="700" height="70" fill="#0d0d18" rx="4" />
        <rect x="50" y="375" width="600" height="10" fill="#151525" rx="3" />

        {/* House body */}
        <rect x="120" y="165" width="460" height="215" fill="url(#wall)" rx="3" />

        {/* Roof */}
        <polygon points="100,168 350,35 600,168" fill="#1a1a2e" stroke="#252540" strokeWidth="2" />
        <polygon points="105,168 350,40 595,168" fill="#222240" />

        {/* Door */}
        <rect x="310" y="270" width="80" height="110" fill="#181830" rx="4" stroke="#333355" strokeWidth="1" />
        <circle cx="378" cy="330" r="3" fill="#FFD700" opacity="0.6" />

        {/* Windows — warm glow */}
        <rect x="160" y="210" width="100" height="70" fill="#2a2515" rx="3" stroke="#333355" strokeWidth="1" />
        <rect x="164" y="214" width="44" height="62" fill="#3d3520" rx="1" />
        <rect x="212" y="214" width="44" height="62" fill="#3d3520" rx="1" />

        <rect x="440" y="210" width="100" height="70" fill="#2a2515" rx="3" stroke="#333355" strokeWidth="1" />
        <rect x="444" y="214" width="44" height="62" fill="#3d3520" rx="1" />
        <rect x="492" y="214" width="44" height="62" fill="#3d3520" rx="1" />

        {/* Garage */}
        <rect x="440" y="310" width="120" height="70" fill="#161628" rx="3" stroke="#333355" strokeWidth="1" />
        <line x1="460" y1="315" x2="460" y2="375" stroke="#252540" strokeWidth="1" />
        <line x1="480" y1="315" x2="480" y2="375" stroke="#252540" strokeWidth="1" />
        <line x1="500" y1="315" x2="500" y2="375" stroke="#252540" strokeWidth="1" />
        <line x1="520" y1="315" x2="520" y2="375" stroke="#252540" strokeWidth="1" />
        <line x1="540" y1="315" x2="540" y2="375" stroke="#252540" strokeWidth="1" />

        {/* Chimney */}
        <rect x="430" y="50" width="30" height="60" fill="#1e1e30" stroke="#333355" strokeWidth="1" />

        {/* Bushes */}
        <ellipse cx="170" cy="378" rx="40" ry="18" fill="#0d1a0d" />
        <ellipse cx="250" cy="380" rx="30" ry="14" fill="#0d1a0d" />
        <ellipse cx="530" cy="378" rx="35" ry="16" fill="#0d1a0d" />

        {/* Stars in sky */}
        <circle cx="50" cy="30" r="1" fill="white" opacity="0.4" />
        <circle cx="150" cy="15" r="1.5" fill="white" opacity="0.3" />
        <circle cx="600" cy="25" r="1" fill="white" opacity="0.5" />
        <circle cx="650" cy="50" r="1.2" fill="white" opacity="0.3" />
        <circle cx="80" cy="80" r="0.8" fill="white" opacity="0.4" />
        <circle cx="670" cy="15" r="1" fill="white" opacity="0.35" />

        {/* String lights wire along roofline */}
        <path d="M135,150 Q250,140 350,45 Q450,140 560,150" fill="none" stroke="#333" strokeWidth="1" opacity="0.5" />
        {/* Gutter wire */}
        <line x1="135" y1="167" x2="565" y2="167" stroke="#333" strokeWidth="0.8" opacity="0.4" />

        {/* Light bulbs — each individually controlled */}
        {bulbs.map((bulb, i) => (
          <g key={i}>
            {/* Glow */}
            <circle
              ref={el => { glowRefs.current[i] = el; }}
              cx={bulb.x}
              cy={bulb.y}
              r="12"
              fill={bulb.color}
              opacity="0"
              style={{ filter: 'blur(6px)', transition: 'opacity 0.3s ease' }}
            />
            {/* Bulb */}
            <circle
              ref={el => { bulbRefs.current[i] = el; }}
              cx={bulb.x}
              cy={bulb.y}
              r="4"
              fill={bulb.color}
              opacity="0"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
