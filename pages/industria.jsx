/* global React */

const IndustriaPage = ({ onNav }) => (
  <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
          <span className="sep">/</span>
          <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Industrias</a>
          <span className="sep">/</span>
          <span>Automotriz</span>
        </div>
        <h1>Sujeción para OEM y Tier 1<br/>automotriz.</h1>
        <p className="lede">
          Tier 2 IATF 16949:2016 con PPAP nivel 3+, planes de control vigentes y trazabilidad lote por lote. Atendemos plataformas de bastidor, suspensión, motor, transmisión y carrocería.
        </p>
      </div>
    </section>

    <section className="section section-bone">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="kicker"><span className="dot"></span><span>Normas relevantes</span></div>
            <h2 className="section-title" style={{marginTop:16}}>Catálogo bajo norma<br/>automotriz.</h2>
          </div>
          <p className="section-lede">
            Trabajamos las cuatro familias normativas más comunes en plataformas operadas en México. Para específicas de OEM (Ford WSS, GM GMW, Stellantis MS, Nissan), solicitamos plano y especificación.
          </p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16}}>
          {[
            ["SAE J429", "Grados 2, 5 y 8 · norma estadounidense de uso común en plataformas norteamericanas."],
            ["DIN 933 / 912", "Cabeza hexagonal y Allen socket head — referencia europea adoptada por OEM globales."],
            ["JIS B1180", "Plataformas japonesas (Nissan, Toyota, Honda, Mazda) — diferencias dimensionales con DIN."],
            ["ISO 4014", "Norma metric internacional, equivalencias claras con DIN para BOMs unificadas."],
          ].map(([n, d]) => (
            <div key={n} style={{padding:"24px", background:"white", border:"1px solid var(--steel-200)"}}>
              <div style={{fontFamily:"var(--font-mono)", fontSize:11, color:"var(--carmin)", letterSpacing:"0.1em", marginBottom:8}}>{n}</div>
              <p style={{fontSize:13, color:"var(--steel-500)", lineHeight:1.5}}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section-navy">
      <div className="container">
        <div className="section-header dark">
          <div>
            <div className="kicker" style={{color:"var(--yellow)"}}><span className="dot" style={{background:"var(--yellow)"}}></span><span>Capacidades aplicables</span></div>
            <h2 className="section-title" style={{marginTop:16, color:"white"}}>Lo que ofrecemos<br/>al comprador automotriz.</h2>
          </div>
          <p className="section-lede" style={{color:"var(--navy-200)"}}>
            Cinco capacidades que diferencian a Dealba en RFQ de Tier 1 con plantas en el Bajío.
          </p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:1, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.08)"}}>
          {[
            ["PPAP 3+", "Documentación completa para liberación serie."],
            ["EDI / VMI", "Conexión electrónica con ERP de cliente. Stock administrado en planta."],
            ["48 hrs", "Respuesta inicial a RFQ con factibilidad y rango de precio."],
            ["8D", "Reporte estructurado ante cualquier no conformidad de campo."],
            ["IMDS", "Declaración de materiales en sistema IMDS para componentes regulados."],
          ].map(([t, d]) => (
            <div key={t} style={{background:"var(--navy-900)", padding:"32px 24px"}}>
              <div style={{fontSize:32, fontWeight:700, color:"var(--yellow)", letterSpacing:"-0.02em", marginBottom:12}}>{t}</div>
              <div style={{fontSize:13, color:"var(--navy-200)", lineHeight:1.5}}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="quote-bar">
      <div className="container">
        <div className="quote-bar-inner">
          <div className="quote-bar-text">
            <strong>RFQ automotriz con plano técnico.</strong> Equipo de SQE asignado en menos de 48 hrs hábiles.
          </div>
          <button className="btn btn-lg" onClick={() => onNav("contacto")}>
            Iniciar RFQ <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </>
);

window.IndustriaPage = IndustriaPage;
