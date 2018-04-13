function MySelfConstructor(data, transport) {
  let self = this;
  self.data = data;
  // copy the "this" in to a variable and use that instead
  transport.on("data", function() {
    console.log(self.data);
    console.log("--------------------------");
  });
}

function MyBindConstructor(data, transport) {
  this.data = data;
  // .bind binds the lambda functions "this" to the provided value
  transport.on(
    "data",
    function() {
      console.log(this.data);
      console.log("--------------------------");
    }.bind(this)
  );
}

function MyES6Constructor(data, transport) {
  this.data = data;
  // es6 arrow functions do not create their own "this" but looks in the scope
  transport.on("data", () => {
    console.log(this.data);
    console.log("--------------------------");
  });
}

// Mock transport object
var transport = {
  on: function(event, callback) {
    setTimeout(callback, 1000);
  }
};

// called as
var obj = new MySelfConstructor("self", transport);
var obj = new MyBindConstructor("bind", transport);
var obj = new MyES6Constructor("arrow function", transport);
