/*City Names: Write a function called city_country() that takes in the name of a city
 and its country. The function should return a string formatted like this:

"Lahore, Pakistan"*/
//Cityy Names Function
function city_country(city, country) {
    return ("\"".concat(city, ", ").concat(country, "\""));
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("New York", "America"));
