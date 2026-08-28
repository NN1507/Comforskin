const dong = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

export function initPricing() {
  const sw = document.getElementById("cong-tac-gia");
  if (!sw) return;

  const prices = [...document.querySelectorAll("[data-price]")];
  const units = [...document.querySelectorAll("[data-price-unit]")];
  if (prices.length === 0) return;

  function render(yearly) {
    sw.setAttribute("aria-checked", String(yearly));

    prices.forEach((el) => {
      const amount = yearly ? el.dataset.yearly : el.dataset.monthly;
      el.textContent = dong.format(Number(amount));
    });

    units.forEach((el) => {
      el.textContent = yearly ? "/năm" : "/tháng";
    });
  }

  sw.addEventListener("click", () => {
    const yearly = sw.getAttribute("aria-checked") !== "true";
    render(yearly);
  });

  render(sw.getAttribute("aria-checked") === "true");
}