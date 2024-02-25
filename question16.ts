//more guest:
let guest= ["ali", "bia", "tina"];
console.log(guest);

let message=("i find more space on my dinning table, so i have invited more friends.");
console.log(message);

guest.unshift("asad");//add new guest asad.

guest.splice(2,0,"anam");//add a guest in middle
console.log(guest);
for (let i=0; i<guest.length;i++){console.log(`${guest[i]},i would like to invite you on a dinner party.`);}
