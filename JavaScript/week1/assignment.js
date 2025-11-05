console.log("Week 1 assignment");

// Age-ify
const yearOfBirth = 1994;
const yearFuture = 2046;

const age = yearFuture - yearOfBirth;
console.log(age);

console.log("You will be " + age + " years old in " + yearFuture + ".");

// Goodboy-Oldboy
const dogYearOfBirth = 2022;
const dogYearFuture = 2029;
const humanYears = dogYearFuture - dogYearOfBirth;
const dogYears = humanYears * 7;
const shouldShowResultInDogYears = true; //Boolean

console.log(
  `Your dog will be ${humanYears} human years old in ${dogYearFuture}`
);

console.log(
  `Your dog will be ${dogYears} (${shouldShowResultInDogYears}) dog years old in ${dogYearFuture}`
);

// Housey pricey

//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
//volumeInMeters = width * depth * height;

//Peter's house
const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterVolumeInMeters = peterWidth * peterDepth * peterHeight;
const peterGardenSize = 100;
const peterActualCost = 2500000;

const peterEstimatedPrice =
  peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;
console.log(peterEstimatedPrice); //2030000
console.log(peterActualCost - peterEstimatedPrice); //470000, Peter is paying too much

// Julia's House
const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaVolumeInMeters = juliaWidth * juliaDepth * juliaHeight;
const juliaGardenSize = 70;
const juliaActualCost = 1000000;

const juliaEstimatedPrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;
console.log(juliaEstimatedPrice); //1121000
console.log(juliaActualCost - juliaEstimatedPrice); //-121000, Julia is paying less

// Ez Namey

const firstWords = [
  "Zorp",
  "Flibber",
  "Squiggle",
  "Blarg",
  "Quix",
  "Glimmer",
  "Pling",
  "Vexi",
  "Crunch",
  "Noodle",
];

const secondWords = [
    "Tech",
    "Solutions",
    "Flow",
    "Metrics",
    "Core",
    "Systems",
    "Labs",
    "Bridge",
    "Ventures",
    "AI"
];

const randomNumber = Math.floor(Math.random() * 10);
const randomFirstWord = firstWords[randomNumber];
const randomSecondWord = secondWords[randomNumber];

const startupName = randomFirstWord + randomSecondWord;

console.log(startupName);

