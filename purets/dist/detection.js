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
function isAdmin(account) {
    if ("isAdmin" in account) {
        return isAdmin;
    }
}
