import { useState } from 'react'
import { vagas, filtros } from '../data/vagas'
import VagaCard from './VagaCard'

function ListaVagas() {
  const [filtroAtivo, setFiltroAtivo] = useState('all')

  const vagasFiltradas = filtroAtivo === 'all'
    ? vagas
    : vagas.filter(v => v.setor === filtroAtivo)

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">Vagas disponíveis</h2>
        <span className="section-count">
          {vagasFiltradas.length} vaga{vagasFiltradas.length !== 1 ? 's' : ''}
        </span>
      </div>
      <p className="section-sub">
        Clique em qualquer vaga para ver detalhes completos e localização
      </p>

      <div className="filter-bar">
        {filtros.map(f => (
          <button
            key={f.id}
            className={`filter-btn ${filtroAtivo === f.id ? 'active' : ''}`}
            onClick={() => setFiltroAtivo(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map(vaga => (
            <VagaCard key={vaga.id} vaga={vaga} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <p>Nenhuma vaga nesta categoria no momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaVagas