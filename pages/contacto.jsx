/* global React */
const { useState: useStateContact } = React;

const ContactoPage = ({ onNav }) => {
  const [form, setForm] = useStateContact({
    nombre: "", empresa: "", email: "", tel: "",
    industria: "Automotriz", norma: "", descripcion: "",
    consumo: "", incoterm: "Entrega Planta CDMX", precio: "",
    archivo: null,
  });
  const [submitted, setSubmitted] = useStateContact(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const handleFile = (e) => setForm({ ...form, archivo: e.target.files[0] });

  if (submitted) {
    return (
      <section className="page-header" style={{paddingBottom:120}}>
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
            <span className="sep">/</span>
            <span>Cotización enviada</span>
          </div>
          <div style={{display:"inline-block", padding:"6px 12px", background:"var(--yellow)", color:"var(--navy-900)", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.1em", marginBottom:24}}>RFQ #DLB-2026-0421 RECIBIDO</div>
          <h1>Solicitud recibida.<br/>Equipo SQE asignado.</h1>
          <p className="lede" style={{marginBottom:32}}>
            Su solicitud llegó a nuestro equipo de ingeniería de calidad. En menos de 48 horas hábiles recibirá un correo con factibilidad técnica, rango de precio inicial y siguiente paso.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => onNav("home")}>← Volver al inicio</button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
            <span className="sep">/</span>
            <span>Cotización técnica</span>
          </div>
          <h1>Cotizador técnico.</h1>
          <p className="lede">
            Cargue su plano técnico (PDF, JPG, DWG o STEP) y los parámetros de la corrida. Respuesta inicial con factibilidad y rango de precio en menos de 48 horas hábiles.
          </p>
        </div>
      </section>

      <section className="section section-bone">
        <div className="container">
          <div style={{display:"grid", gridTemplateColumns:"1.6fr 1fr", gap:48, alignItems:"start"}}>
            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{padding:48, background:"white", border:"1px solid var(--steel-200)"}}>
              <div className="kicker" style={{marginBottom:24}}><span className="dot"></span><span>RFQ · Datos del comprador</span></div>
              <div className="form-grid">
                <div className="form-field">
                  <label className="form-label">Nombre completo<span className="req">*</span></label>
                  <input className="form-input" required value={form.nombre} onChange={update("nombre")} placeholder="Ing. Juan Pérez" />
                </div>
                <div className="form-field">
                  <label className="form-label">Empresa<span className="req">*</span></label>
                  <input className="form-input" required value={form.empresa} onChange={update("empresa")} placeholder="Tier 1 Manufacturing S.A." />
                </div>
                <div className="form-field">
                  <label className="form-label">Correo corporativo<span className="req">*</span></label>
                  <input type="email" className="form-input" required value={form.email} onChange={update("email")} placeholder="jperez@tier1.com.mx" />
                </div>
                <div className="form-field">
                  <label className="form-label">Teléfono</label>
                  <input className="form-input" value={form.tel} onChange={update("tel")} placeholder="+52 ..." />
                </div>

                <div className="form-field">
                  <label className="form-label">Industria<span className="req">*</span></label>
                  <select className="form-select" value={form.industria} onChange={update("industria")}>
                    <option>Automotriz (OEM / Tier 1)</option>
                    <option>Eléctrica</option>
                    <option>Electrodoméstica</option>
                    <option>Construcción / Estructural</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Norma de referencia</label>
                  <select className="form-select" value={form.norma} onChange={update("norma")}>
                    <option value="">Seleccionar...</option>
                    <option>JIS B1180</option>
                    <option>SAE J429</option>
                    <option>DIN 933 / 912</option>
                    <option>ASME B18</option>
                    <option>ANSI B18.2</option>
                    <option>Diseño especial / Make to Print</option>
                  </select>
                </div>

                <div className="form-field full">
                  <label className="form-label">Descripción de la pieza<span className="req">*</span></label>
                  <textarea className="form-textarea" required value={form.descripcion} onChange={update("descripcion")} placeholder="Tornillo cabeza brida M10x1.5x40, grado 10.9, galvanizado Zn-Ni, marcado láser con número de parte..." />
                  <span className="form-help">Incluya material, acabado, longitud, paso de rosca y características críticas.</span>
                </div>

                <div className="form-field">
                  <label className="form-label">Consumo anual estimado (piezas)<span className="req">*</span></label>
                  <input className="form-input" required value={form.consumo} onChange={update("consumo")} placeholder="500,000" />
                </div>
                <div className="form-field">
                  <label className="form-label">Precio meta ($/millar USD)</label>
                  <input className="form-input" value={form.precio} onChange={update("precio")} placeholder="$45.00 / millar" />
                </div>

                <div className="form-field full">
                  <label className="form-label">Incoterm<span className="req">*</span></label>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                    {["Entrega Planta CDMX", "Entrega Planta GDL", "EXW Irapuato", "DAP Cliente", "FCA Frontera"].map(opt => (
                      <button type="button" key={opt} className={"filter-chip " + (form.incoterm === opt ? "active" : "")} onClick={() => setForm({...form, incoterm: opt})}>{opt}</button>
                    ))}
                  </div>
                </div>

                <div className="form-field full">
                  <label className="form-label">Plano técnico (PDF, JPG, DWG, STEP)<span className="req">*</span></label>
                  <label className={"file-upload " + (form.archivo ? "has-file" : "")}>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png,.dwg,.step,.stp" onChange={handleFile} style={{display:"none"}} />
                    <div className="file-upload-icon">{form.archivo ? "✓" : "↑"}</div>
                    <div className="file-upload-text">
                      {form.archivo ? form.archivo.name : "Arrastre o haga clic para subir plano"}
                    </div>
                    <div className="file-upload-hint">Máx 25 MB · Formatos: PDF · JPG · DWG · STEP</div>
                  </label>
                </div>

                <div className="form-field full" style={{marginTop:8}}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{width:"100%", justifyContent:"center"}}>
                    Enviar RFQ <span className="arrow">→</span>
                  </button>
                  <span className="form-help" style={{marginTop:12}}>Información protegida bajo aviso de privacidad. No compartimos planos técnicos con terceros.</span>
                </div>
              </div>
            </form>

            {/* Sidebar */}
            <aside style={{position:"sticky", top:96}}>
              <div style={{padding:32, background:"var(--navy-900)", color:"white", marginBottom:24}}>
                <div className="kicker" style={{color:"var(--yellow)", marginBottom:16}}><span className="dot" style={{background:"var(--yellow)"}}></span><span>Tiempo de respuesta</span></div>
                <div style={{fontSize:48, fontWeight:700, letterSpacing:"-0.03em", color:"white", marginBottom:8}}>&lt; 48 hrs</div>
                <p style={{color:"var(--navy-200)", fontSize:14, lineHeight:1.5}}>
                  Hábiles. Para RFQ con plano técnico recibido antes de las 12:00 hrs CST.
                </p>
              </div>
              <div style={{padding:32, background:"white", border:"1px solid var(--steel-200)"}}>
                <div className="kicker" style={{marginBottom:16}}><span className="dot"></span><span>Contacto directo</span></div>
                <div style={{display:"flex", flexDirection:"column", gap:16}}>
                  <div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.1em", color:"var(--steel-500)", marginBottom:4}}>VENTAS</div>
                    <div style={{fontWeight:600, color:"var(--navy-900)"}}>ventas@dealba.com.mx</div>
                  </div>
                  <div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.1em", color:"var(--steel-500)", marginBottom:4}}>WHATSAPP DIRECTO</div>
                    <div style={{fontWeight:600, color:"var(--navy-900)"}}>+52 462 123 4567</div>
                  </div>
                  <div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.1em", color:"var(--steel-500)", marginBottom:4}}>CONMUTADOR</div>
                    <div style={{fontWeight:600, color:"var(--navy-900)"}}>+52 (462) 626 0150</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Sucursales */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="kicker"><span className="dot"></span><span>Sucursales</span></div>
              <h2 className="section-title" style={{marginTop:16}}>Cobertura nacional.</h2>
            </div>
            <p className="section-lede">
              Planta matriz en Irapuato, almacenes y oficina comercial en CDMX y Guadalajara para entregas just-in-time al Bajío y zona metropolitana.
            </p>
          </div>
          <div className="suc-grid">
            <div className="suc-card">
              <div className="suc-tag matriz">MATRIZ</div>
              <h3 className="suc-name">Planta Irapuato</h3>
              <div className="suc-addr">Av. Industrial Norte 245<br/>Ciudad Industrial, 36541<br/>Irapuato, Guanajuato</div>
              <div className="suc-contact">+52 (462) 626 0150<br/>ventas@dealba.com.mx</div>
              <div className="suc-map"></div>
            </div>
            <div className="suc-card">
              <div className="suc-tag">SUCURSAL</div>
              <h3 className="suc-name">Almacén CDMX</h3>
              <div className="suc-addr">Calzada de la Viga 1234<br/>Iztacalco, 08800<br/>Ciudad de México</div>
              <div className="suc-contact">+52 (55) 5678 9012<br/>cdmx@dealba.com.mx</div>
              <div className="suc-map"></div>
            </div>
            <div className="suc-card">
              <div className="suc-tag">SUCURSAL</div>
              <h3 className="suc-name">Almacén Guadalajara</h3>
              <div className="suc-addr">Av. López Mateos 567<br/>Zapopan, 45070<br/>Jalisco</div>
              <div className="suc-contact">+52 (33) 3456 7890<br/>gdl@dealba.com.mx</div>
              <div className="suc-map"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

window.ContactoPage = ContactoPage;
