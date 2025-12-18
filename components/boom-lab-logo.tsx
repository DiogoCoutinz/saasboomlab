import Image from "next/image"

export function BoomLabLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/boomlab-logo.png"
        alt="BoomLab"
        width={105}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </div>
  )
}
