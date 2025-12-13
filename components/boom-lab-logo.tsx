export function BoomLabLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-white font-bold text-2xl tracking-tight">
        b
        <span className="text-cyan-400">∞</span>
        <span className="text-teal-400">m</span>
        r
        <span className="text-xs font-normal text-gray-400 ml-1">lab</span>
      </div>
    </div>
  )
}
