const seriesDurations = [
  {
    title: "Game of thrones",
    days: 11,
    hours: 5,
    minutes: 48,
  },
  {
    title: "Sopranos",
    days: 5,
    hours: 22,
    minutes: 40,
  },
  {
    title: "The Wire",
    days: 8,
    hours: 9,
    minutes: 40,
  },
];

function logOutSeriesText() {
  const lifeInYears = 80;
  const lifeInMinutes = lifeInYears * 365 * 24 * 60;
  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const totalSeriesMinutes =
      series.days * 24 * 60 +
      series.hours * 60 +
      series.minutes;

    const percentage = (totalSeriesMinutes / lifeInMinutes) * 100;
    totalPercentage += percentage;

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  }

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();