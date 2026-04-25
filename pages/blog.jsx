/* global React */
const { useState: useStateBlog } = React;

const POSTS = [
  { cat: "IATF 16949", ind: "Automotriz", mins: 8, date: "24 ABR 2026", t: "SAE J429 vs DIN 933: cuándo elegir cada norma en una BOM mixta", e: "Comparativa práctica entre los dos sistemas más comunes en plantas multinacionales en México." },
  { cat: "Procesos", ind: "Automotriz", mins: 12, date: "18 ABR 2026", t: "PPAP paso a paso: del PSW a la liberación en serie", e: "El recorrido completo de un PPAP nivel 3 desde la perspectiva del proveedor Tier 2." },
  { cat: "Tratamiento", ind: "Todas", mins: 6, date: "11 ABR 2026", t: "Por qué el revenido propio reduce reclamos de campo", e: "Comparativo entre TT propio vs maquilado en términos de variabilidad de dureza Rockwell." },
  { cat: "IATF 16949", ind: "Automotriz", mins: 10, date: "04 ABR 2026", t: "IATF 16949 para el comprador de Tier 1: lo que debe pedir a su proveedor", e: "Checklist de auditoría rápida antes de homologar un nuevo proveedor de sujeción." },
  { cat: "Materiales", ind: "Eléctrica", mins: 7, date: "28 MAR 2026", t: "Selección de acero inoxidable 304 vs 316 en gabinetes eléctricos", e: "Cuándo justifica el sobrecosto del 316 frente al 304 en ambientes marinos o industriales." },
  { cat: "Acabados", ind: "Electrodoméstica", mins: 5, date: "21 MAR 2026", t: "Galvanizado Zn-Ni vs Dacromet: diferencias y aplicaciones", e: "Salt spray, costo, apariencia y compatibilidad con ensambles automatizados." },
];

const BlogPage = ({ onNav }) => {
  const [filter, setFilter] = useStateBlog("Todas");
  const visible = POSTS.filter(p => filter === "Todas" || p.ind === filter || p.cat === filter);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Inicio</a>
            <span className="sep">/</span>
            <span>Blog técnico</span>
          </div>
          <h1>Notas de ingeniería.</h1>
          <p className="lede">
            Material de referencia para ingenieros de compras y manufactura. Sin marketing, sin generalidades — comparativas técnicas, criterios de selección y decisiones de proceso documentadas por nuestro equipo de calidad.
          </p>
        </div>
      </section>

      <section className="section section-bone" style={{paddingTop:48}}>
        <div className="container">
          <div className="catalog-toolbar">
            <div className="filter-group">
              <span className="filter-label">Filtrar por</span>
              {["Todas", "Automotriz", "Eléctrica", "Electrodoméstica", "IATF 16949", "Procesos", "Materiales"].map(f => (
                <button key={f} className={"filter-chip " + (filter === f ? "active" : "")} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
            <div className="results-count"><strong>{visible.length}</strong> artículos</div>
          </div>

          <div className="blog-grid">
            {visible.map(p => (
              <article key={p.t} className="blog-card">
                <div className="blog-img">
                  <div className="placeholder"></div>
                  <span className="blog-cat">{p.cat}</span>
                </div>
                <div className="blog-meta">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.mins} min lectura</span>
                  <span>·</span>
                  <span>{p.ind}</span>
                </div>
                <h3 className="blog-title">{p.t}</h3>
                <p className="blog-excerpt">{p.e}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

window.BlogPage = BlogPage;
