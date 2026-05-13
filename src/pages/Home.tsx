import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { src: '/img/foto-carrossel-casa.png', alt: 'Projeto Residencial' },
  { src: '/img/img-carrossel.jpg', alt: 'Projeto Plural' },
  { src: '/img/img-oab-depois.jpg', alt: 'Reforma OAB' },
  { src: '/img/construcao-piscina.jpg', alt: 'Reforma Piscina' },
]

function useFadeIn(threshold = 0.15) {
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
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

function ArrowLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-medium text-neutral-900 hover:text-brand transition-colors duration-300"
    >
      {label}
      <span className="block h-px w-8 bg-neutral-900 group-hover:bg-brand group-hover:w-14 transition-all duration-500" />
    </Link>
  )
}

function Hero() {
  const [current, setCurrent] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay — heavier on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div
        className={`relative h-full flex items-center transition-all duration-1000 delay-200 ${
          ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">
            Engenharia &amp; Arquitetura
          </p>
          <h1 className="font-montserrat text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none mb-8">
            Nós somos<br />
            a <em className="not-italic text-brand">Plural</em>
          </h1>
          <p className="text-white/50 text-lg font-light max-w-sm mb-12 leading-relaxed">
            Uma empresa familiar que transforma ideias em realidade.
          </p>
          <Link
            to="/projetos"
            className="group inline-flex items-center gap-5 text-white text-xs tracking-[0.3em] uppercase font-medium hover:text-brand transition-colors duration-300"
          >
            Ver Projetos
            <span className="block h-px w-10 bg-brand group-hover:w-20 transition-all duration-500" />
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-8 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-px transition-all duration-500 ${
              i === current ? 'w-10 bg-brand' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Slide number */}
      <div className="absolute bottom-10 right-8 hidden md:block text-white/30 text-xs tracking-widest font-light">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useFadeIn()

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/img/silas-e-samuel-1.png"
              alt="Silas e Samuel"
              className="w-full h-[540px] object-cover object-top"
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase">Quem somos</span>
            <h2 className="font-montserrat text-5xl font-black text-neutral-900 mt-3 mb-8 leading-tight">
              Sobre Nós
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10 text-base">
              Nós somos a Plural Engenharia e Arquitetura, uma empresa especializada
              em construção civil e reformas. Trabalhamos com profissionalismo e
              dedicação para satisfazer nossos clientes e consolidar nossa marca a
              partir da execução de projetos com excelência.
            </p>

            {/* Team */}
            <div className="grid grid-cols-2 gap-6 py-8 border-t border-neutral-100 mb-10">
              {[
                { name: 'Silas de Assis', role: 'Arquiteto e Urbanista' },
                { name: 'Samuel de Assis', role: 'Engenheiro Civil' },
              ].map((p) => (
                <div key={p.name}>
                  <p className="font-semibold text-sm text-neutral-900">{p.name}</p>
                  <p className="text-neutral-400 text-xs mt-1">{p.role}</p>
                </div>
              ))}
            </div>

            <ArrowLink to="/sobre" label="Nossa história" />
          </div>
        </div>
      </div>
    </section>
  )
}

function OfficeSection() {
  const ref = useFadeIn()

  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text */}
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase">Venha nos visitar</span>
            <h2 className="font-montserrat text-5xl font-black text-neutral-900 mt-3 mb-8 leading-tight">
              Nosso Escritório
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10 text-base">
              Venha reservar um horário para falar conosco e conhecer melhor nossos
              serviços. Estamos à disposição para discutir suas necessidades e
              apresentar soluções personalizadas para cada projeto.
            </p>
            <Link
              to="/contato"
              className="inline-block border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            >
              Venha nos conhecer
            </Link>
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/img/escritorio-frente.jpg"
              alt="Nosso Escritório"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OfficeSection />
    </>
  )
}
