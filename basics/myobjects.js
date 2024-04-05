"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bad behaviour of objects
var User = {
    name: "Kush",
    email: "k@k.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: User.name, isPaid: User.isActive });
function createCourse() {
    return { name: "reactJS", price: 399 };
}
function createUser1(user) {
    return (User);
}
createUser1({ name: "", email: "", isActive: true });
function createUser12(u) {
}
var myUser = {
    _id: "123",
    name: "h",
    email: "jasm",
    isActive: false
};
myUser.email = "k@keyof.cn";
