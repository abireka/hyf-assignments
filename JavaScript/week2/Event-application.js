function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"
  ];
  const eventDay = (new Date().getDay() + daysFromToday) % 7;
  return weekdays[eventDay];
}
console.log(getEventWeekday(5)); 
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));