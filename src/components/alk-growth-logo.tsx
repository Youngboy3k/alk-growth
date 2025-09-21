interface ALKGrowthLogoProps {
  className?: string
  size?: number
}

export function ALKGrowthLogo({ className = "", size = 32 }: ALKGrowthLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ALK Text */}
      <text
        x="0"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
        className="text-primary"
      >
        ALK
      </text>
      
      {/* Growth Text */}
      <text
        x="50"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="400"
        fill="currentColor"
        className="text-foreground"
      >
        Growth
      </text>
      
      {/* AI Symbol - Modern Geometric Design */}
      <g transform="translate(120, 8)">
        {/* Background Circle */}
        <circle
          cx="12"
          cy="12"
          r="12"
          fill="currentColor"
          className="text-primary/20"
        />
        
        {/* Letter 'A' - Geometric */}
        <path
          d="M6 20 L10 8 L14 20 M8 16 L12 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-primary"
        />
        
        {/* Letter 'I' - Geometric */}
        <path
          d="M18 8 L18 20 M18 6 L18 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-primary"
        />
      </g>
    </svg>
  )
}
