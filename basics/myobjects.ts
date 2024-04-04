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
export{}