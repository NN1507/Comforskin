export function initFaq() {
  const root = document.getElementById("cau-hoi");
  if (!root) return;

  const triggers = [...root.querySelectorAll("[data-faq-trigger]")];
  if (triggers.length === 0) return;

  function setOpen(trigger, open) {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    if (!panel) return;

    trigger.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  }

  root.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-faq-trigger]");
    if (!trigger) return;

    const willOpen = trigger.getAttribute("aria-expanded") === "false";

    triggers.forEach((t) => setOpen(t, false));

    if (willOpen) setOpen(trigger, true);
  });

  triggers.forEach((t) => setOpen(t, false));
}