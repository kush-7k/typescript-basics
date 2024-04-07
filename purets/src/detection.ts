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

//Discriminated Union

interface Circle{
    kind: "circle",
    radius: number
}
interface Square{
    kind: "square"
    side: number
}
interface Rectangle{
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle
function getTrueShape(shape: Shape){
    if(shape.kind==="circle"){
        return Math.PI * shape.radius ** 2
    }
    //return shape.side*2
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side*2;
        case "rectangle":
            return shape.length * shape.width;

            //Default case is made for the cases which are never declared and then declared after this and due to this
            //The code will create an error and check it as this default case is of type never and hence it will be never assigned
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}