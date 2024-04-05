//Bad behaviour of objects
const User = {
    name: "Kush" , 
    email: "k@k.com",
    isActive: true
}

 function createUser({name: string, isPaid: boolean}){
    
 } 
 createUser({name:User.name, isPaid:User.isActive})


 function createCourse():{name:string, price:number}{
    return{name: "reactJS", price: 399}
 }


 //You can make your own types by using keyword type
 //Also you can alias all the datatypes as well and give it your own name however it is not useful
 type User = { 
    name: string;
    email: string;
    isActive: boolean;

 }
 //aliasing
 type myString= string

 function createUser1(user: User){
 return(User);
 }

 createUser1({name: "", email:"", isActive: true})
export{}


type User12 = { 
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: string;
}

function createUser12(u:User12){

}

let myUser: User12 ={
    _id: "123",
    name: "h",
    email: "jasm",
    isActive: false
    
}

myUser.email = "k@keyof.cn"
//This is error
//myUser.id = 12 as it was readonly

type cardNumber = {
    cardNumber: string
}
type cardDate ={
    cardDate: string
}
 
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
