(function () {
  const buttons = document.querySelectorAll("[data-lang]");
  const translatable = document.querySelectorAll("[data-en][data-cs]");
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const titleEn = "Jakub Oliver Kubín | Software Engineer & AI Student";
  const titleCs = "Jakub Oliver Kubín | Softwarový vývojář a student AI";
  const descriptions = {
    en: "Portfolio of Jakub Oliver Kubín, an AI-focused Computer Science student at Charles University and former Microsoft Software Engineering Intern. Explore software and research projects.",
    cs: "Portfolio Jakuba Olivera Kubína, studenta informatiky se zaměřením na AI na Univerzitě Karlově a bývalého stážisty softwarového inženýrství v Microsoftu."
  };
  function setLanguage(lang) {
    if (lang !== "en" && lang !== "cs") lang = "en";
    document.documentElement.lang = lang;
    translatable.forEach(element => { element.textContent = element.dataset[lang]; });
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
    document.title = lang === "cs" ? titleCs : titleEn;
    if (metaDescription) metaDescription.content = descriptions[lang];
    if (ogDescription) ogDescription.content = descriptions[lang];
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = lang === "cs" ? "cs_CZ" : "en_US";
    try { localStorage.setItem("portfolio-language", lang); } catch (error) { /* Storage may be unavailable. */ }
  }
  buttons.forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  setLanguage(document.documentElement.lang === "cs" ? "cs" : "en");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();