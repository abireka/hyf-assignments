const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("student-name");
const sortButton = document.getElementById("sort-button");
const resultText = document.getElementById("result-text");

sortButton.addEventListener("click", function () {
  const studentName = nameInput.value.trim();
  if (studentName === "") {
    resultText.textContent =
      "Hmm... I sense a mind, but no name!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * houses.length);
  const house = houses[randomIndex];

  resultText.textContent = "🎩 " + studentName + " belongs in " + house + "!";
});
