import './style.css'

document.getElementById("loadMath").addEventListener("click", async () => {
  const math = await import("./math.js");
  console.log("Addition: ", math.add(5, 3));
  console.log("Subtraction: ", math.subtract(5, 3));
});

document.getElementById("loadString").addEventListener("click", async () => {
  const string = await import("./string.js");
  console.log("Uppercase: ", string.toUpperCase("hello"));
  console.log("Lowercase: ", string.toLowerCase("HELLO"));
});
