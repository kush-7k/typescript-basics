const score:Array<number>=[]
const names:Array<string>=[]

function identityOne(val: boolean| number): boolean|number{
    return val
}

function identityTwo(val: any): any{
    return val
}
//The major difference between any and Type is that
//any can take all the datatypes and can return any of them irrespective to the one being taken
//Whereas Type can also take any datatype but will return the same data type that is received that means it locks the datatype
function identityThree<Type>(val: Type): Type{
    return val
}

// identityThree("3")

//Better way
function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}
//You can also do this like make your own data type and use it 
identityFour<Bottle>


function getSearchProducts<T>(products: T[]): T {

    const myIndex = 3
    return products[myIndex]
}

//What is arrow functions?
//The smarter and cooler way to define functions the below one is the replica of the above function
const getMoreSearchProducts = <T>(products : T[]): T => {

    const myIndex = 4
    return products[myIndex]
}

interface database {
    conncetion: string,
    username: string,
    password: string
}

//How can we use extends in realworld
function anotherFunction<T, U extends database>(valOne:T, valTwo:U): object{
    return {
        valOne,
        valTwo
    }
}
//anotherFunction(3, {})
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(products: T){
        this.cart.push(products)
    }
}