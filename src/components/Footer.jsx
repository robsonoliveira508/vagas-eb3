function Footer() {
  return (
    <div style={{ background: '#060D18', padding: '56px 24px 40px', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Playfair Display', fontSize: '22px', color: '#C9922A', letterSpacing: '3px', marginBottom: '20px' }}>
        VOLLARE IMMIGRATION
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
        <a href="https://www.youtube.com/@vollareimmigration" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)' }}></i>
        </a>
        <a href="https://www.instagram.com/vollareimmigration/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)' }}></i>
        </a>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px' }} />
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
        Vollare Immigration. Todos os direitos reservados.
      </p>
      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.15)' }}>
        Este site tem finalidade informativa e nao constitui aconselhamento juridico.
      </p>
    </div>
  )
}

export default Footer