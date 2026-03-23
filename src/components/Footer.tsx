import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5521988967205?text=Olá%20Priscila%2C%20quero%20conversar%20sobre%20meu%20processo%20terapêutico'

export default function Footer() {
  return (
    <footer className="bg-dark py-16 md:py-24">
      <div className="container-ultra text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-medium text-off-white text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8">
              Vinte anos da pressão à escuta.{' '}
              <span className="italic font-light text-accent block mt-4">E agora, um espaço para você.</span>
            </h2>
            <p className="font-sans text-off-white/70 text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed">
              Sua trajetória merece um espaço de escuta profissional. Vamos conversar?
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-primary text-off-white rounded-sm font-sans font-medium tracking-widest uppercase text-sm hover:bg-primary-dark transition-colors inline-flex px-8 py-4"
          >
            Falar com Priscila no WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-28 md:mt-32 pt-12 border-t border-off-white/10 flex flex-col items-center">
            <p className="font-display text-off-white/50 text-2xl md:text-3xl italic mb-3">
              Priscila Galrão Sacramento
            </p>
            <p className="font-sans text-accent/60 text-sm tracking-widest uppercase mb-6 font-semibold">
              Psicóloga CRP 80151
            </p>
            <p className="font-sans text-off-white/30 text-sm font-light">
              Atendimento individual online e presencial
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
