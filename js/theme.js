const KEY = "theme";

export function initTheme() {
  const btn = document.getElementById("nut-nen-toi");
  const root = document.documentElement;

  if (!btn) return;

  function setTheme(theme) {
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    localStorage.setItem(KEY, theme);

    btn.textContent = isDark ? "Nền sáng" : "Nền tối";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute(
      "aria-label",
      isDark ? "Chuyển sang nền sáng" : "Chuyển sang nền tối"
    );
  }

  btn.addEventListener("click", () => {
    const isDark = root.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  });

  const saved = localStorage.getItem(KEY);

  if (saved === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}