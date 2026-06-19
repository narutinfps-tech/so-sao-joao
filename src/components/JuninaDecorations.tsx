import React from 'react';

// Colorful flags banner
export const Bandeirinhas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const colors = [
    '#D9383A', // red
    '#FFC93C', // yellow
    '#2A9D8F', // green
    '#E76F51', // orange
    '#15305B', // navy blue
    '#FFD166', // soft yellow
    '#D9383A', // red
    '#2A9D8F', // green
    '#E76F51', // orange
  ];

  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10 select-none">
        {/* String path */}
        <path 
          d="M0,5 Q150,22 300,12 T600,15 T900,10 T1200,6" 
          fill="none" 
          stroke="rgba(15, 23, 42, 0.25)" 
          strokeWidth="1.5" 
          strokeDasharray="2,2" 
        />
        {/* Flags hanging from calculation points along the curve */}
        {colors.map((color, index) => {
          // Approximate x position
          const x = 50 + index * 130;
          // Curve height approximation (customized per index)
          const y = index % 2 === 0 ? 11 : 14;
          const rotation = (index % 3 - 1) * 3; // soft skew

          return (
            <g key={index} transform={`translate(${x}, ${y}) rotate(${rotation})`}>
              {/* Traditional 5-point flag or split-tail flag */}
              {index % 2 === 0 ? (
                // Traditional triangle flag
                <polygon 
                  points="0,0 24,0 12,28" 
                  fill={color} 
                  className="drop-shadow-sm opacity-95 transition-transform hover:scale-105 duration-300"
                />
              ) : (
                // Swallow-tailed banner
                <polygon 
                  points="0,0 24,0 24,28 12,20 0,28" 
                  fill={color} 
                  className="drop-shadow-sm opacity-95 transition-transform hover:scale-105 duration-300"
                />
              )}
              {/* String attachment dot */}
              <circle cx="1" cy="0" r="1.5" fill="#334155" />
              <circle cx="23" cy="0" r="1.5" fill="#334155" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Warm vector bonfire with simple glowing animation
export const Fogueira: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="select-none animate-glow"
      >
        {/* Wood logs */}
        <g stroke="#5C3D2E" strokeWidth="4.5" strokeLinecap="round">
          <line x1="16" y1="52" x2="48" y2="44" />
          <line x1="48" y1="52" x2="16" y2="44" />
          <line x1="22" y1="56" x2="42" y2="56" />
        </g>
        
        {/* Flame glow behind */}
        <circle cx="32" cy="34" r="14" fill="#FFC93C" opacity="0.35" className="blur-md" />
        
        {/* Outer Fire (Red) */}
        <path 
          d="M32 8C32 8 44 22 44 32C44 40.5 38.5 46 32 46C25.5 46 20 40.5 20 32C20 22 32 8 32 8Z" 
          fill="#D9383A" 
        />
        
        {/* Middle Fire (Orange) */}
        <path 
          d="M32 16C32 16 40 26 40 33C40 39.5 36.5 43 32 43C27.5 43 24 39.5 24 33C24 26 32 16 32 16Z" 
          fill="#E76F51" 
        />
        
        {/* Inner core fire (Yellow) */}
        <path 
          d="M32 23C32 23 37 30 37 35C37 39 34.5 41 32 41C29.5 41 27 39 27 35C27 30 32 23 32 23Z" 
          fill="#FFC93C" 
        />
        
        {/* Sparkles */}
        <circle cx="21" cy="18" r="2" fill="#FFC93C" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="43" cy="22" r="1.5" fill="#E76F51" className="animate-ping" style={{ animationDuration: '2.5s' }} />
        <circle cx="32" cy="4" r="1" fill="#FFC93C" />
      </svg>
    </div>
  );
};

// Traditional June hot air balloon
export const BalaoJunino: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size * 1.3} 
        viewBox="0 0 40 52" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="select-none transition-transform hover:-translate-y-1 hover:rotate-3 duration-500"
      >
        {/* Upper loop */}
        <path d="M20 2V6" stroke="rgba(15, 23, 42, 0.3)" strokeWidth="1" />
        
        {/* Left facet (Dark blue / Teal) */}
        <path d="M20 6L9 18L20 40V6Z" fill="#15305B" />
        
        {/* Right facet (Yellow) */}
        <path d="M20 6L31 18L20 40V6Z" fill="#FFC93C" stroke="#FFC93C" strokeWidth="0.5" />
        
        {/* Inner Left facet (Green) */}
        <path d="M20 12L13 22L20 34V12Z" fill="#2A9D8F" />
        
        {/* Inner Right facet (Red) */}
        <path d="M20 12L27 22L20 34V12Z" fill="#D9383A" />
        
        {/* Lower tails/tassels (Bandeirinhas/fitas) */}
        <path d="M12 40V48" stroke="#D9383A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 40V50" stroke="#FFC93C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 40V48" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Golden diamond sparks */}
        <circle cx="6" cy="14" r="1.2" fill="#FFC93C" />
        <circle cx="34" cy="24" r="1.5" fill="#E76F51" />
      </svg>
    </div>
  );
};

