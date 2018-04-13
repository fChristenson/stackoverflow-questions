$(document).on("mouseenter", "h1", null, function(e) {
  console.log(`${e.target.textContent} in`);
  console.log("--------------------------");
});

$(document).on("mouseleave", "h1", null, function(e) {
  console.log(`${e.target.textContent} out`);
  console.log("--------------------------");
});

const newH1 = document.createElement("h1");
newH1.textContent = "bar";

document.body.appendChild(newH1);
