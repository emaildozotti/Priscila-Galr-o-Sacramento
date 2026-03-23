import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const depoimentos = [
  {
    nome: 'M.F.',
    resultado: 'Saí do modo sobrevivência',
    texto: 'Eu funcionava no automático há anos. Trabalhava, cuidava de todo mundo, dormia mal e fingia que estava bem. Com a Priscila aprendi que esse cansaço tinha nome e tinha raiz. Hoje acordo com vontade de coisas que eu tinha esquecido que existiam.',
    destaque: 'Esse cansaço tinha nome. E tinha saída.',
  },
  {
    nome: 'C.R.',
    resultado: 'Aprendi a dizer não sem culpa',
    texto: 'Passei 40 anos colocando todo mundo na frente de mim e achando que era isso que uma boa profissional e boa mãe fazia. O processo com ela foi o primeiro lugar onde eu pude falar coisas que nunca falei em voz alta. Hoje tenho limites reais. E eles não me diminuíram, me salvaram.',
    destaque: 'O primeiro lugar onde pude falar o que nunca falei em voz alta.',
  },
  {
    nome: 'A.B.',
    resultado: 'Voltei a dormir. Voltei a mim.',
    texto: 'Quando cheguei, acordava às 3h da manhã com o coração acelerado sem conseguir desligar. Os médicos diziam que era estresse. Ela chegou à raiz do que estava embaixo disso. Seis meses depois, durmo de corrido pela primeira vez em anos.',
    destaque: 'Ela chegou à raiz do que estava embaixo.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % depoimentos.length)
  const prev = () => setCurrent((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)

  return (
    <section className="bg-dark section-padding">
      <div className="container-ultra">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <p className="eyebrow-ultra text-accent/60 mb-6 block tracking-[0.2em]">Depoimentos</p>
            <h2 className="font-display font-medium text-off-white text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              O que dizem as mulheres que passaram pelo processo
            </h2>
          </div>
        </FadeIn>

        <div className="relative min-h-[480px] md:min-h-[420px]">
          {/* Decorative quote */}
          <span className="absolute -top-20 -left-6 font-display text-[220px] text-accent/5 select-none leading-none pointer-events-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 pt-16"
            >
              <div className="flex flex-col gap-10">
                <span className="font-sans text-accent/80 text-[10px] uppercase tracking-[0.3em] font-semibold">
                  {depoimentos[current].resultado}
                </span>

                <h3 className="font-display text-off-white text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-5xl font-light italic">
                  &ldquo;{depoimentos[current].destaque}&rdquo;
                </h3>

                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 pt-12 border-t border-white/5">
                  <p className="font-sans text-off-white/50 text-base md:text-lg font-light leading-relaxed max-w-xl">
                    {depoimentos[current].texto}
                  </p>
                  <div className="h-px w-12 md:w-px md:h-12 bg-accent/20" />
                  <div className="flex flex-col">
                    <span className="font-display text-off-white text-xl md:text-2xl italic tracking-wide">
                      {depoimentos[current].nome}
                    </span>
                    <span className="font-sans text-off-white/30 text-[10px] uppercase tracking-[0.2em] mt-1">
                      Paciente verificada
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Bottom right style */}
          <div className="absolute bottom-0 right-0 flex items-center gap-6 mt-12 bg-dark py-4 pl-8 z-50 pointer-events-auto">
            <button
              onClick={(e) => {
                e.preventDefault()
                prev()
              }}
              className="group p-4 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/40 hover:border-accent hover:text-accent transition-all duration-500 cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>
            
            <div className="flex gap-3">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrent(i)
                  }}
                  className={`h-1 rounded-full transition-all duration-700 cursor-pointer ${
                    i === current ? 'w-8 bg-accent' : 'w-2 bg-off-white/10'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault()
                next()
              }}
              className="group p-4 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/40 hover:border-accent hover:text-accent transition-all duration-500 cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 6L15 12L9 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
