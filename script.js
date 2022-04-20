const hour = document.querySelector("#hour");
const minute = document.querySelector("#min");
const second = document.querySelector("#sec");
const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const day = document.querySelector("#day");
let timeId = null;

function getCurrentFullDate() {
  const currentDate = new Date();
  return currentDate;
}

function getCurrentHour() {
  const currentHour = getCurrentFullDate().getHours();
  return currentHour;
}

function getCurrentMinute() {
  const currentMinute = getCurrentFullDate().getMinutes();
  return currentMinute;
}

function getCurrentSecond() {
  const currentSec = getCurrentFullDate().getSeconds();
  return currentSec;
}

function getCurrentDate() {
  const todayDate = getCurrentFullDate().getDate();
  return todayDate;
}

function getCurrentMonth() {
  const currentMonth = getCurrentFullDate().getMonth();
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthArray[currentMonth];
  return month;
}

function getCurrentYear() {
  const currentYear = getCurrentFullDate().getFullYear();
  return currentYear;
}

function getCurrentDay() {
  const currentDay = getCurrentFullDate().getDay();
  const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = dayArray[currentDay];
  return day;
}

function updateTime() {
  hour.textContent = getCurrentHour();
  minute.textContent = getCurrentMinute();
  second.textContent = getCurrentSecond();
  date.textContent = getCurrentDate();
  month.textContent = getCurrentMonth();
  year.textContent = getCurrentYear();
  day.textContent = getCurrentDay();
}

timeId = setInterval(updateTime, 1000);