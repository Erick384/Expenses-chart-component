let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

// Define the data
let data = [20, 30, 40, 50, 60, 130, 12];

// Define the bar properties
let barWidth = 31;
let barSpacing = 10;
let barColor = "hsl(25, 47%, 15%)";

// Draw the bars
for (let i = 0; i < data.length; i++) {
  let x = i * (barWidth + barSpacing) + barSpacing;
  let y = canvas.height - data[i];
  let height = data[i];

  ctx.fillStyle = barColor;
  ctx.fillRect(x, y, barWidth, height);
}