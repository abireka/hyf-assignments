// Random background color generator
const randomBgBtn = document.getElementById("randomBgBtn");

// Generate a random hex color
function getRandomColor() {
  const hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hexColor.padStart(6, "0");
}

// Calculate contrast color based on YIQ algorithm
// Returns either dark (#222) or light (#f5f5f5) text color
function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  // YIQ formula for perceived brightness
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  // Threshold: if brightness >= 128, use dark text; otherwise light text
  return yiq >= 128 ? "#222" : "#f5f5f5";
}

// random background button click
randomBgBtn.addEventListener("click", () => {
  const color = getRandomColor();
  document.body.style.background = color;
  document.body.style.color = getContrastYIQ(color);
});

// Menu functionality
const menuBtn = document.getElementById("menuBtn");
const subMenu = document.getElementById("subMenu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  subMenu.style.display = menuOpen ? "block" : "none";
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (menuOpen && !subMenu.contains(e.target) && e.target !== menuBtn) {
    subMenu.style.display = "none";
    menuOpen = false;
  }
});
