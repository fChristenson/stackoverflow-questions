# How to access the correct `this` inside a callback?

```
function MyConstructor(data, transport) {
    this.data = data;
    transport.on('data', function () {
        alert(this.data);
    });
}

// Mock transport object
var transport = {
    on: function(event, callback) {
        setTimeout(callback, 1000);
    }
};

// called as
var obj = new MyConstructor('foo', transport);
```

However, I'm not able to access the `data` property of the created object inside the callback. It looks like `this` does not refer to the object that was created but to another one.

I also tried to use an object method instead of an anonymous function:

```
function MyConstructor(data, transport) {
    this.data = data;
    transport.on('data', this.alert);
}

MyConstructor.prototype.alert = function() {
    alert(this.name);
};
```

but it exhibits the same problems.

How can I access the correct object?