const travelInformation = {
  speed: 80,
  destinationDistance: 285,
};

function notThisFunctionName(info) {
  const totalHours = info.destinationDistance / info.speed;

  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime);