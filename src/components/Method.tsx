import { FadeIn } from '../App'

const pilares = [
  {
    numero: '01',
    titulo: 'Investigação da Raiz',
    texto: 'Não trabalho apenas o sintoma. A insônia, a irritabilidade, o vazio: são expressões de algo mais profundo. Entendo o padrão que se repete e por que ele existe.',
  },
  {
    numero: '02',
    titulo: 'Construção de Autonomia',
    texto: 'Sessão a sessão, você aprende a nomear o que sente e a reconhecer seus limites antes de transbordar, tomando decisões a partir da clareza.',
  },
  {
    numero: '03',
    titulo: 'Ferramentas para o Dia a Dia',
    texto: 'A profundidade da psicanálise com a praticidade da TCC. Você sai de cada sessão com algo concreto para aplicar na sua rotina.',
  },
]

export default function Method() {
  return (
    <section className="bg-bg-light section-padding relative overflow-hidden">
      {/* Butterfly watermark */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          className="text-primary"
          d="M50 45 C40 30 15 10 10 35 C5 55 30 65 50 50 C70 65 95 55 90 35 C85 10 60 30 50 45Z M50 50 C45 60 35 85 40 90 C45 95 48 70 50 55 C52 70 55 95 60 90 C65 85 55 60 50 50Z"
        />
      </svg>

      <div className="container-ultra relative z-10">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <p className="eyebrow-ultra text-primary/60 mb-6 block tracking-[0.2em]">Abordagem</p>
            <h2 className="font-display font-medium text-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Psicoterapia com <br /> verdade clínica e <span className="italic-accent">resultado.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pilares.map((pilar, i) => (
            <FadeIn key={pilar.numero} delay={i * 0.15}>
              <div className="relative group p-10 lg:p-12 h-full glass-card hover:border-accent/40 transition-all duration-700 rounded-2xl">
                <span className="absolute top-8 right-10 font-display text-5xl text-accent/10 italic">
                  {pilar.numero}
                </span>
                <h3 className="font-display font-medium text-2xl md:text-3xl text-heading mb-8 leading-snug">
                  {pilar.titulo}
                </h3>
                <div className="w-8 h-px bg-accent/30 mb-8 group-hover:w-16 transition-all duration-500" />
                <p className="font-sans text-text-main/70 text-lg font-light leading-relaxed">
                  {pilar.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
