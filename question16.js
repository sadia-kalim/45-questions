//more guest:
var guest = ["ali", "bia", "tina"];
console.log(guest);
var message = ("i find more space on my dinning table, so i have invited more friends.");
console.log(message);
guest.unshift("asad"); //add new guest asad.
//console.log(`${guest},${message}`);
guest.splice(2, 0, "anam"); //add a guest in middle
console.log(guest);
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(guest[i], ",i would like to invite you on a dinner party."));
}
