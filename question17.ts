//shrinking guests:
//more guest:
let Guest= ["ali", "bia", "tina"];
let Message=("i find more space on my dinning table, so i have invited more friends.");
Guest.unshift("asad");//add new guest asad.
console.log(`${Guest},${Message}`);
Guest.splice(2,0,"anam");//add a guest in middle
console.log(Guest);
let NewMessage=("i would like to invite you on a dinner party.");
for (let i; i<Guest.length; i++){console.log(`${NewMessage},${Guest[i]}`);}
//now we have to shrink guest list
//unfortunately table is unavailable according to my length so we have to refuse some gusts.
console.log("i can invite only two people because dinner table cannot arrive on time.");

let new_message=("unfortunately i come to know that dinner table is not available,we ll see next time");

console.log("i am sorry tina i cannot invite you.");
Guest.pop();

console.log("i am sorry bia i acnnot invite you");
Guest.pop();

console.log("i am sorry anam i acnnot invite you");
Guest.pop();
console.log(Guest);