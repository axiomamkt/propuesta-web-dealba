/* global React */

const CapacidadesPage = ({ onNav }) => (
  <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
          <span className="sep">/</span>
          <span>Capacidades de manufactura</span>
        </div>
        <h1>Proceso vertical bajo un mismo techo.</h1>
        <p className="lede">
          Forja en frío, roladoras, tratamiento térmico, galvanizado, segundos procesos e inspección IATF — todo en planta Irapuato. Sin maquila externa, sin variabilidad ajena al sistema.
        </p>
      </div>
    </section>

    <section className="section section-navy" style={{paddingTop:64}}>
      <div className="container">
        <div className="kicker" style={{color:"var(--yellow)", marginBottom:24}}><span className="dot" style={{background:"var(--yellow)"}}></span><span>Diagrama de flujo · 6 etapas</span></div>
        <div className="process-flow">
          {[
            ["01", "Forja en frío", "Cabeceadoras de hasta 6 estaciones. Diámetros hasta M16 con un solo golpe."],
            ["02", "Roladoras", "Rosca por deformación plástica — mayor resistencia que rosca cortada."],
            ["03", "Tratamiento térmico", "Templado y revenido propios. Hornos atmósfera controlada."],
            ["04", "Galvanizado", "Línea propia: galvanizado, fosfatado, niquelado, dacromet, tropicalizado."],
            ["05", "Segundos procesos", "Maquinado, perforado, marcado láser, ensambles especiales."],
            ["06", "Control IATF", "MMC, salt spray ASTM B117, torque, trazabilidad lote por lote."],
          ].map(([n, t, d]) => (
            <div key={n} className="process-step">
              <div className="process-num">{n}</div>
              <div className="process-title">{t}</div>
              <div className="process-desc">{d}</div>
              <div className="process-arrow"></div>
            </div>
          ))}
        </div>

        <h3 style={{color:"white", fontSize:24, fontWeight:700, marginTop:80, marginBottom:24, letterSpacing:"-0.02em"}}>
          Rangos técnicos
        </h3>
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
            <tr><td>Materiales carbono</td><td className="num">SAE 1018 · 1038 · 1045 · 10B21</td><td>Alambrón nacional e importado, certificado por colada</td></tr>
            <tr><td>Materiales aleados</td><td className="num">SAE 4140 · 4340 · 8740</td><td>Para grados 10.9 y 12.9 con tratamiento térmico</td></tr>
            <tr><td>Inoxidables</td><td className="num">AISI 304 · 316 · 410</td><td>Pasivado y pulido disponibles</td></tr>
            <tr><td>Acabados</td><td className="num">Galvanizado · Fosfatado · Niquelado · Dacromet</td><td>Salt spray ASTM B117 · 96 — 720 hrs según especificación</td></tr>
            <tr><td>Dureza</td><td className="num">Grado 5 · 8 · 8.8 · 10.9 · 12.9</td><td>HRC 28 — 44 según especificación</td></tr>
            <tr><td>Capacidad mensual</td><td className="num">42M piezas</td><td>Distribuida en 18 cabeceadoras y 12 roladoras</td></tr>
          </tbody>
        </table>

        <div style={{marginTop:48, padding:"32px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)"}}>
          <div className="kicker" style={{color:"var(--yellow)", marginBottom:12}}><span className="dot" style={{background:"var(--yellow)"}}></span><span>¿Necesita algo fuera de rango?</span></div>
          <p style={{color:"var(--navy-200)", fontSize:16, lineHeight:1.55, marginBottom:24, maxWidth:700}}>
            Atendemos diseños especiales y piezas Make-to-Print con corridas desde 5,000 unidades. Envíe su plano técnico y nuestro equipo de ingeniería responderá con factibilidad y costo estimado.
          </p>
          <button className="btn btn-primary" onClick={() => onNav("contacto")}>Enviar plano <span className="arrow">→</span></button>
        </div>
      </div>
    </section>
  </>
);

window.CapacidadesPage = CapacidadesPage;
