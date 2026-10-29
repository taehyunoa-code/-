document.addEventListener("DOMContentLoaded", () => {
  const today = document.getElementById("today");
  const year = document.getElementById("year");
  if (today) today.textContent = new Intl.DateTimeFormat("ko-KR", {year:"numeric", month:"long", day:"numeric"}).format(new Date());
  if (year) year.textContent = new Date().getFullYear();

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".article-card");
  const empty = document.getElementById("empty-state");
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.category;
    let visible = 0;
    cards.forEach(card => {
      const show = selected === "전체" || card.dataset.category === selected;
      card.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  }));
});