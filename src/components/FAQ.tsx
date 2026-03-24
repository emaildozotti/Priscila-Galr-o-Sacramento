import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const faqs = [
  {
    pergunta: 'Quanto tempo dura o processo terapêutico?',
    resposta: 'Não existe resposta única. Cada pessoa tem seu ritmo e sua profundidade de demanda. O plano terapêutico é desenhado de forma individual — considerando sua história, seus objetivos e o momento de vida que você está atravessando. O que posso garantir é que o processo tem direção: trabalhamos com objetivos claros, revisados periodicamente. Algumas mulheres percebem mudanças significativas nos primeiros meses. Outras precisam de mais tempo para chegar à raiz. O comprometimento com o processo é mais importante do que a velocidade.',
  },
  {
    pergunta: 'Não tenho tempo para mais uma coisa na minha agenda. Como encaixar?',
    resposta: 'A terapia não é mais uma tarefa. É o investimento que otimiza todas as outras. Quando existe clareza emocional, as decisões ficam mais rápidas, a energia se redistribui, e o tempo que antes era consumido pela ansiedade volta a ser produtivo. Atendo online com flexibilidade de horário.',
  },
  {
    pergunta: 'Já fiz terapia antes e não funcionou. O que garante que será diferente?',
    resposta: 'Abordagens diferentes chegam a profundidades diferentes. Se a terapia anterior ficou na superfície, não foi culpa sua. A combinação de psicanálise com TCC investiga a raiz (por que o padrão se repete) e ao mesmo tempo constrói ferramentas práticas. A experiência de 20 anos no mundo corporativo me permite entender seu contexto sem que você precise explicar o óbvio.',
  },
  {
    pergunta: 'Qual o valor da sessão?',
    resposta: 'Os valores são discutidos diretamente e de forma transparente na primeira conversa pelo WhatsApp. O investimento é proporcional à profundidade e individualização do atendimento. O custo de continuar no esgotamento tem um preço que o corpo e os relacionamentos já estão pagando.',
  },
  {
    pergunta: 'E se o problema for a outra pessoa?',
    resposta: 'Muitas mulheres chegam ao consultório dizendo que o problema é o chefe, o marido, a mãe, a sogra. E em parte, é. Mas o processo terapêutico investiga o que está ao seu alcance: como você reage, o que tolera, onde seus limites cedem. Não se trata de culpar você. Se trata de devolver o poder de escolha. Porque quando você muda a forma como se posiciona, todas as relações ao redor mudam também.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-ultra">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <p className="eyebrow-ultra text-primary/60 mb-6 block tracking-[0.2em]">Perguntas Frequentes</p>
            <h2 className="font-display font-medium text-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Dúvidas comuns antes de começar
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="border-b border-primary/10">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-10 text-left group transition-all duration-300"
                >
                  <span className="font-display text-2xl md:text-3xl font-medium text-heading pr-8 group-hover:text-accent transition-colors leading-tight">
                    {faq.pergunta}
                  </span>
                  <div className={`p-3 rounded-full border border-primary/5 group-hover:border-accent/20 transition-all duration-500 ${
                    openIndex === i ? 'bg-primary/5 border-primary/20' : ''
                  }`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className={`text-primary transition-transform duration-700 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    >
                      <path d="M6 9L12 15L18 9" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 max-w-3xl">
                        <p className="font-sans text-text-main/60 text-lg md:text-xl font-light leading-relaxed pl-10 border-l border-accent/20">
                          {faq.resposta}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
