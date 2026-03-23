import { FadeIn } from '../App'

const dores = [
  {
    numero: '01',
    frase: '"Acordo cansada mesmo depois de dormir. E não consigo explicar por quê."',
  },
  {
    numero: '02',
    frase: '"Cuido de todo mundo, mas quando alguém me pergunta como eu estou, não sei responder."',
  },
  {
    numero: '03',
    frase: '"Fico irritada por coisas pequenas e depois me odeio por isso."',
  },
  {
    numero: '04',
    frase: '"Tenho tudo que deveria me fazer feliz e mesmo assim sinto um vazio que não passa."',
  },
]

export default function PainPoints() {
  return (
    <section id="dores" className="bg-bg-warm section-padding-lg relative overflow-hidden">
      {/* Decorative texture or subtle shape could go here */}
      <div className="container-ultra relative z-10">
        <FadeIn>
          <div className="max-w-4xl mb-32 lg:mb-40">
            <p className="eyebrow-ultra mb-10 opacity-60">O Cenário</p>
            <h2 className="font-display text-heading text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-medium tracking-tight">
              Eu conheço esse estado. <br />
              <span className="font-light italic text-text-main/50">Vivi por dentro</span> a pressão de ser referência enquanto o corpo pedia pausa.
            </h2>
            <div className="h-px w-24 bg-accent/30 mt-12 mb-10" />
            <p className="font-sans text-text-main/60 text-xl md:text-2xl font-light max-w-2xl leading-relaxed italic">
              O que vi em mim mesma, hoje reconheço em cada mulher que chega ao meu consultório.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {dores.map((dor, i) => (
            <FadeIn key={dor.numero} delay={i * 0.1}>
              <div className="group relative pt-16 h-full transition-all duration-1000">
                {/* Number as a delicate vertical anchor */}
                <div className="absolute top-0 left-0 flex items-center gap-4">
                  <span className="font-display text-2xl text-accent/40 italic font-medium">
                    {dor.numero}
                  </span>
                  <div className="w-8 h-px bg-accent/20 group-hover:w-16 transition-all duration-700" />
                </div>
                
                <div className="relative p-12 md:p-16 rounded-[48px] bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] group-hover:bg-white/40 group-hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.06)] group-hover:-translate-y-3 transition-all duration-1000">
                  {/* Subtle quote icon */}
                  <svg className="absolute top-10 right-12 w-10 h-10 text-accent/10 group-hover:text-accent/20 transition-colors duration-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-heading leading-[1.3] font-light italic tracking-tight">
                    {dor.frase}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-32 md:mt-56 pt-24 border-t border-primary/5 text-center max-w-5xl mx-auto flex flex-col items-center">
            <p className="font-display text-4xl md:text-7xl lg:text-8xl text-heading leading-[1.05] font-medium tracking-tight mb-12">
              Você não está <span className="italic-accent">sozinha.</span>
            </p>
            <div className="w-px h-32 bg-primary/10 mb-12" />
            <p className="font-sans text-text-main/60 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              O próximo passo não é se cobrar mais performance. É entender o que o silêncio está tentando dizer.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
