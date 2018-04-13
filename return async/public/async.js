// old way
(function() {
  function foo() {
    return $.ajax({
      url: "/foo",
      success: function(response) {
        return response;
      }
    });
  }

  foo().then(function(result) {
    console.log(result);
    console.log("--------------------------");
  });
})();

// new way
(async () => {
  async function foo() {
    return $.ajax({
      url: "/foo",
      success: function(response) {
        return response;
      }
    });
  }

  var result = await foo();

  console.log(result);
  console.log("--------------------------");
})();
