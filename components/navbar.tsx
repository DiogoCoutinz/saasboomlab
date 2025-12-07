"use client"

import { Button } from "@/components/ui/button"
import { BoomLabLogo } from "@/components/boom-lab-logo"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <BoomLabLogo />
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-medium px-6 py-2 rounded-lg transition-all duration-300 bg-transparent"
          >
            Vamos começar?
          </Button>
          <button className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  )
}
