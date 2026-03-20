/* Language switch – stores language in a cookie and reloads page */
(function () {
  const LANG_COOKIE = "site_lang";
  const DEFAULT = "en";

  function setLang(lang) {
    document.cookie = `${LANG_COOKIE}=${lang};path=/;max-age=31536000`;
    const url = new URL(window.location);
    url.searchParams.set("lang", lang);
    window.location = url.toString();
  }

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", e => setLang(e.currentTarget.dataset.lang));
  });

  // On load, if no ?lang= present, read cookie and add it
  document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location);
    if (!url.searchParams.get("lang")) {
      const match = document.cookie.match(new RegExp(`${LANG_COOKIE}=([^;]+)`));
      const cookieLang = match ? match[1] : null;
      if (cookieLang && cookieLang !== DEFAULT) {
        url.searchParams.set("lang", cookieLang);
        window.location = url.toString();
      }
    }
  });
})();
