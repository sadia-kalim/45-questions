//changing guest list.
var people = ["ali", "bia", "tina"];
for (var i = 0; i < people.length; i++) {
    console.log("".concat(people[i], ", i would like to invite you on a dinner party"));
}
console.log("oops, ali is not able to attend dinner party so i cannot invite him. now i can make a new guest list");
var newlist = ["akbar", "tina", "bia"];
for (var i = 0; i < 3; i++) {
    console.log("".concat(newlist[i], " its invitation on a dinner party"));
}
