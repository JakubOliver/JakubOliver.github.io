(function () {
  const translatable = document.querySelectorAll("[data-en][data-cs]");
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const titles = {
    en: "Jakub Oliver Kubín | Software Engineer & AI Student",
    cs: "Jakub Oliver Kubín | Softwarový vývojář a student AI"
  };
  const descriptions = {
    en: "Portfolio of Jakub Oliver Kubín, an AI-focused Computer Science student at Charles University and former Microsoft Software Engineering Intern. Explore software and research projects.",
    cs: "Portfolio Jakuba Olivera Kubína, studenta informatiky se zaměřením na AI na Univerzitě Karlově a bývalého stážisty softwarového inženýrství v Microsoftu."
  };

  function setLanguage(lang) {
    if (lang !== "en" && lang !== "cs") return;
    document.documentElement.lang = lang;
    translatable.forEach(element => { element.textContent = element.dataset[lang]; });
    document.title = titles[lang];
    if (metaDescription) metaDescription.content = descriptions[lang];
    if (ogDescription) ogDescription.content = descriptions[lang];
    if (ogLocale) ogLocale.content = lang === "cs" ? "cs_CZ" : "en_US";
  }

  // English is always the public default. Czech translations remain in the
  // markup and can be enabled manually in DevTools: setPortfolioLanguage("cs").
  window.setPortfolioLanguage = setLanguage;
  setLanguage("en");

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();