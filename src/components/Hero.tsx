import { motion } from 'motion/react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const scrollToDores = () => {
    document.getElementById('dores')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
        {/* Aurora blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-100"
            style={{ background: '#72395e59', animation: 'aurora-1 12s ease-in-out infinite' }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-100"
            style={{ background: '#C49A6C45', animation: 'aurora-2 15s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blur-[90px] opacity-100"
            style={{ background: '#F8F0EB28', animation: 'aurora-3 10s ease-in-out infinite' }}
          />
        </div>

        <div className="container-ultra relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32 md:py-0">
          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            <motion.p
              {...fadeUp}
              transition={{ duration: 1.2, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow-ultra"
            >
              Psicóloga Clínica — CRP 80151
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-off-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
            >
              Vinte anos por dentro da <span className="italic-accent">pressão.</span> <br />
              <span className="italic font-light text-off-white/90">Agora, do outro lado da escuta.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-off-white/70 text-lg md:text-2xl font-light max-w-xl leading-relaxed"
            >
              Psicoterapia individual para mulheres que decidiram que <span className="text-accent underline underline-offset-8 decoration-accent/30 font-medium">sobreviver</span> não é o suficiente. 
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <button
                onClick={scrollToDores}
                className="btn-shimmer bg-primary text-off-white rounded-sm font-sans font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm hover:scale-[1.02]"
              >
                Quero priorizar minha saúde mental
              </button>
            </motion.div>

            {/* Mobile Photo: After button, before end of column */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-8 relative"
            >
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[60px] opacity-40 pointer-events-none" />
              <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10 shadow-premium backdrop-blur-sm">
                <div className="ring-1 ring-white/10 rounded-xl overflow-hidden aspect-square shadow-2xl">
                  <img
                    src="https://i.imgur.com/Nd0ytpp.jpeg"
                    alt="Priscila Galrão Sacramento"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Photo (desktop only) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex justify-end items-center h-full"
          >
            <div className="relative group w-full lg:w-[110%] xl:w-[120%] -mr-20 lg:-mr-32">
              {/* Decorative aura behind photo */}
              <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
              
              <div className="relative p-2 md:p-3 rounded-3xl bg-white/5 border border-white/10 shadow-premium backdrop-blur-sm">
                <div className="ring-1 ring-white/20 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img
                    src="https://i.imgur.com/Nd0ytpp.jpeg"
                    alt="Priscila Galrão Sacramento, Psicóloga"
                    className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator (desktop only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-off-white/30 text-xs font-sans tracking-widest uppercase">Role para baixo</span>
          <div className="w-px h-8 bg-off-white/20" />
        </motion.div>
      </section>
  )
}
