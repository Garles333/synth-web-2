'use client';

export const CompanyLogos = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  const companies = locale === 'en' 
    ? ["TechnoUSA", "InnovaDigital", "DataNY", "CloudSF", "AIBoston", "QuantumLA"]
    : ["TechnoEspaña", "InnovaDigital", "DataMadrid", "CloudBcn", "AISevilla", "QuantumValencia"];

  return (
    <section className="py-16 px-4 bg-[var(--color-primary-background)] border-y border-[var(--color-border-divider)]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-[var(--color-light-text)] text-sm font-medium mb-8 uppercase tracking-wider">
          {locale === 'en' ? 'Trusted by leading companies' : 'Empresas que confían en nosotros'}
        </h3>
        
        <div className="relative overflow-hidden">
          {/* Scrolling logos container */}
          <div className="flex animate-logoSlide">
            {/* Duplicate companies array for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 flex items-center justify-center"
              >
                <span className="text-white/70 font-light text-xl whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};