document.addEventListener("DOMContentLoaded", () => {
  const testBtn = document.getElementById("testBtn");
  const resetBtn = document.getElementById("resetBtn");
  const ticketsList = document.getElementById("ticketsList");
  const clickInfo = document.getElementById("clickInfo");

  let clicks = 0;

  function render() {
    clickInfo.textContent = `Clicks: ${clicks}`;
  }

  testBtn.addEventListener("click", () => {
    clicks += 1;
    ticketsList.textContent = `JS OK ✅ (${new Date().toLocaleString()})`;
    render();
  });

  resetBtn.addEventListener("click", () => {
    clicks = 0;
    ticketsList.innerHTML = `<p class="muted">Καμία ενέργεια ακόμα.</p>`;
    render();
  });

  render();
});
