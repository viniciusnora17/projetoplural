import { useEffect, useRef, useState } from 'react'

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

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1)
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function PageHero() {
  return (
    <section className="bg-neutral-950 pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <span className="text-brand text-xs tracking-[0.4em] uppercase">Nosso portfólio</span>
        <h1 className="font-montserrat text-6xl md:text-7xl font-black text-white mt-4 leading-none">
          Projetos Plural
        </h1>
        <p className="text-white/30 mt-3 text-sm tracking-wider">Engenharia &amp; Arquitetura</p>
      </div>
    </section>
  )
}

function Stat({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(target)
  return (
    <div ref={ref} className="text-center px-8 py-10">
      <div className="font-montserrat text-6xl md:text-7xl font-black text-neutral-900 tabular-nums">
        {count}{suffix}
      </div>
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mt-3">{label}</p>
    </div>
  )
}

function StatsSection() {
  return (
    <section className="border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 divide-x divide-neutral-100">
          <Stat target={58} label="Projetos Realizados" />
          <Stat target={10} label="Anos de Experiência" />
          <Stat target={95} suffix="%" label="Taxa de Satisfação" />
        </div>
      </div>
    </section>
  )
}

function ProjectSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  const ref = useFadeIn()

  return (
    <section id={id} className="py-20">
      <div ref={ref} className="section-fade max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="font-montserrat text-3xl font-black text-neutral-900 capitalize">
            {title}
          </h2>
          <div className="flex-1 h-px bg-neutral-100" />
        </div>
        {children}
      </div>
    </section>
  )
}

export default function Projetos() {
  return (
    <>
      <PageHero />
      <StatsSection />

      {/* Reforma OAB */}
      <ProjectSection id="reforma-oab" title="Reforma OAB">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="relative overflow-hidden group">
            <img
              src="/img/oab-antes.jpg"
              alt="OAB Antes"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 text-xs tracking-[0.3em] uppercase text-white/70 font-medium">
              Antes
            </span>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="/img/img-oab-depois.jpg"
              alt="OAB Depois"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 text-xs tracking-[0.3em] uppercase text-brand font-medium">
              Depois
            </span>
          </div>
        </div>
      </ProjectSection>

      {/* Projeto Biagio */}
      <ProjectSection title="Projeto Biagio">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="overflow-hidden group">
            <img
              src="/img/obra-biagio.jpg"
              alt="Obra Biagio"
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden group flex-1">
              <img
                src="/img/construcao-bagio.jpg"
                alt="Construção Biagio"
                className="w-full h-full min-h-[136px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden group flex-1">
              <img
                src="/img/img-construcao.jpg"
                alt="Construção"
                className="w-full h-full min-h-[136px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="overflow-hidden group">
            <img
              src="/img/projeto-de-torre.jpg"
              alt="Projeto de Torre"
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </ProjectSection>

      {/* Reforma Piscina */}
      <ProjectSection title="Reforma Piscina">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: '/img/construcao-piscina.jpg', alt: 'Construção Piscina' },
            { src: '/img/adicao-piso-piscina.jpg', alt: 'Adição de Piso' },
            { src: '/img/img-piscina.jpg', alt: 'Piscina' },
            { src: '/img/piscina.jpg', alt: 'Piscina Final' },
          ].map((img) => (
            <div key={img.src} className="overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-52 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </ProjectSection>

      <div className="pb-12" />
    </>
  )
}
