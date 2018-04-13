# JavaScript closure inside loops – simple practical example

```
var funcs = [];
for (var i = 0; i < 3; i++) {      // let's create 3 functions
  funcs[i] = function() {          // and store them in funcs
    console.log("My value: " + i); // each should log its value.
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j]();                      // and now let's run each one to see
}
```
It outputs this:

* My value: 3
* My value: 3
* My value: 3

Whereas I'd like it to output:

* My value: 0
* My value: 1
* My value: 2