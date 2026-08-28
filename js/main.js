import { initNav, initHeaderOnScroll, initToTop } from "./nav.js";
import { initTheme } from "./theme.js";
import { initFaq } from "./faq.js";
import { initPricing } from "./pricing.js";
import { initSlider } from "./slider.js";
import { initReveal } from "./reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  try { initNav(); } catch (e) {}
  try { initHeaderOnScroll(); } catch (e) {}
  try { initToTop(); } catch (e) {}
  try { initFaq(); } catch (e) {}
  try { initPricing(); } catch (e) {}
  try { initSlider(); } catch (e) {}
  try { initReveal(); } catch (e) {}
});