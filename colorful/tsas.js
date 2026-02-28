const total = 200;

function randomRange(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

for (let i = 0; i < total; i++) {
  const snowflake = document.createElement("div");
  snowflake.className = "snow";

  const x = Math.random() * 100;
  const scale = Math.random();
  const duration = randomRange(10, 30);

  snowflake.style.left = `${x}vw`;
  snowflake.style.animationDuration = `${duration}s`;
  snowflake.style.setProperty("--scale", scale);

  document.body.appendChild(snowflake);
}
