const user: string[]= ['kp']
//Tuples are used when we are concerned about the datatype as well as the order in the array
//It is useful during API calls
let user12:  [string, number, boolean]
user12 = ["kp", 12, true]
//this is error as we cannot change the error
//user12 = ["12", true, 1]
type User1 = [number, string]
const newuser: User1 = [12, "king"]
//The one thing is that we can change the values even after declaring 
newuser[1]='Kings'
//We can use the array methods with the tuples
newuser.push("helo")