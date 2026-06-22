'use client';

const lights = [
  { top: '8%', left: '5%', size: 3, color: '#FFD700', duration: 3.2, delay: 0 },
  { top: '15%', left: '20%', size: 4, color: '#DC2626', duration: 4.1, delay: 0.5 },
  { top: '12%', left: '35%', size: 2, color: '#60A5FA', duration: 2.8, delay: 1.2 },
  { top: '25%', left: '50%', size: 3, color: '#FFF8DC', duration: 5.0, delay: 0.3 },
  { top: '5%', left: '65%', size: 4, color: '#FFD700', duration: 3.5, delay: 2.0 },
  { top: '18%', left: '80%', size: 2, color: '#DC2626', duration: 4.5, delay: 0.8 },
  { top: '30%', left: '92%', size: 3, color: '#60A5FA', duration: 2.5, delay: 1.5 },
  { top: '40%', left: '10%', size: 2, color: '#FFF8DC', duration: 3.8, delay: 0.7 },
  { top: '35%', left: '25%', size: 4, color: '#FFD700', duration: 4.2, delay: 1.8 },
  { top: '45%', left: '42%', size: 3, color: '#DC2626', duration: 3.0, delay: 0.2 },
  { top: '50%', left: '58%', size: 2, color: '#60A5FA', duration: 5.5, delay: 2.5 },
  { top: '38%', left: '75%', size: 4, color: '#FFD700', duration: 2.9, delay: 1.0 },
  { top: '55%', left: '88%', size: 3, color: '#FFF8DC', duration: 4.0, delay: 0.4 },
  { top: '60%', left: '15%', size: 2, color: '#DC2626', duration: 3.6, delay: 2.2 },
  { top: '65%', left: '30%', size: 4, color: '#60A5FA', duration: 4.8, delay: 0.6 },
  { top: '58%', left: '48%', size: 3, color: '#FFD700', duration: 2.6, delay: 1.3 },
  { top: '70%', left: '62%', size: 2, color: '#FFF8DC', duration: 5.2, delay: 1.9 },
  { top: '68%', left: '78%', size: 4, color: '#DC2626', duration: 3.3, delay: 0.1 },
  { top: '75%', left: '95%', size: 3, color: '#60A5FA', duration: 4.4, delay: 2.8 },
  { top: '80%', left: '8%', size: 2, color: '#FFD700', duration: 3.1, delay: 0.9 },
  { top: '82%', left: '38%', size: 4, color: '#FFF8DC', duration: 5.8, delay: 1.6 },
  { top: '85%', left: '55%', size: 3, color: '#DC2626', duration: 2.4, delay: 2.4 },
  { top: '78%', left: '70%', size: 2, color: '#60A5FA', duration: 4.6, delay: 0.35 },
  { top: '90%', left: '85%', size: 4, color: '#FFD700', duration: 3.7, delay: 1.1 },
  { top: '92%', left: '22%', size: 3, color: '#FFF8DC', duration: 6.0, delay: 2.1 },
];

export default function TwinkleField() {
  return (
    <div className="twinkle-field" aria-hidden="true">
      {lights.map((l, i) => (
        <span
          key={i}
          className="light"
          style={{
            top: l.top,
            left: l.left,
            width: `${l.size}px`,
            height: `${l.size}px`,
            background: l.color,
            boxShadow: `0 0 ${l.size * 2}px ${l.color}, 0 0 ${l.size * 4}px ${l.color}`,
            animationDuration: `${l.duration}s`,
            animationDelay: `${l.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
