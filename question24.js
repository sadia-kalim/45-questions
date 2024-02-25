/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests.
  Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//test of equality
var a = 5;
console.log("a==5? i predict it is true");
console.log(a == 5);
// test of inequality
var b = 11;
console.log("if b !=11? i predict it is false");
console.log(b != 11);
//test of using lower case function
var myname = "SADIA";
var s = myname.toLocaleLowerCase();
console.log("myname.tolocallowercase() , i predict it is true ");
console.log(s);
//test of using and ,or operators
var mynumber = 25;
console.log("mynumber<30||mynumber>11, i predict it is true");
console.log(mynumber < 30 || mynumber > 11);
//test whether an item is in array
var array = [1, 2, 3, 4, 5, 6];
var element = 6;
if (array.includes(element)) {
    console.log("".concat(element, " is in array"));
}
else {
    console.log("".concat(element, " is not in array"));
}
