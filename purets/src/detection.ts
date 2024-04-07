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

function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        return isAdmin
    }
}