import { FadeIn } from '../App'

export default function About() {
  return (
    <section className="bg-bg-warm section-padding relative overflow-hidden">
      {/* Butterfly watermark */}
      <svg
        className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none translate-x-1/4 translate-y-1/4"
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
          <div className="max-w-4xl mb-24">
            <p className="eyebrow-ultra text-primary/60 mb-6 block tracking-[0.2em]">Sobre</p>
            <h2 className="font-display font-medium text-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              A psicóloga que viveu a pressão corporativa <br className="hidden md:block" />
              <span className="font-light italic text-text-main/60 block mt-3">antes de entrar no consultório</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          {/* Text area */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="space-y-10">
                <p className="font-sans text-text-main/80 text-lg md:text-2xl font-light leading-relaxed">
                  Trabalhei durante 20 anos com gestão de pessoas no ambiente corporativo. Vi por dentro como a <span className="italic-accent">cultura da performance</span> adoece as mulheres em silêncio. Fui a referência enquanto ignorava meus próprios sinais.
                </p>
                <p className="font-sans text-text-main/70 text-lg md:text-xl font-light leading-relaxed">
                  No pós-pandemia, percebi que minha sensibilidade precisava de um espaço mais profundo. Não bastava cuidar de clima organizacional. <span className="italic font-medium text-heading">Eu precisava chegar à alma.</span> No consultório, combino a bagagem de quem entende a lógica das organizações com a profundidade da psicanálise.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="relative border-l border-primary/20 pl-12 py-4 my-16">
                <p className="font-display text-3xl md:text-4xl text-heading italic leading-snug font-light">
                  "A junção da bagagem corporativa <br /> com a sensibilidade de quem investiga o que dói por dentro."
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                {['CRP 80151', 'Formação em Psicanálise', 'Especialista em TCC', 'Ex-Executiva de RH'].map((badge) => (
                  <span
                    key={badge}
                    className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-primary/60 border border-primary/10 rounded-full px-6 py-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Photo area */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative">
                {/* Decorative background element */}
                <div className="absolute -inset-4 border border-accent/10 rounded-2xl rotate-3 pointer-events-none" />
                <div className="relative bg-bg-light p-3 rounded-2xl shadow-premium border border-white/40">
                  <img
                    src="https://i.imgur.com/UG9jW5B.jpeg"
                    alt="Priscila Galrão Sacramento"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
