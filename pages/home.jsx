/* global React, FastenerSVG */
const { useState: useStateHome } = React;

// ============ HOME PAGE ============
const HomePage = ({ onNav }) => {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div>
                <div className="hero-eyebrow">
                  <span className="bar"></span>
                  <span>EST. 1978 · IRAPUATO, GTO. · TIER 2 AUTOMOTRIZ</span>
                </div>
                <h1 className="hero-headline">
                  Sujeción técnica<br />
                  certificada <em>IATF&nbsp;16949</em><br />
                  con proceso vertical<br />
                  bajo un mismo techo.
                </h1>
                <p className="hero-sub">
                  Fabricamos tornillos, pernos y sujetadores especiales en normas JIS, SAE, DIN, ASME, ANSI y diseño a plano. Forja en frío, roladoras, tratamiento térmico y galvanizado propios — trazabilidad lote por lote y PPAP completo para Tier 1 y OEM.
                </p>
              </div>
              <div className="hero-ctas">
                <button className="btn btn-primary btn-lg" onClick={() => onNav("contacto")}>
                  Solicitar cotización <span className="arrow">→</span>
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => onNav("catalogo")}>
                  Ver catálogo
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="placeholder"></div>
              <div className="ph-label">Forja en frío · Línea principal · Irapuato, Gto.</div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-pulse"></div>
            <div className="hero-stat-label">Tolerancia mínima</div>
            <div className="hero-stat-value">±0.05<span className="unit">mm</span></div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Diámetros</div>
            <div className="hero-stat-value">M3 — M24</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Capacidad mensual</div>
            <div className="hero-stat-value">42M<span className="unit">pzs</span></div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">PPAP nivel</div>
            <div className="hero-stat-value">3 / 4 / 5</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Lead time típico</div>
            <div className="hero-stat-value">4–6<span className="unit">sem</span></div>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="section section-bone">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="kicker"><span className="dot"></span><span>01 / Industrias atendidas</span></div>
              <h2 className="section-title" style={{marginTop:16}}>Sujeción especializada por sector.</h2>
            </div>
            <p className="section-lede">
              Cada industria opera bajo normas, ciclos de validación y exigencias de trazabilidad distintas. Adaptamos proceso, control y documentación al sector que atendemos.
            </p>
          </div>
          <div className="industrias-grid">
            <div className="industria-card" onClick={() => onNav("automotriz")}>
              <div className="industria-num">01</div>
              <div className="industria-arrow">→</div>
              <div className="industria-img">
                <div className="placeholder"></div>
                <div className="ph-label">Línea OEM · Bastidor</div>
              </div>
              <h3 className="industria-title">Automotriz</h3>
              <p className="industria-desc">
                OEM y Tier 1 — sujeción para bastidor, suspensión, motor y carrocería bajo IATF 16949 con PPAP nivel 3+.
              </p>
              <div className="industria-norms">
                <span className="industria-norm">SAE J429</span>
                <span className="industria-norm">DIN 933</span>
                <span className="industria-norm">JIS B1180</span>
                <span className="industria-norm">PPAP</span>
              </div>
            </div>
            <div className="industria-card">
              <div className="industria-num">02</div>
              <div className="industria-arrow">→</div>
              <div className="industria-img">
                <div className="placeholder"></div>
                <div className="ph-label">Tablero eléctrico · Ensamble</div>
              </div>
              <h3 className="industria-title">Eléctrica</h3>
              <p className="industria-desc">
                Sujeción dieléctrica y de alta resistencia para gabinetes, transformadores y subestaciones. Acabados anti-corrosión.
              </p>
              <div className="industria-norms">
                <span className="industria-norm">ASME B18</span>
                <span className="industria-norm">ANSI</span>
                <span className="industria-norm">DIN 7991</span>
                <span className="industria-norm">NOM</span>
              </div>
            </div>
            <div className="industria-card">
              <div className="industria-num">03</div>
              <div className="industria-arrow">→</div>
              <div className="industria-img">
                <div className="placeholder"></div>
                <div className="ph-label">Línea blanca · Subensamble</div>
              </div>
              <h3 className="industria-title">Electrodoméstica</h3>
              <p className="industria-desc">
                Tornillería para línea blanca, calentadores y equipo de cocción. Volúmenes altos con consistencia lote a lote.
              </p>
              <div className="industria-norms">
                <span className="industria-norm">JIS B1111</span>
                <span className="industria-norm">DIN 912</span>
                <span className="industria-norm">Make to Print</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades preview */}
      <section className="section section-navy">
        <div className="container">
          <div className="section-header dark">
            <div>
              <div className="kicker" style={{color:"var(--yellow)"}}><span className="dot" style={{background:"var(--yellow)"}}></span><span>02 / Proceso vertical</span></div>
              <h2 className="section-title" style={{marginTop:16, color:"white"}}>De alambrón a pieza terminada,<br/>sin salir de planta.</h2>
            </div>
            <p className="section-lede" style={{color:"var(--navy-200)"}}>
              Controlamos las seis etapas críticas del proceso. Sin maquila externa, sin variabilidad ajena: tiempos de respuesta, costos y trazabilidad bajo nuestro propio sistema de calidad.
            </p>
          </div>
          <div className="process-flow">
            {[
              ["01", "Forja en frío", "Cabeceado y formado en una sola operación. Conserva la fibra del material."],
              ["02", "Roladoras", "Generación de rosca por deformación. Mayor resistencia que rosca cortada."],
              ["03", "Tratamiento térmico", "Templado y revenido propios. Control de dureza Rockwell pieza por pieza."],
              ["04", "Galvanizado", "Línea propia: galvanizado, fosfatado, niquelado. Sin maquila."],
              ["05", "Segundos procesos", "Maquinado, perforado, marcado láser y ensambles especiales."],
              ["06", "Control IATF", "Inspección dimensional, salt spray, torque y trazabilidad lote por lote."],
            ].map(([n, t, d]) => (
              <div key={n} className="process-step">
                <div className="process-num">{n}</div>
                <div className="process-title">{t}</div>
                <div className="process-desc">{d}</div>
                <div className="process-arrow"></div>
              </div>
            ))}
          </div>
          <table className="cap-table">
            <thead>
              <tr>
                <th style={{width:"22%"}}>Parámetro</th>
                <th>Rango</th>
                <th>Notas técnicas</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Diámetro nominal</td><td className="num">M3 — M24 / #4 — 1"</td><td>Forja en frío hasta M16 · Maquinado para diámetros mayores</td></tr>
              <tr><td>Longitud</td><td className="num">6 — 250 mm</td><td>Tolerancia ±0.5 mm en longitudes hasta 100 mm</td></tr>
              <tr><td>Materiales</td><td className="num">SAE 1018 · 1038 · 4140 · 304 · 316</td><td>Aceros al carbono, aleados e inoxidables</td></tr>
              <tr><td>Acabados</td><td className="num">Galvanizado · Fosfatado · Niquelado · Negro</td><td>Salt spray ASTM B117 · 96 — 720 hrs según especificación</td></tr>
              <tr><td>Dureza</td><td className="num">Grado 5 · 8 · 10.9 · 12.9</td><td>Tratamiento térmico y revenido propios</td></tr>
            </tbody>
          </table>
          <div style={{marginTop: 40, display:"flex", gap:12}}>
            <button className="btn btn-primary" onClick={() => onNav("capacidades")}>
              Ver capacidades completas <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Respaldo */}
      <section className="respaldo">
        <div className="container">
          <div className="section-header dark" style={{borderBottom:"none", marginBottom:48}}>
            <div>
              <div className="kicker" style={{color:"var(--yellow)"}}><span className="dot" style={{background:"var(--yellow)"}}></span><span>03 / Respaldo</span></div>
              <h2 className="section-title" style={{marginTop:16, color:"white"}}>46 años fabricando<br/>en México.</h2>
            </div>
            <p className="section-lede" style={{color:"var(--navy-200)"}}>
              Operación familiar de tercera generación. Tres plantas, ochenta colaboradores, infraestructura propia y reconocimientos vigentes a 2026.
            </p>
          </div>
          <div className="respaldo-grid">
            <div className="respaldo-cell">
              <div className="respaldo-num">46<span className="small accent"> años</span></div>
              <div className="respaldo-label">Operación continua</div>
              <div className="respaldo-detail">Fundada en 1978 por Don Rafael de Alba en Irapuato.</div>
            </div>
            <div className="respaldo-cell">
              <div className="respaldo-num">$7<span className="small">M USD</span></div>
              <div className="respaldo-label">Facturación anual</div>
              <div className="respaldo-detail">Crecimiento sostenido en cuenta automotriz Tier 1.</div>
            </div>
            <div className="respaldo-cell">
              <div className="respaldo-num">3<span className="small accent"> sucursales</span></div>
              <div className="respaldo-label">Cobertura nacional</div>
              <div className="respaldo-detail">Irapuato (matriz) · CDMX · Guadalajara.</div>
            </div>
            <div className="respaldo-cell">
              <div className="respaldo-num">80<span className="small">+</span></div>
              <div className="respaldo-label">Colaboradores</div>
              <div className="respaldo-detail">ESR 6 años consecutivos · Metas ESR 2030.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calidad teaser */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="kicker"><span className="dot"></span><span>04 / Calidad y certificaciones</span></div>
              <h2 className="section-title" style={{marginTop:16}}>Auditoría continua,<br/>documentación al día.</h2>
            </div>
            <p className="section-lede">
              IATF 16949:2016 vigente. PPAP, planes de control y trazabilidad para cada lote producido. Reconocimientos institucionales y compromiso ambiental verificado.
            </p>
          </div>
          <div className="cert-grid">
            {[
              ["IATF", "IATF 16949:2016", "Vigente 2026"],
              ["ISO", "ISO 9001:2015", "Vigente 2026"],
              ["ISO", "ISO 14001:2015", "Vigente 2026"],
              ["ESR", "Empresa Socialmente Responsable", "6 años consecutivos"],
              ["MG", "Marca Guanajuato", "Acreditada"],
              ["EX", "Premio Excelencia CLAUGTO", "2023"],
            ].map(([m, n, meta]) => (
              <div key={n} className="cert-card">
                <div className="cert-mark">{m}</div>
                <div className="cert-name">{n}</div>
                <div className="cert-meta">{meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="section section-bone">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="kicker"><span className="dot"></span><span>05 / Blog técnico</span></div>
              <h2 className="section-title" style={{marginTop:16}}>Notas de ingeniería.</h2>
            </div>
            <p className="section-lede">
              Material de referencia para ingenieros de compras y manufactura: comparativas de norma, criterios de selección y procesos internos.
            </p>
          </div>
          <div className="blog-grid">
            {[
              ["IATF 16949", "8 min", "SAE J429 vs DIN 933: cuándo elegir cada norma en una BOM mixta", "Comparativa práctica entre los dos sistemas más comunes en plantas multinacionales en México."],
              ["Procesos", "12 min", "PPAP paso a paso: del PSW a la liberación en serie", "El recorrido completo de un PPAP nivel 3 desde la perspectiva del proveedor."],
              ["Tratamiento", "6 min", "Por qué el revenido propio reduce reclamos de campo", "Un comparativo entre TT propio vs maquilado en términos de variabilidad de dureza."],
            ].map(([cat, mins, t, e]) => (
              <article key={t} className="blog-card">
                <div className="blog-img">
                  <div className="placeholder"></div>
                  <span className="blog-cat">{cat}</span>
                </div>
                <div className="blog-meta">
                  <span>24 ABR 2026</span>
                  <span>·</span>
                  <span>{mins} lectura</span>
                </div>
                <h3 className="blog-title">{t}</h3>
                <p className="blog-excerpt">{e}</p>
              </article>
            ))}
          </div>
          <div style={{marginTop:48, textAlign:"center"}}>
            <button className="btn btn-secondary" onClick={() => onNav("blog")}>
              Ver todos los artículos <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quote bar */}
      <div className="quote-bar">
        <div className="container">
          <div className="quote-bar-inner">
            <div className="quote-bar-text">
              <strong>¿Tiene un plano técnico listo para cotizar?</strong> Respuesta inicial en menos de 48 hrs hábiles.
            </div>
            <button className="btn btn-lg" onClick={() => onNav("contacto")}>
              Cotizar pieza ahora <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

window.HomePage = HomePage;
