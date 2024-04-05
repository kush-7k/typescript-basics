interface User23 {
    readonly dbId: number
    email:string
    userId:number
    googleId?: string
    startTrial: () => string
    secondTrial(): string
    getCoupon(couponname: string): number
}

//This is known as re-opening of the interface
interface User23{
    githubToken: string
}
//Interface supports inheritance in typescript

interface Addmin extends User23{
   role: "admin" | "ta" | "learner" 
}
//More than one interface has the same name and it is valid

const kush: Addmin= {dbId: 22, email:"k@k.com", userId:123,
githubToken:"hsp",
role:"ta",
startTrial: ()=>{
    return "trail"
},
secondTrial: ()=>{
    return "hello"
},
getCoupon:(name: "kush")=>
{
    return 1;
}}


