import { useEffect, useRef } from 'react'

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Contato() {
  const ref = useFadeIn()

  return (
    <>
      {/* Hero com foto do escritório */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <img
          src="/img/escritorio-frente.jpg"
          alt="Escritório Plural"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/65" />
        <div className="absolute inset-0 flex items-end max-w-7xl mx-auto px-8 pb-16">
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase">Entre em contato</span>
            <h1 className="font-montserrat text-6xl md:text-7xl font-black text-white mt-4 leading-none">
              Contato
            </h1>
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div ref={ref} className="section-fade">
            {/* Cards de contato com divisórias */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-neutral-100 border-y border-neutral-100 mb-2">
              {/* Telefone */}
              <div className="py-12 md:pr-12">
                <span className="text-brand text-xs tracking-[0.4em] uppercase">Telefone</span>
                <div className="mt-5 space-y-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=5519991277992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-900 hover:text-brand transition-colors duration-200 font-medium"
                  >
                    (19) 99127-7992
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5519993792100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-900 hover:text-brand transition-colors duration-200 font-medium"
                  >
                    (19) 99379-2100
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="py-12 md:px-12 border-t border-neutral-100 md:border-t-0">
                <span className="text-brand text-xs tracking-[0.4em] uppercase">Email</span>
                <div className="mt-5">
                  <a
                    href="mailto:contato@construtoraplural.com.br"
                    className="text-neutral-900 hover:text-brand transition-colors duration-200 font-medium break-all"
                  >
                    contato@construtoraplural.com.br
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="py-12 md:pl-12 border-t border-neutral-100 md:border-t-0">
                <span className="text-brand text-xs tracking-[0.4em] uppercase">Escritório</span>
                <div className="mt-5">
                  <a
                    href="https://www.google.com.br/maps/place/Plural+Projetos+e+Constru%C3%A7%C3%B5es+Ltda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-brand transition-colors duration-200 font-medium leading-relaxed"
                  >
                    Praça Marli Evangeline, 723<br />
                    São Lazaro, São João da Boa Vista — SP
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="h-[420px] md:h-[500px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.9514457285422!2d-46.7939274!3d-21.9748265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cb520b988067%3A0x2d6a11e1cf33db80!2sPlural%20Projetos%20e%20Constru%C3%A7%C3%B5es%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1742912090908!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Plural"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
