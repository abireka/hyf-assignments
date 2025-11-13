function getFullName(
  firstName,
  surName,
  useFormalName = false,
  gender = "male"
) {
  let fullName = firstName + " " + surName;

  if (useFormalName) {
    fullName = fullName.trim();
    if (gender && gender.toLowerCase() === "female") {
      formalTitle = "Lady ";
    } else {
      formalTitle = "Lord ";
    }

    fullName = formalTitle + fullName;
  }

  return fullName;
}

console.log(getFullName("Benjamin", "Hughes", true, "male"));
console.log(getFullName("Julia", "Zalazar", true, "Female"));
console.log(getFullName("", "Eka", true, "male"));
console.log(getFullName("Julia", "", false, "female"));
console.log(getFullName("Jonas", "Mekas"));
