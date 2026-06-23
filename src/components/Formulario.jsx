import { useState } from 'react'

function Formulario() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    whatsapp: '',
    assunto: '',
    mensagem: ''
  })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
  }

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-header">
          <p className="form-eyebrow">Fale conosco</p>
          <h2 className="form-titulo">Entre em contato com nossa equipe</h2>
          <p className="form-desc">
            Tire suas dúvidas sobre o processo EB-3 e descubra como podemos
            ajudar você a conquistar seu Green Card.
          </p>
        </div>

        <div className="form-card">
          {enviado ? (
            <div className="form-sucesso">
              <div className="form-sucesso-icone">✓</div>
              <h3>Mensagem enviada!</h3>
              <p>Nosso time entrará em contato em breve.</p>
            </div>
          ) : (
            <div className="form-grid" role="form">
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-input"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Sobrenome</label>
                  <input
                    type="text"
                    name="sobrenome"
                    className="form-input"
                    placeholder="Seu sobrenome"
                    value={form.sobrenome}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  className="form-input"
                  placeholder="Somente números com DDD"
                  value={form.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Assunto</label>
                <select
                  name="assunto"
                  className="form-input form-select"
                  value={form.assunto}
                  onChange={handleChange}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="vagas">Interesse em vagas EB-3</option>
                  <option value="processo">Dúvidas sobre o processo</option>
                  <option value="valores">Informações sobre valores</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea
                  name="mensagem"
                  className="form-input form-textarea"
                  placeholder="Como podemos ajudar?"
                  rows="4"
                  value={form.mensagem}
                  onChange={handleChange}
                />
              </div>

              <button className="form-btn" onClick={handleSubmit}>
                Enviar mensagem →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Formulario