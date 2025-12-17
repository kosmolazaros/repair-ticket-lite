const testBtn = document.querySelector("#testBtn");
const counterResetBtn = document.querySelector("#counterResetBtn");
const ticketsList = document.querySelector("#ticketsList");
const clickInfo = document.querySelector("#clickInfo");

let counter = 0;

function updateCounterText() {
  clickInfo.textContent = `Clicks: ${counter}`;
}

if (!testBtn || !counterResetBtn || !ticketsList || !clickInfo) {
  console.error("Missing required elements. Check ids in index.html.");
} else {
  updateCounterText();

  testBtn.addEventListener("click", () => {
    counter += 1;
    updateCounterText();
    ticketsList.textContent = "✅ JS OK. Next: render real tickets from form state.";
  });

  counterResetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounterText();
  });
}
