/* global React */

const CalidadPage = ({ onNav }) => (
  <>
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
          <span className="sep">/</span>
          <span>Calidad y certificaciones</span>
        </div>
        <h1>Sistema de calidad IATF 16949:2016 vigente.</h1>
        <p className="lede">
          La certificación IATF no es un sello — es un sistema documental, de control y de mejora continua que garantiza que cada lote producido cumple PPAP, plan de control y trazabilidad completa.
        </p>
      </div>
    </section>

    <section className="section section-bone">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="kicker"><span className="dot"></span><span>Implicaciones para el comprador</span></div>
            <h2 className="section-title" style={{marginTop:16}}>Qué significa para usted<br/>trabajar con un proveedor IATF.</h2>
          </div>
          <p className="section-lede">
            Estos cuatro pilares forman parte estándar de cada cuenta automotriz. No son entregables opcionales: son requisito de aceptación.
          </p>
        </div>

        <div className="industrias-grid">
          {[
            ["01", "PPAP completo", "Production Part Approval Process nivel 3, 4 o 5 según requerimiento del cliente. Diagrama de flujo, AMEF, plan de control, MSA, capacidad de proceso (Cpk), PSW firmado."],
            ["02", "Plan de control", "Documento maestro vigente para cada número de parte: características críticas, métodos de medición, frecuencia, reacción ante no conformidad."],
            ["03", "Trazabilidad lote por lote", "Cada empaque etiquetado con número de colada del alambrón, fecha de forja, fecha de TT, lote de galvanizado y operador responsable. 10 años de retención."],
            ["04", "Capacidad de proceso Cpk", "Mediciones SPC en línea con Cpk ≥ 1.33 para características críticas. Reportes 8D ante cualquier no conformidad de campo."],
          ].map(([n, t, d]) => (
            <div key={n} className="industria-card" style={{cursor:"default", minHeight: 280}}>
              <div className="industria-num">{n}</div>
              <h3 className="industria-title" style={{fontSize:22}}>{t}</h3>
              <p className="industria-desc">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section-paper">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="kicker"><span className="dot"></span><span>Certificaciones y reconocimientos</span></div>
            <h2 className="section-title" style={{marginTop:16}}>Vigencias y alcance.</h2>
          </div>
          <p className="section-lede">
            Auditorías externas anuales por organismos acreditados. Documentación disponible bajo NDA para evaluación de proveedores.
          </p>
        </div>
        <div className="cert-grid">
          {[
            ["IATF", "IATF 16949:2016", "Vigente · Renovación 2026"],
            ["ISO", "ISO 9001:2015", "Vigente · Renovación 2026"],
            ["ISO", "ISO 14001:2015", "Vigente · Renovación 2026"],
            ["ESR", "Empresa Socialmente Responsable", "6 años consecutivos"],
            ["MG", "Marca Guanajuato", "Acreditada"],
            ["EX", "Premio Excelencia CLAUGTO", "Galardón 2023"],
          ].map(([m, n, meta]) => (
            <div key={n} className="cert-card">
              <div className="cert-mark">{m}</div>
              <div className="cert-name">{n}</div>
              <div className="cert-meta">{meta}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop: 64, display:"grid", gridTemplateColumns:"1fr 1fr", gap: 32}}>
          <div style={{padding:"40px", background:"white", border:"1px solid var(--steel-200)"}}>
            <div className="eyebrow" style={{marginBottom:12}}>Documentación auditable</div>
            <h3 style={{fontSize:24, fontWeight:700, color:"var(--navy-900)", marginBottom:16, letterSpacing:"-0.02em"}}>Manual de calidad</h3>
            <p style={{color:"var(--steel-500)", lineHeight:1.55, marginBottom:24}}>
              Disponible bajo acuerdo de confidencialidad para procesos de homologación de proveedor.
            </p>
            <button className="btn btn-secondary">Solicitar manual ↓</button>
          </div>
          <div style={{padding:"40px", background:"var(--navy-900)", color:"white"}}>
            <div className="eyebrow" style={{marginBottom:12, color:"var(--yellow)"}}>Onboarding de proveedor</div>
            <h3 style={{fontSize:24, fontWeight:700, color:"white", marginBottom:16, letterSpacing:"-0.02em"}}>Equipo de ingeniería de calidad</h3>
            <p style={{color:"var(--navy-200)", lineHeight:1.55, marginBottom:24}}>
              Acompañamiento desde RFQ hasta primera entrega: SQE asignado, planeación PPAP y visita guiada de planta.
            </p>
            <button className="btn btn-primary" onClick={() => onNav("contacto")}>Agendar visita <span className="arrow">→</span></button>
          </div>
        </div>
      </div>
    </section>
  </>
);

window.CalidadPage = CalidadPage;
