import { BoomLabLogo } from "@/components/boom-lab-logo"
import { Instagram, Linkedin, Facebook } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Quem Somos", href: "#" },
  { label: "Casos de Sucesso", href: "#" },
  { label: "Recrutamento", href: "#" },
  { label: "IA - Inteligência Artificial", href: "#" },
  { label: "Contactos", href: "#" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <BoomLabLogo className="h-9" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Termos & Condições
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500 mt-8">
            © {new Date().getFullYear()} BoomLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
