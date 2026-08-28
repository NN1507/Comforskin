export function initTheme() {
  const themeBtn = document.getElementById("nut-nen-toi");
  if (!themeBtn) return;
  const isDark = document.documentElement.classList.contains("dark");
  updateBtnUI(themeBtn, isDark);

  themeBtn.addEventListener("click", () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextState = !isCurrentlyDark;
    document.documentElement.classList.toggle("dark", nextState);
    localStorage.setItem("theme", nextState ? "dark" : "light");
    updateBtnUI(themeBtn, nextState);
  });
}

function updateBtnUI(btn, isDark) {
  btn.setAttribute("aria-pressed", String(isDark));
  btn.textContent = isDark ? "Nền sáng" : "Nền tối";
}