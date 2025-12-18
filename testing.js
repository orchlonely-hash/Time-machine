const colorPicker = document.getElementById("colorPicker");
const hexInput = document.getElementById("hexInput");
const preview = document.getElementById("preview");
const rgbValue = document.getElementById("rgbValue");

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16), 
        b: parseInt(result[3], 16),
      }
    : null;
}

function updateColor(color) {
  preview.style.backgroundColor = color;
  hexInput.value = color;
  const rgb = hexToRgb(color);
  if (rgb) {
    rgbValue.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  }
}

colorPicker.addEventListener("input", (e) => {
  updateColor(e.target.value);
});

hexInput.addEventListener("input", (e) => {
  const hex = e.target.value;
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    colorPicker.value = hex;
    updateColor(hex);
  }
});

function copyColor() {
  navigator.clipboard.writeText(hexInput.value);
  alert("Color copied: " + hexInput.value);
}

updateColor(colorPicker.value);

function randomRange(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const snowContainer = document.body;
const total = 200;

for (let i = 1; i <= total; i++) {
  const snowflake = document.createElement("div");
  snowflake.className = "snow";

  const randomX = Math.random() * 100;
  const randomOffset = randomRange(-10, 10);
  const randomXEnd = randomX + randomOffset;
  const randomXEndYoyo = randomX + randomOffset / 2;
  const randomYoYoTime = randomRange(40, 80) / 100;
  const randomYoYoY = randomYoYoTime * 100;
  const randomScale = Math.random();
  const fallDuration = randomRange(10, 30);
  const fallDelay = Math.random() * -30;
  const opacity = Math.random();

  snowflake.style.opacity = opacity;
  snowflake.style.transform = `translate(${randomX}vw, -10px) scale(${randomScale})`;
  snowflake.style.animation = `fall-${i} ${fallDuration}s ${fallDelay}s linear infinite`;

  const keyframes = `
        @keyframes fall-${i} {
          0% {
            transform: translate(${randomX}vw, -10px) scale(${randomScale});
          }
          ${randomYoYoTime * 100}% {
            transform: translate(${randomXEnd}vw, ${randomYoYoY}vh) scale(${randomScale});
          }
          100% {
            transform: translate(${randomXEndYoyo}vw, 100vh) scale(${randomScale});
          }
        }
      `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);

  snowContainer.appendChild(snowflake);
  
}