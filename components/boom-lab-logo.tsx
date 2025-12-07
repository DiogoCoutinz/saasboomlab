import Image from "next/image"

export function BoomLabLogo({ className = "h-10" }: { className?: string }) {
  return <Image src="/images/image.png" alt="BoomLab logo" width={180} height={50} className={className} />
}
