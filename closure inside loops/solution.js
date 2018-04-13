var funcs = [];

function makeFunc(i) {
  return function() {
    console.log("My value: " + i);
  };
}

for (var i = 0; i < 3; i++) {
  // let's create 3 functions
  funcs[i] = makeFunc(i);
}

for (var j = 0; j < 3; j++) {
  funcs[j](); // and now let's run each one to see
}
