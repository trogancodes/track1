const date = new Date();

function updateDay() {
  const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

  const currentDay = date.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  day.textContent = dayNames[currentDay];
}

function updateTime() {
  const time = document.querySelector('[data-testid="currentUTCTime"]');

  const UTC = date.toUTCString();

  time.textContent = UTC;
}

updateDay();
updateTime();