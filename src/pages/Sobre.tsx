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

function PageHero() {
  return (
    <section className="bg-neutral-950 pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <span className="text-brand text-xs tracking-[0.4em] uppercase">Nossa empresa</span>
        <h1 className="font-montserrat text-6xl md:text-7xl font-black text-white mt-4 leading-none">
          Sobre a Plural
        </h1>
      </div>
    </section>
  )
}

function HistoriaSection() {
  const ref = useFadeIn()

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="overflow-hidden">
            <img
              src="/img/ze.jpg"
              alt="José de Assis"
              className="w-full h-[520px] object-cover object-top"
            />
          </div>
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase">Como tudo começou</span>
            <h2 className="font-montserrat text-5xl font-black text-neutral-900 mt-3 mb-8 leading-tight">
              Nossa História
            </h2>
            <div className="space-y-5 text-neutral-400 leading-relaxed">
              <p>
                A paixão pela construção e pela criação de espaços únicos está no
                sangue da nossa família. Somos uma família que juntos fundamos a
                Plural, unindo Arquitetura e Engenharia para transformar ideias em
                realidade.
              </p>
              <p>
                Nossa inspiração vem de nosso pai, José, que dedicou sua vida à
                construção de casas. Com seu talento e dedicação, ele nos ensinou o
                valor do trabalho bem-feito e a importância de cada detalhe na
                construção de um lar.
              </p>
              <p>
                Hoje, seguimos esse legado, combinando tradição e inovação para
                entregar projetos que fazem a diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EngArqSection() {
  const ref = useFadeIn()

  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand text-xs tracking-[0.4em] uppercase">O que nos define</span>
            <h2 className="font-montserrat text-5xl font-black text-neutral-900 mt-3 mb-8 leading-tight">
              Engenharia &amp; Arquitetura
            </h2>
            <div className="space-y-5 text-neutral-400 leading-relaxed mb-12">
              <p>
                Acreditamos que um bom projeto vai além da estética — ele precisa
                ser funcional, seguro e bem planejado. Nossa missão é unir a
                criatividade da Arquitetura com a precisão da Engenharia para criar
                espaços que fazem a diferença.
              </p>
              <p>
                Buscamos sempre inovação, qualidade e soluções personalizadas para
                transformar cada ideia em realidade, com atenção aos detalhes e
                compromisso com a excelência.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-200">
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
          </div>
          <div className="overflow-hidden">
            <img
              src="/img/silas_samuel_2.jpg"
              alt="Silas e Samuel"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function EquipeSection() {
  const ref = useFadeIn()

  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className="section-fade">
          <div className="mb-16 max-w-2xl">
            <span className="text-brand text-xs tracking-[0.4em] uppercase">
              Profissionais qualificados
            </span>
            <h2 className="font-montserrat text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Nossa Equipe
            </h2>
            <p className="text-white/40 leading-relaxed">
              A Plural Projetos e Construções se destaca no ramo da construção civil
              por possuir mão de obra especializada, com profissionais capacitados
              para toda etapa da obra. Desde a concepção do desenho até a entrega
              da chave.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src="/img/plural-burocracia.jpg"
              alt="Nossa Equipe"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Sobre() {
  return (
    <>
      <PageHero />
      <HistoriaSection />
      <EngArqSection />
      <EquipeSection />
    </>
  )
}
