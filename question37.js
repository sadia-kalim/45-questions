/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
 with the default message, and a shirt of any size with a different message.*/
//Shirts Function
function make_shirt2(shirt, message) {
    if (shirt === void 0) { shirt = "Large"; }
    if (message === void 0) { message = "It's Comfortable"; }
    console.log("The shirt size is ".concat(shirt, " and the message ").concat(message));
}
//Shirts Sizes
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "this shirt is loose");
