let clockTimer = document.querySelector(".clock-timer");
const dateDetails = document.querySelector(".dateDetails");

function formatDate() {
  const dateVal = new Date();
  const month = dateVal.getUTCMonth();
  const day = dateVal.getUTCDate();
  const year = dateVal.getUTCFullYear();
  const dateConv = new Date(year, month, day);
  const currentMonth = dateConv.toLocaleString("default", { month: "long" });
  const currentDay = dateConv.toLocaleString("default", { weekday: "long" });
  dateDetails.innerText = `${currentDay}, ${currentMonth} ${padZero(
    day
  )} ${year} `;
}
formatDate();

function formatTime() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return (clockTimer.innerHTML = `${padZero(hours)}: ${padZero(
    minutes
  )} : ${padZero(seconds)} ${meridiem}`);
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

window.addEventListener("load", () => {
  setInterval(() => {
    formatTime();
  }, 1000);
});
