import { useEffect, useRef, useState } from 'react'

const etapas = [
  {
    numero: "01",
    sigla: "PWD",
    titulo: "Prevailing Wage Determination",
    descricao: "O Department of Labor determina o salário base para a posição e região. Esta etapa é conduzida pela recrutadora parceira.",
    tempo: "4–8 meses",
    icone: "💰"
  },
  {
    numero: "02",
    sigla: "PERM",
    titulo: "Recrutamento & Labor Certification",
    descricao: "A recrutadora conduz o processo de recrutamento obrigatório e prepara a documentação para protocolo do formulário ETA-9089 junto ao DOL.",
    tempo: "6–12 meses",
    icone: "📋"
  },
  {
    numero: "03",
    sigla: "I-140",
    titulo: "Petition for Immigrant Worker",
    descricao: "A recrutadora, em conjunto com os advogados responsáveis, protocola a petição I-140 junto à USCIS. Cada caso é analisado individualmente.",
    tempo: "6–12 meses",
    icone: "📄"
  },
  {
    numero: "04",
    sigla: "VB",
    titulo: "Visa Bulletin",
    descricao: "Período de espera até que a data de prioridade seja alcançada no boletim mensal publicado pelo Department of State. O tempo pode variar.",
    tempo: "Variável",
    icone: "📅"
  },
  {
    numero: "05",
    sigla: "DS-260",
    titulo: "Processo Consular ou Ajuste de Status",
    descricao: "De forma geral, esta etapa envolve o preenchimento do DS-260 (processo consular) ou I-485 (ajuste de status). O caminho adequado depende de cada caso e é definido pelos advogados responsáveis.",
    tempo: "6–12 meses",
    icone: "🏛️"
  },
  {
    numero: "06",
    sigla: "GC",
    titulo: "Green Card",
    descricao: "Etapa final do processo, sujeita à aprovação das autoridades competentes. Não há garantia de resultado. Cada caso é analisado individualmente.",
    tempo: "Conclusão",
    icone: "🇺🇸"
  }
]
function TimelineStep({ etapa, index, isVisible }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`tl-step ${isLeft ? 'tl-left' : 'tl-right'} ${isVisible ? 'tl-visible' : ''}`}>
      <div className="tl-step-content">
        <div className="tl-card">
          <div className="tl-card-top">
            <span className="tl-icone">{etapa.icone}</span>
            <span className="tl-sigla">{etapa.sigla}</span>
          </div>
          <h3 className="tl-card-titulo">{etapa.titulo}</h3>
          <p className="tl-card-desc">{etapa.descricao}</p>
          <div className="tl-tempo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {etapa.tempo}
          </div>
        </div>
      </div>
      <div className="tl-center">
        <div className="tl-numero">{etapa.numero}</div>
      </div>
      <div className="tl-step-spacer" />
    </div>
  )
}

function Timeline() {
  const [visibles, setVisibles] = useState(new Set())
  const stepsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index)
            setVisibles(prev => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.3 }
    )

    stepsRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="tl-section">
      <div className="tl-container">
        <div className="tl-header">
          <p className="tl-eyebrow">Etapas do processo</p>
          <h2 className="tl-titulo">Timeline do Processo EB-3</h2>
         <p className="tl-desc">
            Conheça as etapas gerais do processo EB-3.
            O processo é conduzido pela recrutadora parceira com suporte de advogados especializados.
            Cada caso é analisado individualmente e os prazos podem variar.
          </p>
        </div>

        <div className="tl-timeline">
          <div className="tl-line" />
          {etapas.map((etapa, i) => (
            <div
              key={i}
              ref={el => stepsRef.current[i] = el}
              data-index={i}
            >
              <TimelineStep
                etapa={etapa}
                index={i}
                isVisible={visibles.has(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline