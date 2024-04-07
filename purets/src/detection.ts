//This is okay but what if there is also a datatype of number array
function detectType(val: number | string){
    if(typeof val === "string")
        {return val.toLowerCase()}
    return  val+ 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("please provide ID")
        return
    }
    id.toLowerCase
}

function printAll(strs: string|string[]|null){

    // DO not do this !!!!!

    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }
        else if (typeof strs === "string"){
            console.log(strs)
        }
    }
}

interface User12{
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}


//Narrowing using In operator
function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return isAdminAccount
    }
}

//instanceOf narrowing

//It checks that the a certain object is an instance of another object or not
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString);
  //      (parameter) x: Date
    }
    else{
        console.log(x.toLocaleUpperCase());
//        (parameter) x: string
    }
}

type Fish = {swim: () => void};

type Bird = {fly: () => void};

//Here, it might be something new and in order by doing this,
// we make sure that return type is not a boolean and actual type hence ' is Type ' is a type of instance narrowing
function isFish(pet: Fish | Bird): pet is Fish{

   return (pet as Fish).swim !== undefined

}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    }
    else{
        pet
        return "Bird Food"
    }
}