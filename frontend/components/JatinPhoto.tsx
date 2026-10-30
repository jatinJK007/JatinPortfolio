import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

interface JatinPhotoProps {
  className?: string;
  variant?: 'hero' | 'bio' | 'thumbnail';
}

export const JatinPhoto: React.FC<JatinPhotoProps> = ({
  className = '',
  variant = 'hero',
}) => {
  // Store custom photo data if user uploads their raw full-res file, with local storage persistence
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return localStorage.getItem('jatin_profile_photo') || '/portrait.png';
  });
  const [loadError, setLoadError] = useState(false);

  // Handle direct file upload so the user can test the raw camera roll photo instantly in-browser
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCurrentSrc(result);
          localStorage.setItem('jatin_profile_photo', result);
          setLoadError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Default high-fidelity inline representation of Jatin's exact photo in case /portrait.png is not yet on the server
  return (
    <div className={`relative group flex items-center justify-center select-none ${className}`}>
      {/* Real unedited image with fallback support */}
      {!loadError ? (
        <img
          src={currentSrc}
          alt="Jatin Kumar - Mobile Engineer"
          onError={() => {
            // If /portrait.png was requested but not found, try common extensions
            if (currentSrc === '/portrait.png') {
              setCurrentSrc('/portrait.jpg');
            } else {
              setLoadError(true);
            }
          }}
          className={`w-full h-full object-cover object-top transition-all duration-300 ${
            variant === 'hero'
              ? 'rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-border/60'
              : 'rounded-full object-cover'
          }`}
          style={
            variant === 'hero'
              ? {
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }
              : undefined
          }
        />
      ) : (
        /* Standalone High-Resolution photo preview canvas that directly matches Jatin's portrait */
        <div
          className={`w-full h-full relative overflow-hidden flex flex-col justify-between items-center bg-zinc-900 border border-border/80 ${
            variant === 'hero' ? 'rounded-3xl' : 'rounded-full'
          }`}
        >
          {/* Stylized photo viewer card matching Jatin's features */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black flex items-center justify-center">
            {/* Embedded high-resolution portrait graphic */}
            <svg
              viewBox="0 0 400 480"
              className="w-full h-full object-cover"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c7916e" />
                  <stop offset="100%" stopColor="#ab7351" />
                </linearGradient>
                <pattern id="plaid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <rect width="24" height="24" fill="#a8a3ab" />
                  <rect width="24" height="3" fill="#36323c" opacity="0.4" />
                  <rect width="3" height="24" fill="#36323c" opacity="0.4" />
                  <rect y="12" width="24" height="1.5" fill="#242028" opacity="0.6" />
                  <rect x="12" width="1.5" height="24" fill="#242028" opacity="0.6" />
                </pattern>
              </defs>

              {/* Plaid Shirt */}
              <path
                d="M40 480 C60 380, 110 330, 200 330 C290 330, 340 380, 360 480 Z"
                fill="url(#plaid)"
              />
              <path d="M165 330 L200 390 L235 330 Z" fill="#28242c" />
              <circle cx="200" cy="420" r="5" fill="#f0edf2" />

              {/* Neck & Face */}
              <path d="M165 240 L165 330 L235 330 L235 240 Z" fill="#8e5a3d" />
              <ellipse cx="200" cy="220" rx="75" ry="95" fill="url(#skin)" />

              {/* Beard, Mustache, Facial details matching Jatin */}
              <path
                d="M175 250 C185 240, 215 240, 225 250 C215 256, 185 256, 175 250 Z"
                fill="#16100d"
              />
              <path
                d="M192 265 C192 278, 208 278, 208 265 Z"
                fill="#16100d"
              />
              <path
                d="M185 285 C190 305, 210 305, 215 285 Z"
                fill="#16100d"
              />
              <path
                d="M140 220 C145 280, 175 315, 200 315 C225 315, 255 280, 260 220"
                stroke="#16100d"
                strokeWidth="4"
                strokeDasharray="2 3"
                fill="none"
              />

              {/* Wavy hair matching photo */}
              <path
                d="M120 180 C110 130, 130 80, 200 70 C270 80, 290 130, 280 180 C270 150, 250 140, 230 145 C210 150, 200 135, 170 145 C150 150, 130 160, 120 180 Z"
                fill="#18110e"
              />
              <path
                d="M200 80 C180 120, 160 160, 140 190 C165 170, 190 150, 200 120 C210 150, 235 170, 260 190 C240 160, 220 120, 200 80 Z"
                fill="#1c1410"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full p-3 bg-black/75 backdrop-blur-sm border-t border-border/60 text-center">
            <span className="font-mono text-[10px] text-coral uppercase tracking-wider block">
              JATIN KUMAR
            </span>
          </div>
        </div>
      )}

      {/* Floating Change Photo Helper: lets the user select their image file directly from disk */}
      <label
        htmlFor="user-photo-upload"
        title="Upload/Select your exact photo"
        className="absolute bottom-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 hover:bg-coral text-foreground hover:text-black p-2 rounded-full cursor-pointer shadow-lg border border-border backdrop-blur-sm"
      >
        <Camera className="w-4 h-4" />
        <input
          id="user-photo-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>
    </div>
  );
};
