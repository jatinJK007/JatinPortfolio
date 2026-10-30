import React from 'react';

interface PortraitCutoutProps {
  className?: string;
}

export const PortraitCutout: React.FC<PortraitCutoutProps> = ({ className = 'h-full w-auto' }) => {
  return (
    <svg
      viewBox="0 0 540 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_24px_48px_rgba(0,0,0,0.95)]`}
      aria-label="Jatin Kumar cutout portrait illustration"
    >
      <defs>
        {/* Skin gradient */}
        <linearGradient id="skinGrad" x1="270" y1="180" x2="270" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d19c79" />
          <stop offset="50%" stopColor="#bf8965" />
          <stop offset="100%" stopColor="#a7704e" />
        </linearGradient>

        {/* Neck shadow */}
        <linearGradient id="neckShadow" x1="270" y1="360" x2="270" y2="470" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8d593c" />
          <stop offset="100%" stopColor="#673d27" />
        </linearGradient>

        {/* Hair gradient */}
        <linearGradient id="hairGrad" x1="270" y1="50" x2="270" y2="350" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#221814" />
          <stop offset="40%" stopColor="#18110e" />
          <stop offset="100%" stopColor="#0c0806" />
        </linearGradient>

        {/* Plaid Shirt Pattern */}
        <pattern id="plaidShirt" width="32" height="32" patternUnits="userSpaceOnUse">
          <rect width="32" height="32" fill="#bfbcc0" />
          <rect width="32" height="4" fill="#3b373e" opacity="0.4" />
          <rect width="4" height="32" fill="#3b373e" opacity="0.4" />
          <rect y="16" width="32" height="2" fill="#2d2830" opacity="0.6" />
          <rect x="16" width="2" height="32" fill="#2d2830" opacity="0.6" />
          <rect y="8" width="32" height="1" fill="#756f7a" opacity="0.5" />
          <rect x="8" width="1" height="32" fill="#756f7a" opacity="0.5" />
        </pattern>

        {/* Rim Light / Coral Glow */}
        <linearGradient id="coralRim" x1="120" y1="100" x2="420" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(8, 92%, 62%)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="hsl(8, 92%, 62%)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Shoulder / Shirt Silhouette */}
      <g id="body">
        {/* Torso background */}
        <path
          d="M70 680 C80 570, 110 500, 170 460 C210 440, 240 450, 270 470 C300 450, 330 440, 370 460 C430 500, 460 570, 470 680 Z"
          fill="url(#plaidShirt)"
        />

        {/* Shirt Collar Placket */}
        <path
          d="M210 448 L270 540 L330 448 L305 440 L270 500 L235 440 Z"
          fill="#312c33"
          stroke="#47414b"
          strokeWidth="2"
        />

        {/* Open Collar Chest Cutout with subtle chest hair styling */}
        <path
          d="M238 440 L270 515 L302 440 Z"
          fill="url(#neckShadow)"
        />
        {/* Button */}
        <circle cx="270" cy="565" r="7" fill="#ece9ed" stroke="#3b373e" strokeWidth="2" />
        <circle cx="270" cy="565" r="2" fill="#69626d" />

        {/* Shirt fold shadows */}
        <path
          d="M165 470 C190 530, 220 580, 230 680"
          stroke="#201c22"
          strokeWidth="4"
          opacity="0.4"
        />
        <path
          d="M375 470 C350 530, 320 580, 310 680"
          stroke="#201c22"
          strokeWidth="4"
          opacity="0.4"
        />
      </g>

      {/* Neck */}
      <g id="neck">
        <path
          d="M215 350 C215 420, 230 470, 270 470 C310 470, 325 420, 325 350 Z"
          fill="url(#neckShadow)"
        />
        {/* Adam's apple contour */}
        <path
          d="M260 410 C270 418, 275 418, 280 410"
          stroke="#55301c"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Head and Ears */}
      <g id="head">
        {/* Ears */}
        <ellipse cx="160" cy="300" rx="18" ry="32" fill="#b98260" transform="rotate(-6 160 300)" />
        <ellipse cx="380" cy="300" rx="18" ry="32" fill="#b98260" transform="rotate(6 380 300)" />
        {/* Gold stud earring on left lobe (viewer's right) */}
        <circle cx="390" cy="318" r="3.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />

        {/* Face Oval Base */}
        <path
          d="M172 260 C165 370, 200 425, 270 425 C340 425, 375 370, 368 260 C365 170, 335 150, 270 150 C205 150, 175 170, 172 260 Z"
          fill="url(#skinGrad)"
        />

        {/* Jawline contour & shading */}
        <path
          d="M176 290 C185 385, 225 422, 270 422 C315 422, 355 385, 364 290"
          stroke="#683d25"
          strokeWidth="3"
          opacity="0.35"
          fill="none"
        />

        {/* Eyebrows */}
        <path
          d="M200 248 C215 240, 240 242, 252 249"
          stroke="#1b120e"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M288 249 C300 242, 325 240, 340 248"
          stroke="#1b120e"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Eyes */}
        <g id="eyes">
          {/* Left Eye */}
          <path d="M208 268 C220 262, 238 262, 248 269 C238 275, 220 275, 208 268 Z" fill="#f8fafc" />
          <circle cx="228" cy="268" r="7" fill="#2d1c16" />
          <circle cx="228" cy="268" r="3.5" fill="#0c0705" />
          <circle cx="230" cy="266" r="1.5" fill="#ffffff" />
          <path d="M206 267 C218 260, 238 260, 250 268" stroke="#160e0a" strokeWidth="2.5" fill="none" />

          {/* Right Eye */}
          <path d="M292 269 C302 262, 320 262, 332 268 C320 275, 302 275, 292 269 Z" fill="#f8fafc" />
          <circle cx="312" cy="268" r="7" fill="#2d1c16" />
          <circle cx="312" cy="268" r="3.5" fill="#0c0705" />
          <circle cx="314" cy="266" r="1.5" fill="#ffffff" />
          <path d="M290 268 C302 260, 322 260, 334 267" stroke="#160e0a" strokeWidth="2.5" fill="none" />
        </g>

        {/* Nose */}
        <path
          d="M268 252 L264 308 C260 316, 250 320, 255 324 C263 328, 277 328, 285 324 C290 320, 280 316, 276 308 L272 252"
          fill="#b57c5a"
          opacity="0.4"
        />
        <path
          d="M256 322 C264 326, 276 326, 284 322"
          stroke="#683d25"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Nostrils */}
        <ellipse cx="261" cy="321" rx="2.5" ry="1.5" fill="#3b2014" />
        <ellipse cx="279" cy="321" rx="2.5" ry="1.5" fill="#3b2014" />

        {/* Moustache and Beard */}
        <g id="beard">
          {/* Moustache */}
          <path
            d="M245 352 C255 342, 268 344, 270 348 C272 344, 285 342, 295 352 C285 356, 274 354, 270 358 C266 354, 255 356, 245 352 Z"
            fill="#18110e"
          />
          {/* Lips */}
          <path
            d="M255 362 C265 366, 275 366, 285 362"
            stroke="#9f5d47"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Soul patch / chin beard */}
          <path
            d="M266 374 C266 384, 274 384, 274 374 Z"
            fill="#18110e"
          />
          <path
            d="M256 392 C260 414, 280 414, 284 392 C276 400, 264 400, 256 392 Z"
            fill="#18110e"
          />
          {/* Stubble along jaw */}
          <path
            d="M192 315 C198 375, 230 416, 270 418 C310 416, 342 375, 348 315"
            stroke="#18110e"
            strokeWidth="5"
            strokeDasharray="2 4"
            opacity="0.65"
            fill="none"
          />
        </g>
      </g>

      {/* Wavy hair (authentic match to photo: messy wavy bangs, locks over ears) */}
      <g id="hair">
        <path
          d="M150 250 
             C140 210, 150 160, 180 120 
             C210 80, 270 70, 320 85 
             C370 100, 400 140, 405 190 
             C415 250, 400 300, 385 330 
             C378 310, 372 260, 370 240 
             C360 210, 340 180, 320 180 
             C300 180, 290 200, 270 195 
             C250 190, 235 170, 215 180 
             C195 190, 185 210, 175 240 
             C165 270, 160 310, 155 330 
             C148 290, 145 265, 150 250 Z"
          fill="url(#hairGrad)"
        />

        {/* Center parted wavy fringe strands */}
        <path
          d="M270 95 C250 140, 230 180, 210 220 C235 200, 260 170, 270 140 C280 170, 305 200, 330 220 C310 180, 290 140, 270 95 Z"
          fill="#1c1410"
        />

        {/* Wavy hair texture highlights */}
        <path
          d="M190 125 C230 105, 280 105, 320 115"
          stroke="#422f27"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M210 150 C240 135, 270 138, 300 145"
          stroke="#38261e"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M170 190 C185 160, 205 145, 220 160"
          stroke="#38261e"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M370 190 C355 160, 335 145, 320 160"
          stroke="#38261e"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Coral rim light edge */}
      <path
        d="M150 250 C140 210, 150 160, 180 120 C210 80, 270 70, 320 85 C370 100, 400 140, 405 190 C415 250, 400 300, 385 330"
        stroke="url(#coralRim)"
        strokeWidth="6"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
};
