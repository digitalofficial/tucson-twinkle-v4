'use client';

export default function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tucson Twinkle logo"
    >
      {/* House roofline silhouette */}
      <path
        d="M40 72 L100 32 L160 72 L200 52 L260 82 L280 72"
        stroke="#FFF8F0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Eave lines */}
      <path
        d="M40 72 L40 78"
        stroke="#FFF8F0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M280 72 L280 78"
        stroke="#FFF8F0"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* String light cable drooping between points */}
      <path
        d="M55 74 Q72 86 90 74"
        stroke="#FFF8DC"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M90 65 Q110 80 130 62"
        stroke="#FFF8DC"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M130 62 Q148 76 165 68"
        stroke="#FFF8DC"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M175 60 Q195 74 215 64"
        stroke="#FFF8DC"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M215 64 Q235 78 255 70"
        stroke="#FFF8DC"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />

      {/* Glowing light bulbs — gold */}
      <circle cx="60" cy="80" r="4" fill="#FFD700" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="80" r="8" fill="#FFD700" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
      </circle>

      <circle cx="110" cy="76" r="4" fill="#FFD700" opacity="0.9">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="76" r="8" fill="#FFD700" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2.4s" repeatCount="indefinite" />
      </circle>

      <circle cx="195" cy="70" r="4" fill="#FFD700" opacity="0.9">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="195" cy="70" r="8" fill="#FFD700" opacity="0.15">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* Glowing light bulbs — red */}
      <circle cx="82" cy="82" r="4" fill="#DC2626" opacity="0.9">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="82" cy="82" r="8" fill="#DC2626" opacity="0.15">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite" />
      </circle>

      <circle cx="148" cy="72" r="4" fill="#DC2626" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="148" cy="72" r="8" fill="#DC2626" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2.6s" repeatCount="indefinite" />
      </circle>

      <circle cx="245" cy="74" r="4" fill="#DC2626" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="245" cy="74" r="8" fill="#DC2626" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Glowing light bulbs — blue */}
      <circle cx="130" cy="68" r="4" fill="#60A5FA" opacity="0.9">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="68" r="8" fill="#60A5FA" opacity="0.15">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3.2s" repeatCount="indefinite" />
      </circle>

      <circle cx="168" cy="66" r="4" fill="#60A5FA" opacity="0.9">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="168" cy="66" r="8" fill="#60A5FA" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite" />
      </circle>

      <circle cx="225" cy="72" r="4" fill="#60A5FA" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="225" cy="72" r="8" fill="#60A5FA" opacity="0.15">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="2.7s" repeatCount="indefinite" />
      </circle>

      {/* Text — TUCSON TWINKLE */}
      {showText && (
        <>
          <text
            x="160"
            y="112"
            textAnchor="middle"
            fontFamily="Quicksand, sans-serif"
            fontWeight="700"
            fontSize="22"
            fill="#FFD700"
            letterSpacing="3"
          >
            TUCSON TWINKLE
          </text>
          <text
            x="160"
            y="130"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="400"
            fontSize="9"
            fill="#8A8498"
            letterSpacing="2"
          >
            HOLIDAY LIGHT INSTALLATION
          </text>
        </>
      )}
    </svg>
  );
}
