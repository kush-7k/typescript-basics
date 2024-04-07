"use strict";
//This is okay but what if there is also a datatype of number array
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase;
}
function printAll(strs) {
    // DO not do this !!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
//Narrowing using In operator
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return isAdminAccount;
    }
}
//instanceOf narrowing
//It checks that the a certain object is an instance of another object or not
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
        //      (parameter) x: Date
    }
    else {
        console.log(x.toLocaleUpperCase());
        //        (parameter) x: string
    }
}
//Here, it might be something new and in order by doing this,
// we make sure that return type is not a boolean and actual type hence ' is Type ' is a type of instance narrowing
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side*2
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * 2;
        case "rectangle":
            return shape.length * shape.width;
        //Default case is made for the cases which are never declared and then declared after this and due to this
        //The code will create an error and check it as this default case is of type never and hence it will be never assigned
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
