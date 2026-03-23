import { FadeIn } from '../App'

export default function VideoSection() {
  return (
    <section className="bg-dark section-padding-lg relative overflow-hidden">
      {/* Subtle background glow to add depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-ultra relative z-10">
        <div className="max-w-4xl mx-auto mb-20 md:mb-32 text-center">
          <FadeIn>
            <p className="eyebrow-ultra text-accent mb-8">O Convite</p>
            <h2 className="font-display text-off-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-light mb-10">
              Para as mulheres que sentem que <br /> <span className="italic-accent">chegaram no limite.</span>
            </h2>
            <div className="w-16 h-px bg-accent/30 mx-auto mb-10" />
            <p className="font-sans text-off-white/60 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Expando aqui o que a minha abordagem faz de diferente e <span className="text-off-white italic">por que ela chega onde as outras pararam.</span>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative p-2 md:p-4 rounded-3xl bg-white/5 border border-white/10 shadow-premium backdrop-blur-sm">
              <div 
                className="relative w-full rounded-2xl overflow-hidden bg-black shadow-inner shadow-black/50"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  src="https://www.youtube.com/embed/MG7_0vyoqfY"
                  title="Apresentação Priscila Galrão"
                  className="absolute top-0 left-0 w-full h-full border-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-20 md:mt-32 text-center">
            <p className="font-display text-off-white/40 text-xl font-light italic tracking-wide">
              Clique no vídeo acima para entender o processo de dentro para fora.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
