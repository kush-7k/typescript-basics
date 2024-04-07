console.log("typescript is here")

class User{
    email: string 
    name: string
    readonly city: string = "Ahmedabad"
    constructor(email: string,name: string){
        this.email = email;
        this.name =  name;
    }
}

//Better way to declare class

class User2{

    protected _courseCount = 1
    readonly city: string = "Ahmedabad"
    constructor(
        public email: string, 
        public name: string,
    ){
}
get getAppleEmail(): string{
    return `Apple ${this.email}`
}

get courseCount(): number {
    return this._courseCount
}
//Setters has no return type in typescript
set courseCount(courseNum){
   if(courseNum<=1){
    throw new Error("Course count should be more than 1")
   }
   this._courseCount = courseNum
}
//there do exists private methods and can be accessible only in the class
private deleteToken(){
    console.log("token deelted")
}

}

const kush = new User("k@k.com","kush");

class SubUser extends User2{
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount=4
        
    }
}