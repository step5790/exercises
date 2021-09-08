window.addEventListener("DOMContentLoaded", getColor);

// ***********************get color

function getColor(userColor, hex) {
  userColor = document.querySelector("#input").value;
  hex = document.querySelector("#input").addEventListener("input", getHex);
  displayUserColor(userColor);
  return { hex, userColor };
}

// **********display user color

function displayUserColor(userColor) {
  document.querySelector(".color-container").style.background = userColor;
}

// *****************************get hex

function getHex(hex, rgb) {
  hex = document.querySelector("#input").value.substring(1, hex.length);

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  rgb = { r: r, g: g, b: b };

  console.log(hex);
  console.log(rgb);
  console.log(r);
  console.log(g);
  console.log(b);

  getHsl(rgb);
  displayRgb(rgb);
  getColor();

  return { r, g, b };
}

// ******************************get hsl

function getHsl(rgb, hsl) {
  r = rgb.r;
  g = rgb.g;
  b = rgb.b;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  hsl = { h: h, s: s, l: l };

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  console.log(hsl);
  displayHsl(hsl);

  return { h, s, l };
}

// *****************************display rgb

function displayRgb(rgb) {
  document.querySelector("#hex span").innerHTML =
    document.querySelector("#input").value;
  document.querySelector("#rgb span").innerHTML =
    rgb.r + ", " + rgb.g + ", " + rgb.b;
}

// *****************************display hsl

function displayHsl(hsl) {
  document.querySelector("#hsl span").innerHTML =
    Math.round(hsl.h) + ", " + Math.round(hsl.s) + ", " + Math.round(hsl.l);
}
