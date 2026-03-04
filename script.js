const randomBgBtn = document.getElementById("randomBgBtn");

function getRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#222" : "#f5f5f5";
}

randomBgBtn.addEventListener("click", () => {
  const color = getRandomColor();
  document.body.style.background = color;
  document.body.style.color = getContrastYIQ(color);
});

const menuBtn = document.getElementById("menuBtn");
const subMenu = document.getElementById("subMenu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  subMenu.style.display = menuOpen ? "block" : "none";
});

document.addEventListener("click", (e) => {
  if (menuOpen && !subMenu.contains(e.target) && e.target !== menuBtn) {
    subMenu.style.display = "none";
    menuOpen = false;
  }
});