// Cute corn illustration
export const Milho: React.FC<{ size?: number; className?: string }> = ({ size = 44, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        {/* Husk leaves */}
        <path d="M8 24C11 26 21 26 24 24C25 18 23 10 16 4C9 10 7 18 8 24Z" fill="#2A9D8F" opacity="0.8" />
        
        {/* Inner cob (golden yellow) */}
        <ellipse cx="16" cy="15" rx="5" ry="11" fill="#FFC93C" />
        
        {/* Cob texture dots */}
        <circle cx="16" cy="7" r="1" fill="#F5A623" />
        <circle cx="14" cy="10" r="1" fill="#F5A623" />
        <circle cx="18" cy="10" r="1" fill="#F5A623" />
        <circle cx="16" cy="13" r="1" fill="#F5A623" />
        <circle cx="14" cy="15" r="1" fill="#F5A623" />
        <circle cx="18" cy="15" r="1" fill="#F5A623" />
        <circle cx="16" cy="18" r="1" fill="#F5A623" />
        <circle cx="15" cy="21" r="1" fill="#F5A623" />
        <circle cx="17" cy="21" r="1" fill="#F5A623" />
        
        <path d="M11 20C12 21.5 14 26 16 28C18 26 20 21.5 21 20" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Country straw hat
export const ChapeuPalha: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size * 0.8} 
        viewBox="0 0 48 38" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        {/* Hat big brim */}
        <ellipse cx="24" cy="24" rx="20" ry="7" fill="#E5BA73" stroke="#8F6235" strokeWidth="1.5" />
        
        {/* Hat center crown */}
        <path d="M12 24C12 12 16 8 24 8C32 8 36 12 36 24" fill="#C59B53" stroke="#8F6235" strokeWidth="1.5" />
        
        {/* Red decorative ribbon */}
        <path d="M12.5 22C16 23.5 32 23.5 35.5 22C35 20.8 13 20.8 12.5 22Z" fill="#D9383A" />
        
        {/* Patch details */}
        <line x1="28" y1="12" x2="32" y2="12" stroke="#2A9D8F" strokeWidth="1.5" />
        <line x1="30" y1="10" x2="30" y2="14" stroke="#2A9D8F" strokeWidth="1.5" />
        
        {/* Straw frayed ends */}
        <line x1="4" y1="24" x2="2" y2="25" stroke="#8F6235" strokeWidth="1" />
        <line x1="44" y1="24" x2="46" y2="25" stroke="#8F6235" strokeWidth="1" />
        <line x1="24" y1="31" x2="24" y2="33" stroke="#8F6235" strokeWidth="1" />
      </svg>
    </div>
  );
};

// Accordion / Sanfona vectors representing high-converting music culture
export const Sanfona: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        {/* Left keyboard side (Red) */}
        <rect x="5" y="10" width="7" height="28" rx="2" fill="#D9383A" stroke="#5C1F20" strokeWidth="1.5" />
        {/* Left keys */}
        <rect x="9" y="14" width="3" height="4" fill="#FFFFFF" />
        <rect x="9" y="20" width="3" height="4" fill="#FFFFFF" />
        <rect x="9" y="26" width="3" height="4" fill="#FFFFFF" />
        <rect x="9" y="32" width="3" height="4" fill="#FFFFFF" />

        {/* Bellows center ripples (amarelo/gold folds) */}
        <g stroke="#FFC93C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12L16 10L20 12L24 10L28 12L31 10L35 12" />
          <path d="M12 19L16 17L20 19L24 17L28 19L31 17L35 19" />
          <path d="M12 26L16 24L20 26L24 24L28 26L31 24L35 26" />
          <path d="M12 33L16 31L20 33L24 31L28 33L31 31L35 33" />
        </g>
        <path d="M12 10V38H35V10H12Z" fill="rgba(15, 23, 42, 0.08)" />

        {/* Right bass side (Navy blue) */}
        <rect x="35" y="10" width="8" height="28" rx="2" fill="#15305B" stroke="#051020" strokeWidth="1.5" />
        {/* Right key dots */}
        <circle cx="39" cy="15" r="1.5" fill="#FFC93C" />
        <circle cx="41" cy="20" r="1.5" fill="#FFC93C" />
        <circle cx="39" cy="25" r="1.5" fill="#FFC93C" />
        <circle cx="41" cy="30" r="1.5" fill="#FFC93C" />
        <circle cx="39" cy="35" r="1.5" fill="#FFC93C" />
      </svg>
    </div>
  );
};
