function addTwo(num: number){
    return num + 2
}

addTwo(5)

//avoiding the use of any as I have described the specific type of the function parameters


function getUpper(value: string){
    return value.toUpperCase()
}

getUpper("ello")

function signUpUser(name:string, email:string,password:string){

    
}
signUpUser("Kush", "heied", "qmswcijwdc")


//How to return more accurate value
//By adding a colon and providing the proper return type you can definitely make it accurate
function hello(num: number): string{
    return "hello ";
}

//This is the error
function getValue(myVal:number): boolean{
    if(myVal>0)
    return false
    //return "200K"
    return true
}

//How to use arrow function
const getHello = (s: string/*datatype*/): /*return type*/string=>{
    return ""
}

//Typescript is smarter that if you change the elements of heros then the element hero will change its type automatically
//Better way to write functions
const heroes = ["thor", "spiderman"];
heroes.map((hero: string) => {
    return `Hero is ${hero}`;
});

function consoleError(errmsg:string): void{
    console.log(errmsg);
}

//The never type is specifically created for the error handling to make it more robust
//It is pretty similar to the void
function handleError(errmsg:string): never{
    throw new Error(errmsg);
}


export{}