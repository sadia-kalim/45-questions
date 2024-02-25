"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
 phrase the Great to each magician’s name. Call show_magicians() to see that the
 list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_great1(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magiciansName = ["Edward", "David", "Alice", "Anthony"];
show_magicians(make_great1(magiciansName));
