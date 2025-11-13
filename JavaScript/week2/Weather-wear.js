function outfitSuggestion(temperature) {
  
  if (temperature >= 30) {
    return "Shorts, t-shirt and sandals";
  } else if (temperature >= 25) {
    return "T-shirt and trousers";
  } else if (temperature >= 18) {
    return "T-shirt and jeans";
  } else if (temperature >= 10) {
    return "Light jacket and long trousers";
  } else if (temperature >= 0) {
    return "Warm coat, sweater and muffler";
  } else {
    return "Winter jacket and gloves";
  }
}

const clothesToWear = outfitSuggestion(18);
console.log(clothesToWear);

console.log(outfitSuggestion(-5));
console.log(outfitSuggestion(27));