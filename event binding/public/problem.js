$("h1").hover(
  function() {
    console.log("foo in");
    console.log("--------------------------");
  },
  function() {
    console.log("foo out");
    console.log("--------------------------");
  }
);

const newH1 = document.createElement("h1");
newH1.textContent = "bar";

document.body.appendChild(newH1);
