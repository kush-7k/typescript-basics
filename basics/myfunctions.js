"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
//avoiding the use of any as I have described the specific type of the function parameters
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("ello");
function signUpUser(name, email, password) {
}
signUpUser("Kush", "heied", "qmswcijwdc");
//How to return more accurate value
//By adding a colon and providing the proper return type you can definitely make it accurate
function hello(num) {
    return "hello ";
}
//This is the error
function getValue(myVal) {
    if (myVal > 0)
        return false;
    //return "200K"
    return true;
}
//How to use arrow function
var getHello = function (s /*datatype*/) {
    return "";
};
var heros = ["thor", "spiderman"];
heros.map(function (hero) {
    return 'Hero is ${hero}';
});
