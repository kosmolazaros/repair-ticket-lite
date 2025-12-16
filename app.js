const testBtn = document.getElementById("testBtn");
const ticketsList = document.getElementById("ticketsList");

testBtn.addEventListener("click", () => {
  ticketsList.textContent = "JS OK ✅ άλλαξε το DOM!";
});
