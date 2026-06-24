import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuAberto(false)
    }
  }

  const links = [
    { id: 'entenda', label: 'O Visto EB-3' },
    { id: 'como', label: 'Como Funciona' },
    { id: 'timeline', label: 'Etapas' },
    { id: 'calculadora', label: 'Custo de Vida' },
    { id: 'vagas', label: 'Vagas' },
    { id: 'contato', label: 'Contato' }
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10, 22, 40, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
      padding: scrolled ? '12px 48px' : '20px 48px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <img
          src="/logo.svg"
          alt="Vollare Immigration"
          style={{
            height: scrolled ? '28px' : '34px',
            transition: 'height 0.3s ease',
            cursor: 'pointer',
            filter: 'brightness(5)'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        {/* Desktop */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }} className="nav-desktop">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.65)',
                fontSize: '13px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: '6px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.target.style.color = '#ffffff'
                e.target.style.background = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={e => {
                e.target.style.color = 'rgba(255,255,255,0.65)'
                e.target.style.background = 'none'
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contato')}
            style={{
              background: '#C9922A',
              border: 'none',
              color: '#ffffff',
              fontSize: '13px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              padding: '8px 20px',
              borderRadius: '8px',
              marginLeft: '8px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.target.style.background = '#b07e1f'}
            onMouseLeave={e => e.target.style.background = '#C9922A'}
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuAberto(!menuAberto)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          <span style={{
            width: '24px', height: '2px', background: '#fff', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuAberto ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <span style={{
            width: '24px', height: '2px', background: '#fff', borderRadius: '2px',
            transition: 'all 0.3s',
            opacity: menuAberto ? 0 : 1
          }} />
          <span style={{
            width: '24px', height: '2px', background: '#fff', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuAberto ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuAberto && (
        <div className="nav-mobile-menu" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '4px',
          padding: '16px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: '12px'
        }}>
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '15px',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                padding: '12px 0',
                textAlign: 'left',
                transition: 'color 0.2s'
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contato')}
            style={{
              background: '#C9922A',
              border: 'none',
              color: '#ffffff',
              fontSize: '15px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              padding: '12px 20px',
              borderRadius: '8px',
              marginTop: '8px',
              textAlign: 'center'
            }}
          >
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar