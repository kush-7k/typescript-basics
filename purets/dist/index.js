"use strict";
console.log("typescript is here");
class User {
    constructor(email, name) {
        this.city = "Ahmedabad";
        this.email = email;
        this.name = name;
    }
}
//Better way to declare class
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Ahmedabad";
    }
    get getAppleEmail() {
        return `Apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //Setters has no return type in typescript
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    //there do exists private methods and can be accessible only in the class
    deleteToken() {
        console.log("token deelted");
    }
}
const kush = new User("k@k.com", "kush");
