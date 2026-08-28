const TU_CHAY = 6000;   // ms — thời gian giữa hai lần tự chuyển

export function initSlider() {
  const root = document.getElementById("slider-camnhan");
  if (!root) return;

  const track = root.querySelector("[data-slider-track]");
  const slides = [...root.querySelectorAll("[data-slide]")];
  const dotsBox = root.querySelector("[data-slider-dots]");
  const prev = root.querySelector("[data-slider-prev]");
  const next = root.querySelector("[data-slider-next]");
  if (!track || slides.length === 0) return;

  let index = 0;
  let timer = null;

  // TODO 1 — sinh chấm chỉ dẫn bằng JavaScript
  const dots = [];
  if (dotsBox) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `Xem cảm nhận ${i + 1} trên ${slides.length}`);
      dot.addEventListener("click", () => {
        go(i);
        restart();
      });
      dotsBox.appendChild(dot);
      dots.push(dot);
    });
  }

  function go(next_) {
    // TODO 2 — một dòng lo cả hai đầu
    index = (next_ + slides.length) % slides.length;

    // TODO 3 — dịch dải
    track.style.transform = `translateX(-${index * 100}%)`;

    // TODO 4 — inert + aria-hidden cho slide không phải hiện tại
    slides.forEach((s, i) => {
      s.toggleAttribute("inert", i !== index);
      s.setAttribute("aria-hidden", String(i !== index));
    });

    // TODO 5 — cập nhật aria-current cho chấm đang hiện
    dots.forEach((d, i) => {
      if (i === index) {
        d.setAttribute("aria-current", "true");
      } else {
        d.removeAttribute("aria-current");
      }
    });
  }
  function start() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    timer = setInterval(() => go(index + 1), TU_CHAY);
  }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }
  prev?.addEventListener("click", () => {
    go(index - 1);
    restart();
  });
  next?.addEventListener("click", () => {
    go(index + 1);
    restart();
  });
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      go(index - 1);
      restart();
    } else if (e.key === "ArrowRight") {
      go(index + 1);
      restart();
    }
  });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => {
    document.hidden ? stop() : start();
  });
  go(0);
  start();
}