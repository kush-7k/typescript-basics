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