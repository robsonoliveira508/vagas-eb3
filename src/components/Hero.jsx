import { useEffect, useRef } from 'react'

function Hero() {
  const flagRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      if (flagRef.current) {
        const scroll = window.scrollY
        flagRef.current.style.transform = `translateY(${scroll * 0.4}px)`
        flagRef.current.style.opacity = `${Math.max(0, 1 - scroll * 0.003)}`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hero">

      <div className="hero-flag-wrap" ref={flagRef}>
        <svg
          className="hero-flag"
          viewBox="0 0 1900 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* 13 listras */}
          {[...Array(13)].map((_, i) => (
            <rect
              key={i}
              x="0"
              y={i * 76.9}
              width="1900"
              height="76.9"
              fill={i % 2 === 0 ? '#ffffff' : '#BF0A30'}
              opacity="0.12"
            />
          ))}

          {/* Canton azul */}
          <rect x="0" y="0" width="760" height="538" fill="#002868" opacity="0.18" />

          {/* 50 estrelas */}
          {[
            [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],
            [0,1],[1,1],[2,1],[3,1],[4,1],
            [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],
            [0,3],[1,3],[2,3],[3,3],[4,3],
            [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
            [0,5],[1,5],[2,5],[3,5],[4,5],
            [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
            [0,7],[1,7],[2,7],[3,7],[4,7],
            [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
          ].map(([col, row], i) => {
            const isOddRow = row % 2 !== 0
            const x = 60 + col * 110 + (isOddRow ? 55 : 0)
            const y = 55 + row * 58
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                fontSize="32"
                fill="white"
                opacity="0.3"
              >
                ★
              </text>
            )
          })}
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Programa EB-3 · Green Card</p>
        <h1 className="hero-title">
          Vagas reais.<br />
          Oportunidades <span>verdadeiras</span>.
        </h1>
        <p className="hero-sub">
          Empregadores americanos patrocinando seu Green Card.
          Conheça as posições disponíveis agora.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">47</div>
            <div className="stat-label">Vagas ativas</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">12</div>
            <div className="stat-label">Estados dos EUA</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-label">Green Card</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero