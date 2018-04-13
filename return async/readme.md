# How do I return the response from an asynchronous call?

I have a function `foo` which makes an Ajax request. How can I return the response from `foo`?

I tried to return the value from the success callback as well as assigning the response to a local variable inside the function and return that one, but none of those ways actually return the response.

```javacript
function foo() {
    var result;

    $.ajax({
        url: '...',
        success: function(response) {
            result = response;
            // return response; // <- I tried that one as well
        }
    });

    return result;
}

var result = foo(); // It always ends up being `undefined`.
```