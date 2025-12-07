export function LogoCarousel() {
  const logos = ["TechCorp", "FinanceHub", "DataFlow", "CloudPro", "SmartBiz"]

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 text-center text-sm mb-8 uppercase tracking-wider">
          Empresas que confiam na BoomLab
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-gray-500 hover:text-gray-300 transition-colors text-xl md:text-2xl font-semibold tracking-wide"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
