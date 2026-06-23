function EntendaEB3() {
  const categorias = [
    {
      titulo: "Other Workers",
      subtitulo: "EB-3 Unskilled",
      descricao: "Também conhecido como EB-3 Unskilled. Atende trabalhadores sem experiência mínima para ocupar posições de entrada no mercado de trabalho.",
      imagem: "/trabalhador.jpg"
    },
    {
      titulo: "Skilled",
      subtitulo: "EB-3 Skilled",
      descricao: "Para trabalhadores com 2 anos de experiência mínima comprovada numa determinada profissão.",
      imagem: "/cientista.jpg"
    },
    {
      titulo: "Professional",
      subtitulo: "EB-3 Professional",
      descricao: "Dado a trabalhadores com diploma de Bacharelado nos EUA ou equivalente em instituição estrangeira.",
      imagem: "/dev.jpg"
    }
  ]

  return (
    <section className="entenda-section">
      <div className="entenda-container">
        <div className="entenda-header">
          <p className="entenda-eyebrow">Conheça o programa</p>
          <h2 className="entenda-titulo">Entenda o Visto EB-3</h2>
          <p className="entenda-desc">
            É um Green Card para trabalhadores que aceitam oferta de emprego nos EUA.
            Divide-se em 3 categorias:
          </p>
        </div>

        <div className="categorias-grid">
          {categorias.map((cat, i) => (
            <div className="categoria-card" key={i}>
              <div className="categoria-img">
                <img src={cat.imagem} alt={cat.titulo} />
              </div>
              <div className="categoria-body">
                <div className="categoria-subtitulo">{cat.subtitulo}</div>
                <h3 className="categoria-titulo">{cat.titulo}</h3>
                <p className="categoria-desc">{cat.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EntendaEB3