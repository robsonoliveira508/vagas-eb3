import { useState } from 'react'
import { custosVida } from '../data/vagas'

function Calculadora() {
  const cidades = custosVida
  const [cidade, setCidade] = useState(Object.keys(cidades)[0])
  const [salarioHora, setSalarioHora] = useState(15.5)
  const [horasSemana, setHorasSemana] = useState(40)

  const custos = cidades[cidade]
  const totalCustos = custos.moradia + custos.alimentacao + custos.transporte + custos.saude + custos.outros
  const salarioMensal = Math.round(salarioHora * horasSemana * 4.33)
  const sobra = salarioMensal - totalCustos
  const percentGasto = Math.min(100, Math.round((totalCustos / salarioMensal) * 100))

  const categorias = [
    { nome: "Moradia", valor: custos.moradia, cor: "#3B52B4", icone: "🏠" },
    { nome: "Alimentação", valor: custos.alimentacao, cor: "#C9922A", icone: "🛒" },
    { nome: "Transporte", valor: custos.transporte, cor: "#2E7D32", icone: "🚗" },
    { nome: "Saúde", valor: custos.saude, cor: "#BF0A30", icone: "🏥" },
    { nome: "Outros", valor: custos.outros, cor: "#666", icone: "📦" }
  ]

  return (
    <section className="calc-section">
      <div className="calc-container">
        <div className="calc-header">
          <p className="calc-eyebrow">Planeje sua vida nos EUA</p>
          <h2 className="calc-titulo">Calculadora de custo de vida</h2>
          <p className="calc-desc">
            Compare seu salário com os custos mensais estimados em cada cidade.
            Valores aproximados em dólares americanos (USD).
          </p>
        </div>

        <div className="calc-grid">
          <div className="calc-controles">
            <div className="calc-card">
              <div className="calc-card-titulo">Configuração</div>

              <div className="calc-grupo">
                <label className="calc-label">Cidade</label>
                <select
                  className="calc-select"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                >
                  {Object.keys(cidades).map(c => (
                    <option key={c} value={c}>{cidades[c].imagem} {c}</option>
                  ))}
                </select>
              </div>

              <div className="calc-grupo">
                <label className="calc-label">
                  Salário por hora
                  <span className="calc-valor-label">${salarioHora.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  min="12"
                  max="25"
                  step="0.25"
                  value={salarioHora}
                  onChange={(e) => setSalarioHora(parseFloat(e.target.value))}
                  className="calc-range"
                />
                <div className="calc-range-limits">
                  <span>$12.00</span>
                  <span>$25.00</span>
                </div>
              </div>

              <div className="calc-grupo">
                <label className="calc-label">
                  Horas por semana
                  <span className="calc-valor-label">{horasSemana}h</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={horasSemana}
                  onChange={(e) => setHorasSemana(parseInt(e.target.value))}
                  className="calc-range"
                />
                <div className="calc-range-limits">
                  <span>20h</span>
                  <span>60h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="calc-resultado">
            <div className="calc-card">
              <div className="calc-card-titulo">Resultado mensal</div>

              <div className="calc-resumo-grid">
                <div className="calc-resumo-box calc-receita">
                  <div className="calc-resumo-label">Receita</div>
                  <div className="calc-resumo-valor">${salarioMensal.toLocaleString()}</div>
                </div>
                <div className="calc-resumo-box calc-despesas">
                  <div className="calc-resumo-label">Despesas</div>
                  <div className="calc-resumo-valor">${totalCustos.toLocaleString()}</div>
                </div>
                <div className={`calc-resumo-box ${sobra >= 0 ? 'calc-positivo' : 'calc-negativo'}`}>
                  <div className="calc-resumo-label">Sobra estimada</div>
                  <div className="calc-resumo-valor">
                    {sobra >= 0 ? '+' : ''}${sobra.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="calc-barra-container">
                <div className="calc-barra-header">
                  <span>Comprometimento da renda</span>
                  <span className="calc-barra-percent">{percentGasto}%</span>
                </div>
                <div className="calc-barra-bg">
                  <div
                    className="calc-barra-fill"
                    style={{
                      width: `${percentGasto}%`,
                      background: percentGasto > 80 ? '#BF0A30' : percentGasto > 60 ? '#C9922A' : '#2E7D32'
                    }}
                  />
                </div>
              </div>

              <div className="calc-categorias">
                {categorias.map((cat, i) => (
                  <div className="calc-cat-item" key={i}>
                    <div className="calc-cat-left">
                      <span className="calc-cat-icone">{cat.icone}</span>
                      <span className="calc-cat-nome">{cat.nome}</span>
                    </div>
                    <div className="calc-cat-right">
                      <span className="calc-cat-valor">${cat.valor}</span>
                      <div className="calc-cat-barra-bg">
                        <div
                          className="calc-cat-barra-fill"
                          style={{
                            width: `${(cat.valor / custos.moradia) * 100}%`,
                            background: cat.cor
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="calc-disclaimer">
          * Valores estimados com base em médias regionais. Custos reais podem variar
          conforme estilo de vida, número de dependentes e localização exata.
        </p>
      </div>
    </section>
  )
}

export default Calculadora