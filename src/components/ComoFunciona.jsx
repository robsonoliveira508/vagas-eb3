function ComoFunciona() {
  const etapas = [
    {
      numero: "01",
      titulo: "Oferta de emprego",
      descricao: "Trabalhadores de todos os níveis podem procurar ofertas de emprego diretamente com Empregadores (Sponsors) pelos meios convencionais ou digitais."
    },
    {
      numero: "02",
      titulo: "Recrutadora de mão-de-obra",
      descricao: "Muitos empregadores preferem usar os serviços de Recrutadoras de Mão-de-Obra para cuidar do processo seletivo de estrangeiros."
    },
    {
      numero: "03",
      titulo: "Processo imigratório",
      descricao: "As recrutadoras cobram entre US$ 14.900 e US$ 23.900 pelos serviços de RH e toda Assessoria Jurídica necessária para cumprir os requisitos do processo."
    },
    {
      numero: "04",
      titulo: "Green Card",
      descricao: "Ao final do processo, você e sua família recebem a residência permanente nos Estados Unidos através do Green Card."
    }
  ]

  return (
    <section className="como-section">
      <div className="como-container">
        <div className="como-header">
          <p className="como-eyebrow">Passo a passo</p>
          <h2 className="como-titulo">Como encontrar uma oferta de emprego</h2>
          <p className="como-desc">
            Vollare conecta os imigrantes às melhores Recrutadoras e ofertas de emprego dos EUA.
          </p>
        </div>

        <div className="etapas-grid">
          {etapas.map((etapa, i) => (
            <div className="etapa-card" key={i}>
              <div className="etapa-numero">{etapa.numero}</div>
              <h3 className="etapa-titulo">{etapa.titulo}</h3>
              <p className="etapa-desc">{etapa.descricao}</p>
            </div>
          ))}
        </div>

        <div className="destaque-box">
          <div className="destaque-icone">✦</div>
          <div className="destaque-content">
            <h3 className="destaque-titulo">Vantagem Vollare</h3>
            <p className="destaque-desc">
              Conectamos você diretamente às melhores recrutadoras parceiras,
              garantindo transparência em cada etapa do processo e suporte
              completo na sua jornada para os Estados Unidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona