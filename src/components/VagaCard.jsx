import { useState } from 'react'

function VagaCard({ vaga }) {
  const [aberto, setAberto] = useState(false)
  const [mapaCarregado, setMapaCarregado] = useState(false)
  const [opcao, setOpcao] = useState('A')
  const [imgAtual, setImgAtual] = useState(0)

  function handleToggle() {
    setAberto(!aberto)
    if (!mapaCarregado) setMapaCarregado(true)
  }

  function proximaImg(e) {
    e.stopPropagation()
    setImgAtual((prev) => (prev + 1) % vaga.imagens.length)
  }

  function anteriorImg(e) {
    e.stopPropagation()
    setImgAtual((prev) => (prev - 1 + vaga.imagens.length) % vaga.imagens.length)
  }

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(vaga.mapQuery)}&z=10&output=embed`

  const opcoes = {
    A: {
      parcelas: [
        { etapa: "Assinatura do contrato", valor: "US$ 5.800", tag: "Entrada" },
        { etapa: "LC aprovada (ETA-9089)", valor: "US$ 6.550", tag: "" },
        { etapa: "I-140 aprovado", valor: "US$ 6.550", tag: "" },
        { etapa: "DS-260 / Ajuste de Status", valor: "US$ 5.000", tag: "" }
      ],
      total: "US$ 23.900"
    },
    B: {
      parcelas: [
        { etapa: "Assinatura do contrato", valor: "US$ 3.500", tag: "Entrada" },
        { etapa: "120 dias após assinatura", valor: "US$ 2.300", tag: "" },
        { etapa: "LC aprovada (ETA-9089)", valor: "US$ 6.550", tag: "" },
        { etapa: "I-140 aprovado", valor: "US$ 6.550", tag: "" },
        { etapa: "DS-260 / Ajuste de Status", valor: "US$ 5.000", tag: "" }
      ],
      total: "US$ 23.900"
    }
  }

  const plano = opcoes[opcao]

  return (
    <div className={`vaga-card ${aberto ? 'open' : ''}`}>

      <div className="card-header" onClick={handleToggle}>
        <div className="card-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
        </div>

        <div className="card-info">
          <div className="card-empresa">{vaga.empresa}</div>
          <div className="card-titulo">{vaga.titulo}</div>
          <div className="card-tags">
            <span className="tag tag-local">📍 {vaga.local}</span>
            <span className="tag tag-setor">{vaga.setor.charAt(0).toUpperCase() + vaga.setor.slice(1)}</span>
            <span className="tag tag-tipo">{vaga.tipo}</span>
          </div>
        </div>

        <div className="card-right">
          <div className="card-salario">
            <div className="salario-label">salário</div>
            <div className="salario-valor">{vaga.salario}</div>
            <div className="salario-periodo">{vaga.periodo}</div>
          </div>
          <div className="card-chevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="card-body-inner">

          <div className="card-details">
            <div>
              <div className="detail-label">Sobre a vaga</div>
              <p className="detail-desc">{vaga.descricao}</p>
            </div>

            <div>
              <div className="detail-label">Requisitos</div>
              <div className="detail-items">
                {vaga.requisitos.map((r, i) => (
                  <div className="detail-item" key={i}>
                    <span className="detail-item-icon">✓</span>
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="detail-label">Benefícios</div>
              <div className="detail-items">
                {vaga.beneficios.map((b, i) => (
                  <div className="detail-item" key={i}>
                    <span className="detail-item-icon">★</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-carousel-col">
            <div className="carousel-header">
              <div className="map-city">{vaga.local}</div>
              <div className="map-state">
                {vaga.estado} · {vaga.vagasDisponiveis} vaga{vaga.vagasDisponiveis > 1 ? 's' : ''} disponíve{vaga.vagasDisponiveis > 1 ? 'is' : 'l'}
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-img-wrap">
                <img
                  src={vaga.imagens[imgAtual]}
                  alt={`${vaga.local} - foto ${imgAtual + 1}`}
                  className="carousel-img"
                />
              </div>

              {vaga.imagens.length > 1 && (
                <>
                  <button className="carousel-btn carousel-btn-prev" onClick={anteriorImg}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button className="carousel-btn carousel-btn-next" onClick={proximaImg}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>

                  <div className="carousel-dots">
                    {vaga.imagens.map((_, i) => (
                      <button
                        key={i}
                        className={`carousel-dot ${i === imgAtual ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setImgAtual(i) }}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="carousel-counter">
                {imgAtual + 1} / {vaga.imagens.length}
              </div>
            </div>
          </div>

        </div>

        <div className="invest-section">
          <div className="invest-header">
            <div className="invest-header-left">
              <div className="detail-label" style={{ marginBottom: 0 }}>Investimento do processo</div>
              <div className="invest-sub">Processo Consular ou Ajuste de Status</div>
            </div>
            <div className="invest-tabs">
              <button
                className={`invest-tab ${opcao === 'A' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setOpcao('A') }}
              >
                Opção A
              </button>
              <button
                className={`invest-tab ${opcao === 'B' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setOpcao('B') }}
              >
                Opção B
              </button>
            </div>
          </div>

          <div className="invest-timeline">
            {plano.parcelas.map((p, i) => (
              <div className="invest-step" key={i}>
                <div className="invest-step-dot">
                  <div className="invest-dot" />
                  {i < plano.parcelas.length - 1 && <div className="invest-line" />}
                </div>
                <div className="invest-step-content">
                  <div className="invest-step-top">
                    <span className="invest-etapa">{p.etapa}</span>
                    {p.tag && <span className="invest-tag">{p.tag}</span>}
                  </div>
                  <span className="invest-valor">{p.valor}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="invest-total">
            <span>Valor total do investimento</span>
            <span className="invest-total-valor">{plano.total}</span>
          </div>

          <div className="invest-taxas">
            <div className="invest-taxas-titulo">Taxas governamentais (não inclusas)</div>
            <div className="invest-taxas-grid">
              <div className="invest-taxa-item">
                <span className="invest-taxa-nome">Por processo (taxa única)</span>
                <span className="invest-taxa-valor">US$ 1.315</span>
              </div>
              <div className="invest-taxa-item">
                <span className="invest-taxa-nome">Premium Process (opcional)</span>
                <span className="invest-taxa-valor">US$ 2.965</span>
              </div>
              <div className="invest-taxa-item">
                <span className="invest-taxa-nome">Ajuste de Status (por pessoa)</span>
                <span className="invest-taxa-valor">≈ US$ 2.740</span>
              </div>
              <div className="invest-taxa-item">
                <span className="invest-taxa-nome">Processo Consular (por pessoa)</span>
                <span className="invest-taxa-valor">≈ US$ 765</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-map-full">
          <div className="map-full-header">
            <span>📍 Localização: {vaga.local}, {vaga.estado}</span>
          </div>
          <div className="map-full-embed">
            {mapaCarregado && (
              <iframe
                src={mapUrl}
                title={`Mapa de ${vaga.local}`}
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="card-cta">
          <div className="cta-text">
            Vagas disponíveis: <strong>{vaga.vagasDisponiveis}</strong> &nbsp;·&nbsp; Processo EB-3 Other Workers
          </div>
          <button
            className="btn-interesse"
            onClick={(e) => {
              e.stopPropagation()
              const msg = `Olá Natália, vi no site sobre a vaga de ${vaga.titulo} em ${vaga.local} e gostaria de saber mais...`
              window.open(`https://wa.me/14073498325?text=${encodeURIComponent(msg)}`, '_blank')
            }}
          >
            → Tenho interesse
          </button>
        </div>

      </div>
    </div>
  )
}

export default VagaCard