const testBtn = document.querySelector("#testBtn");
const counterResetBtn = document.querySelector("#counterResetBtn");
const ticketsList = document.querySelector("#ticketsList");
const clickInfo = document.querySelector("#clickInfo");

let counter = 0;

testBtn.addEventListener("click", () => {
  counter++;
  clickInfo.textContent = `Clicks: ${counter}`;
  ticketsList.textContent = "✅ JS δουλεύει! (Αύριο θα κάνουμε render tickets.)";
});

counterResetBtn.addEventListener("click", () => {
  counter = 0;
  clickInfo.textContent = `Clicks: ${counter}`;
});
