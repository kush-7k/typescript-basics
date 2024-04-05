//Unions are the pipe symbol that uses helps to define a variable more than one type
let score:number | string = 33
//Try to keep it as strict as you can
score = 44
score ="55"
type User ={
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let hitesh: User| Admin = {name: "kush", id:23}
//we just changed the variable user from type user to admin
hitesh = {username:"hc", id:231}

function getDbUd(id: number |string){

    //This is the solution
    if(typeof id == "string"){
        id.toLowerCase()
    }
    //If you try to use string methods in this function directly, 
   // then it might not be possible as that may give you errors as typescript is smarter
    console.log(`DB is id: ${id}`);

}

//Arrays

//in the variable data then you cannot define number and string in one array as it is still not allowed
//However, there is more ways to achieve it.
const data: number[] |string []= ["1","2","3","4"]
//data2 is the way to have both the types in a single constant
const data2: (number|string)[] = [1,2,3,"4"]

//you can also use any
const data3: any[] = [1,2,"3", false]

// In this way you can just define a specific type or a number to a variable
//This can be really useful
let pi: 3.14 = 3.14
let seatAllotment: "aisle" | "middle" |"window"
//This is the error
//seatAllotment = "crew"
seatAllotment="aisle"