const KEY = "theme";

export function initTheme() {
  const btn = document.getElementById("nut-nen-toi");
  if (!btn) return;

  const root = document.documentElement;
  const isDark = () => root.classList.contains("dark");

  sync();

  btn.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem(KEY, isDark() ? "dark" : "light");
    sync();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem(KEY)) return;
    root.classList.toggle("dark", e.matches);
    sync();
  });

  function sync() {
    btn.setAttribute("aria-pressed", isDark());
    btn.setAttribute("aria-label", isDark() ? "Chuyển sang nền sáng" : "Chuyển sang nền tối");
  }
}