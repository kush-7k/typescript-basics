"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//The major difference between any and Type is that
//any can take all the datatypes and can return any of them irrespective to the one being taken
//Whereas Type can also take any datatype but will return the same data type that is received that means it locks the datatype
function identityThree(val) {
    return val;
}
// identityThree("3")
//Better way
function identityFour(val) {
    return val;
}
//You can also do this like make your own data type and use it 
identityFour;
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//What is arrow functions?
//The smarter and cooler way to define functions the below one is the replica of the above function
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
//How can we use extends in realworld
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
