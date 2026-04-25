/* global React, FastenerSVG */
const { useState: useStateCat, useMemo } = React;

const PRODUCTS = [
  { id: 1, name: "Tornillo hexagonal cabeza brida", norm: "DIN 6921", type: "Tornillo", svg: "flange", mat: "Acero 10.9", finish: "Galvanizado Zn-Ni", diam: "M6 — M16", grade: "10.9" },
  { id: 2, name: "Tornillo Allen socket head", norm: "DIN 912", type: "Tornillo", svg: "socket", mat: "SAE 4140", finish: "Negro óxido", diam: "M3 — M20", grade: "12.9" },
  { id: 3, name: "Perno de carrocería cuello cuadrado", norm: "DIN 603", type: "Perno", svg: "carriage", mat: "SAE 1018", finish: "Galvanizado", diam: "M6 — M12", grade: "5.8" },
  { id: 4, name: "Espárrago doble extremo rosca total", norm: "ASME B18.31", type: "Sujetador", svg: "stud", mat: "SAE 4140", finish: "Fosfatado", diam: "1/4\" — 1\"", grade: "B7" },
  { id: 5, name: "Tornillo cabeza hexagonal estándar", norm: "JIS B1180", type: "Tornillo", svg: "hex", mat: "SAE 1038", finish: "Tropicalizado", diam: "M5 — M24", grade: "8.8" },
  { id: 6, name: "Tornillo mariposa palomilla", norm: "DIN 316", type: "Tornillo", svg: "wing", mat: "Inox 304", finish: "Pulido", diam: "M5 — M10", grade: "A2" },
  { id: 7, name: "Tornillo SAE grado 8", norm: "SAE J429", type: "Tornillo", svg: "hex", mat: "SAE 4140", finish: "Negro óxido", diam: "1/4\" — 3/4\"", grade: "8" },
  { id: 8, name: "Perno hexagonal alta resistencia", norm: "ANSI B18.2", type: "Perno", svg: "hex", mat: "SAE 4140", finish: "Galvanizado", diam: "1/2\" — 1\"", grade: "A325" },
  { id: 9, name: "Tornillo Allen cabeza plana", norm: "DIN 7991", type: "Tornillo", svg: "socket", mat: "SAE 4140", finish: "Niquelado", diam: "M4 — M16", grade: "10.9" },
  { id: 10, name: "Pieza especial diseño a plano", norm: "Diseño especial", type: "Make to Print", svg: "flange", mat: "Según plano", finish: "Según plano", diam: "Custom", grade: "Custom" },
  { id: 11, name: "Tornillo de brida dentada antirotación", norm: "DIN 6921", type: "Tornillo", svg: "flange", mat: "SAE 1038", finish: "Dacromet", diam: "M6 — M14", grade: "10.9" },
  { id: 12, name: "Espárrago de anclaje en J", norm: "ASME B18.31", type: "Sujetador", svg: "stud", mat: "SAE 1018", finish: "Galvanizado caliente", diam: "M10 — M20", grade: "5.8" },
  { id: 13, name: "Perno guía cabeza embutida", norm: "JIS B1111", type: "Perno", svg: "carriage", mat: "Inox 316", finish: "Pasivado", diam: "M6 — M12", grade: "A4" },
  { id: 14, name: "Tornillo Allen cabeza botón", norm: "ISO 7380", type: "Tornillo", svg: "socket", mat: "SAE 4140", finish: "Negro óxido", diam: "M3 — M12", grade: "10.9" },
  { id: 15, name: "Sujetador Make-to-Print automotriz", norm: "Diseño especial", type: "Make to Print", svg: "wing", mat: "Según plano", finish: "PPAP nivel 3", diam: "Custom", grade: "—" },
  { id: 16, name: "Tornillo SAE grado 5", norm: "SAE J429", type: "Tornillo", svg: "hex", mat: "SAE 1038", finish: "Galvanizado", diam: "1/4\" — 1\"", grade: "5" },
];

const NORMS = ["Todas", "JIS B1180", "SAE J429", "DIN 933", "DIN 912", "DIN 6921", "ASME B18.31", "ANSI B18.2", "Diseño especial"];
const TYPES = ["Todos", "Tornillo", "Perno", "Sujetador", "Make to Print"];

const CatalogPage = ({ onNav }) => {
  const [norm, setNorm] = useStateCat("Todas");
  const [type, setType] = useStateCat("Todos");

  const filtered = useMemo(() => PRODUCTS.filter(p =>
    (norm === "Todas" || p.norm === norm || (norm === "DIN 933" && p.norm.startsWith("DIN")))
    && (type === "Todos" || p.type === type)
  ), [norm, type]);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
            <span className="sep">/</span>
            <span>Catálogo</span>
          </div>
          <h1>Catálogo técnico</h1>
          <p className="lede">
            Tornillos, pernos y sujetadores en normas internacionales y diseño a plano. Filtre por norma o tipo de pieza para descargar la ficha técnica o solicitar cotización.
          </p>
        </div>
      </section>

      <section className="section section-bone" style={{paddingTop: 48}}>
        <div className="container">
          <div className="catalog-toolbar">
            <div className="filter-group">
              <span className="filter-label">Norma</span>
              {NORMS.map(n => (
                <button key={n} className={"filter-chip " + (norm === n ? "active" : "")} onClick={() => setNorm(n)}>{n}</button>
              ))}
            </div>
            <div className="filter-divider"></div>
            <div className="filter-group">
              <span className="filter-label">Tipo</span>
              {TYPES.map(t => (
                <button key={t} className={"filter-chip " + (type === t ? "active" : "")} onClick={() => setType(t)}>{t}</button>
              ))}
            </div>
            <div className="results-count">
              <strong>{filtered.length}</strong> de {PRODUCTS.length} resultados
            </div>
          </div>

          <div className="catalog-grid">
            {filtered.map(p => (
              <article key={p.id} className="product-card">
                <div className="product-svg">
                  <span className="product-norm-tag">{p.norm}</span>
                  <FastenerSVG kind={p.svg} color="#0a1628" />
                </div>
                <h3 className="product-name">{p.name}</h3>
                <div>
                  <div className="product-spec-row"><span>Diámetro</span><span>{p.diam}</span></div>
                  <div className="product-spec-row"><span>Material</span><span>{p.mat}</span></div>
                  <div className="product-spec-row"><span>Acabado</span><span>{p.finish}</span></div>
                  <div className="product-spec-row"><span>Grado</span><span>{p.grade}</span></div>
                </div>
                <div className="product-actions">
                  <button onClick={(e) => { e.stopPropagation(); onNav("contacto"); }} className="primary">Cotizar</button>
                  <button onClick={(e) => e.stopPropagation()}>Ficha PDF ↓</button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{padding:"80px 0", textAlign:"center", color:"var(--steel-500)"}}>
              <div className="eyebrow" style={{marginBottom:8}}>Sin resultados</div>
              <p>No encontramos piezas con esos filtros. ¿Necesita una pieza a plano?</p>
              <button className="btn btn-primary" style={{marginTop:24}} onClick={() => onNav("contacto")}>
                Solicitar Make-to-Print <span className="arrow">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="quote-bar">
        <div className="container">
          <div className="quote-bar-inner">
            <div className="quote-bar-text">
              <strong>¿No encuentra su pieza?</strong> Fabricamos a plano desde 5,000 piezas con PPAP completo.
            </div>
            <button className="btn btn-lg" onClick={() => onNav("contacto")}>
              Enviar plano técnico <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

window.CatalogPage = CatalogPage;
