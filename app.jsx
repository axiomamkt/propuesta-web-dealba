/* global React, ReactDOM, TopBar, Nav, Footer, WAFloat,
   HomePage, CatalogPage, CapacidadesPage, CalidadPage, IndustriaPage, BlogPage, ContactoPage,
   useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakRadio, TweakSelect */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "carminHue": 25,
  "carminChroma": 0.18,
  "carminLightness": 0.50,
  "density": "comfortable",
  "typeStack": "inter"
}/*EDITMODE-END*/;

const App = () => {
  const [page, setPage] = React.useState("home");
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    const { carminHue, carminChroma, carminLightness, typeStack } = tweaks;
    root.style.setProperty("--carmin", `oklch(${carminLightness} ${carminChroma} ${carminHue})`);
    root.style.setProperty("--carmin-dark", `oklch(${Math.max(0.30, carminLightness - 0.10)} ${carminChroma} ${carminHue})`);
    root.style.setProperty("--carmin-light", `oklch(${Math.min(0.70, carminLightness + 0.10)} ${carminChroma} ${carminHue})`);
    if (typeStack === "helvetica") root.style.setProperty("--font-sans", '"Helvetica Neue", Helvetica, Arial, sans-serif');
    else if (typeStack === "archivo") root.style.setProperty("--font-sans", '"Archivo", "Helvetica Neue", Arial, sans-serif');
    else root.style.setProperty("--font-sans", '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif');
  }, [tweaks]);

  // Scroll to top on nav change
  React.useEffect(() => { window.scrollTo({top: 0, behavior: "instant"}); }, [page]);

  const navMap = {
    home: { label: "01 Home", page: <HomePage onNav={setPage} /> },
    industrias: { label: "02 Industrias", page: <IndustriaPage onNav={setPage} /> },
    automotriz: { label: "02 Industrias", page: <IndustriaPage onNav={setPage} /> },
    catalogo: { label: "03 Catalogo", page: <CatalogPage onNav={setPage} /> },
    capacidades: { label: "04 Capacidades", page: <CapacidadesPage onNav={setPage} /> },
    calidad: { label: "05 Calidad", page: <CalidadPage onNav={setPage} /> },
    blog: { label: "06 Blog", page: <BlogPage onNav={setPage} /> },
    contacto: { label: "07 Contacto", page: <ContactoPage onNav={setPage} /> },
  };
  const current = navMap[page] || navMap.home;
  const navActive = page === "automotriz" ? "industrias" : page;

  return (
    <div data-screen-label={current.label}>
      <TopBar />
      <Nav active={navActive} onNav={setPage} />
      {current.page}
      <Footer onNav={setPage} />
      <WAFloat />
      <TweaksPanel title="Tweaks · Dealba">
        <TweakSection title="Acento carmín" subtitle="Color corporativo">
          <TweakSlider label="Saturación (chroma)" value={tweaks.carminChroma} min={0} max={0.30} step={0.01} onChange={(v) => setTweak("carminChroma", v)} />
          <TweakSlider label="Luminosidad" value={tweaks.carminLightness} min={0.30} max={0.70} step={0.01} onChange={(v) => setTweak("carminLightness", v)} />
          <TweakSlider label="Hue (matiz)" value={tweaks.carminHue} min={15} max={50} step={1} onChange={(v) => setTweak("carminHue", v)} />
        </TweakSection>
        <TweakSection title="Tipografía">
          <TweakRadio
            label="Familia"
            value={tweaks.typeStack}
            options={["inter", "helvetica", "archivo"]}
            onChange={(v) => setTweak("typeStack", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
