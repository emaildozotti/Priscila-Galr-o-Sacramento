import { FadeIn } from '../App'

const passos = [
  {
    numero: '01',
    titulo: 'Escuta e Acolhimento',
    texto: 'Criação de um espaço seguro e sem julgamento. Nas sessões iniciais, meu papel é ouvir sua história, suas dores e identificar seus padrões.',
  },
  {
    numero: '02',
    titulo: 'Investigação e Compreensão',
    texto: 'Com a aliança estabelecida, investigamos a raiz: por que a exaustão volta? Por que os limites cedem? Mudança começa ao entender, não apenas sentir.',
  },
  {
    numero: '03',
    titulo: 'Reestruturação e Autonomia',
    texto: 'Construção de novas respostas, limites saudáveis e decisões conscientes. O objetivo é que você conquiste autonomia real para lidar com a vida.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-bg-warm section-padding relative overflow-hidden">
      <div className="container-ultra relative z-10">
        <FadeIn>
          <div className="max-w-4xl mb-24 lg:mb-32">
            <p className="eyebrow-ultra text-primary/60 mb-6 block tracking-[0.2em]">O Processo</p>
            <h2 className="font-display font-medium text-heading text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-10">
              Seu processo terapêutico <br /> em <span className="italic-accent">3 etapas</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative space-y-12 md:space-y-20 max-w-5xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[34px] md:left-1/2 top-10 bottom-10 w-px bg-primary/10 -translate-x-1/2 hidden md:block" />
          
          {passos.map((passo, i) => (
            <FadeIn key={passo.numero} delay={i * 0.15}>
              <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Visual anchor point on line */}
                <div className="absolute left-[34px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary/20 bg-bg-warm z-20 hidden md:block" />
                
                {/* Content side */}
                <div className="w-full md:w-1/2">
                  <div className="group relative p-10 lg:p-12 glass-card hover:border-accent/40 transition-all duration-700 rounded-[32px]">
                    <span className="font-display text-xs tracking-widest text-accent/60 mb-6 block uppercase font-semibold">
                      Etapa {passo.numero}
                    </span>
                    
                    <h3 className="font-display font-medium text-2xl md:text-4xl text-heading mb-6 leading-tight">
                      {passo.titulo}
                    </h3>
                    
                    <p className="font-sans text-text-main/60 text-lg md:text-xl font-light leading-relaxed">
                      {passo.texto}
                    </p>
                  </div>
                </div>
                
                {/* Empty side for balance */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-32 md:mt-48 flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-px h-24 bg-primary/20 mb-12" />
            <p className="font-sans text-text-main/60 text-lg md:text-xl font-light leading-relaxed italic">
              Não existe prazo fixo. Cada processo tem seu tempo. Garanto que cada sessão terá direção, verdade e respeito pela sua subjetividade.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
