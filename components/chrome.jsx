/* global React */
const { useState, useEffect } = React;

// ============ Shared SVG Icons ============
const FastenerSVG = ({ kind = "hex", color = "#1f2937" }) => {
  switch (kind) {
    case "hex":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5">
          <polygon points="30,20 70,20 80,50 70,80 30,80 20,50" fill="none" />
          <polygon points="35,28 65,28 73,50 65,72 35,72 27,50" fill="none" />
          <line x1="20" y1="50" x2="0" y2="50" />
          <line x1="100" y1="50" x2="80" y2="50" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="8" fill="none" />
        </svg>
      );
    case "socket":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5">
          <rect x="30" y="15" width="40" height="20" fill="none" />
          <line x1="30" y1="35" x2="70" y2="35" />
          <line x1="35" y1="35" x2="35" y2="85" />
          <line x1="65" y1="35" x2="65" y2="85" />
          <line x1="38" y1="40" x2="38" y2="85" strokeDasharray="2 2" />
          <line x1="62" y1="40" x2="62" y2="85" strokeDasharray="2 2" />
          <polygon points="40,22 60,22 55,28 45,28" fill={color} fillOpacity="0.15" />
        </svg>
      );
    case "stud":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5">
          <rect x="40" y="10" width="20" height="80" fill="none" />
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="40" y1={15 + i * 6} x2="60" y2={15 + i * 6} />
          ))}
          <line x1="20" y1="50" x2="40" y2="50" />
          <line x1="60" y1="50" x2="80" y2="50" strokeDasharray="2 2" />
        </svg>
      );
    case "wing":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M 20 25 Q 20 15 30 18 L 45 25 L 55 25 L 70 18 Q 80 15 80 25 L 75 35 L 50 35 L 25 35 Z" fill="none" />
          <line x1="45" y1="35" x2="45" y2="85" />
          <line x1="55" y1="35" x2="55" y2="85" />
          <line x1="48" y1="40" x2="48" y2="80" strokeDasharray="2 2" />
          <line x1="52" y1="40" x2="52" y2="80" strokeDasharray="2 2" />
        </svg>
      );
    case "carriage":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M 30 25 Q 50 8 70 25 L 65 35 L 35 35 Z" fill="none" />
          <rect x="42" y="35" width="16" height="6" fill={color} fillOpacity="0.1" />
          <line x1="44" y1="41" x2="44" y2="88" />
          <line x1="56" y1="41" x2="56" y2="88" />
          <line x1="47" y1="44" x2="47" y2="85" strokeDasharray="2 2" />
          <line x1="53" y1="44" x2="53" y2="85" strokeDasharray="2 2" />
        </svg>
      );
    case "flange":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.5">
          <polygon points="30,15 70,15 78,32 70,40 30,40 22,32" fill="none" />
          <ellipse cx="50" cy="42" rx="35" ry="4" fill="none" />
          <line x1="42" y1="46" x2="42" y2="88" />
          <line x1="58" y1="46" x2="58" y2="88" />
          <line x1="45" y1="50" x2="45" y2="85" strokeDasharray="2 2" />
          <line x1="55" y1="50" x2="55" y2="85" strokeDasharray="2 2" />
        </svg>
      );
    default:
      return null;
  }
};

window.FastenerSVG = FastenerSVG;

// ============ Top Bar ============
const TopBar = () => (
  <div className="topbar">
    <div className="container">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span className="cert-pill">IATF 16949:2016 · ISO 9001 · ISO 14001</span>
          <span style={{color: "var(--navy-300)"}}>Tier 2 Automotriz</span>
        </div>
        <div className="topbar-right">
          <a href="#">ES / EN</a>
          <a href="#">+52 (462) 626 0150</a>
          <a href="#" style={{color: "var(--yellow)"}}>Portal cliente →</a>
        </div>
      </div>
    </div>
  </div>
);

// ============ Nav ============
const Nav = ({ active, onNav }) => {
  const links = [
    { id: "home", label: "Inicio" },
    { id: "industrias", label: "Industrias" },
    { id: "catalogo", label: "Catálogo" },
    { id: "capacidades", label: "Capacidades" },
    { id: "calidad", label: "Calidad" },
    { id: "blog", label: "Blog técnico" },
    { id: "contacto", label: "Contacto" },
  ];
  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <a className="nav-logo" onClick={() => onNav("home")} style={{cursor:"pointer"}}>
            <span className="mark">D</span>
            <span>DEALBA</span>
          </a>
          <nav className="nav-links">
            {links.map(l => (
              <a
                key={l.id}
                className={"nav-link " + (active === l.id ? "active" : "")}
                onClick={() => onNav(l.id)}
                style={{cursor:"pointer"}}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <button className="btn btn-primary btn-sm" onClick={() => onNav("contacto")}>
              Solicitar cotización <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// ============ Footer ============
const Footer = ({ onNav }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-col">
          <div style={{display:"flex",alignItems:"center",gap:12, marginBottom:20}}>
            <span style={{width:36,height:36,background:"var(--carmin)",display:"grid",placeItems:"center",color:"white",fontFamily:"var(--font-mono)",fontWeight:700}}>D</span>
            <span style={{fontSize:20,fontWeight:800,color:"white",letterSpacing:"-0.02em"}}>DEALBA</span>
          </div>
          <p style={{color:"var(--navy-200)", lineHeight:1.55, marginBottom:24, maxWidth: 320}}>
            Fabricantes mexicanos de tornillos, pernos y sujetadores especiales para industria desde 1978.
          </p>
          <div style={{display:"flex", gap:8}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:10, padding:"4px 8px", border:"1px solid rgba(255,255,255,0.2)", color:"var(--yellow)"}}>IATF 16949</span>
            <span style={{fontFamily:"var(--font-mono)", fontSize:10, padding:"4px 8px", border:"1px solid rgba(255,255,255,0.2)", color:"var(--navy-200)"}}>ESR 2024</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a onClick={() => onNav("home")} style={{cursor:"pointer"}}>Sobre Dealba</a></li>
            <li><a onClick={() => onNav("calidad")} style={{cursor:"pointer"}}>Calidad y certificaciones</a></li>
            <li><a href="#">Responsabilidad social</a></li>
            <li><a href="#">Bolsa de trabajo</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Productos</h4>
          <ul>
            <li><a onClick={() => onNav("catalogo")} style={{cursor:"pointer"}}>Catálogo completo</a></li>
            <li><a href="#">Tornillos JIS / SAE</a></li>
            <li><a href="#">Pernos DIN / ASME</a></li>
            <li><a href="#">Make to Print</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Planta Irapuato, Gto.</li>
            <li>+52 (462) 626 0150</li>
            <li>ventas@dealba.com.mx</li>
            <li><a onClick={() => onNav("contacto")} style={{cursor:"pointer", color:"var(--yellow)"}}>Cotizar pieza →</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dealba S.A. de C.V. — Hecho en México</span>
        <div className="legal">
          <a href="#">Aviso de privacidad</a>
          <a href="#">Política de calidad</a>
          <a href="#">Código ESR</a>
        </div>
      </div>
    </div>
  </footer>
);

// ============ WhatsApp ============
const WAFloat = () => (
  <a className="wa-float" href="#">
    <span className="icon">●</span> WhatsApp
  </a>
);

Object.assign(window, { TopBar, Nav, Footer, WAFloat });
