interface ALKGrowthLogoProps {
  className?: string
  size?: number
}

export function ALKGrowthLogo({ className = "", size = 32 }: ALKGrowthLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-xl sm:text-2xl font-bold text-primary">ALK</span>
      <span className="text-xl sm:text-2xl font-normal text-foreground ml-1">Growth</span>
    </div>
  )
}
