//Unions are the pipe symbol that uses helps to define a variable more than one type
var score = 33;
//Try to keep it as strict as you can
score = 44;
score = "55";
var hitesh = { name: "kush", id: 23 };
//we just changed the variable user from type user to admin
hitesh = { username: "hc", id: 231 };
function getDbUd(id) {
    //This is the solution
    if (typeof id == "string") {
        id.toLowerCase();
    }
    //If you try to use string methods in this function directly, 
    // then it might not be possible as that may give you errors as typescript is smarter
    console.log("DB is id: ".concat(id));
}
//Arrays
//in the variable data then you cannot define number and string in one array as it is still not allowed
//However, there is more ways to achieve it.
var data = ["1", "2", "3", "4"];
//data2 is the way to have both the types in a single constant
var data2 = [1, 2, 3, "4"];
//you can also use any
var data3 = [1, 2, "3", false];
// In this way you can just define a specific type or a number to a variable
//This can be really useful
var pi = 3.14;
var seatAllotment;
//This is the error
//seatAllotment = "crew"
seatAllotment = "aisle";
