const colorPicker = document.getElementById("colorPicker");
const hexInput = document.getElementById("hexInput");
const preview = document.getElementById("preview");
const rgbValue = document.getElementById("rgbValue");
  /* hex to rgb */
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
  /*  */
function updateColor(color) {
  preview.style.backgroundColor = color;
  hexInput.value = color;

  const rgb = hexToRgb(color);
  if (rgb) {
    rgbValue.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  }
}

colorPicker.addEventListener("input", e => {
  updateColor(e.target.value);
});

hexInput.addEventListener("input", e => {
  const hex = e.target.value;
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    colorPicker.value = hex;
    updateColor(hex);
  }

  });

updateColor(colorPicker.value);
  