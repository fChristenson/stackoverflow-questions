function foo() {
  var result = 1;

  $.ajax({
    url: "/foo",
    success: function(response) {
      result = response;
      console.log(response);
      console.log("--------------------------");
    }
  });

  return result;
}

var result = foo();

console.log(result);
console.log("--------------------------");
