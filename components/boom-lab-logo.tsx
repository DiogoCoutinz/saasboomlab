import Image from "next/image"

export function BoomLabLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/boomlab-logo.png"
        alt="BoomLab"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>
  )
}
