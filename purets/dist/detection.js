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
