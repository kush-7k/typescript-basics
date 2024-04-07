abstract class TakePhoto1{
    constructor(
        public cameraMode: string,
        public filter: string
    ){
    }

    
    abstract getSepia(): void
    
}
//Objects cannot be created for abstract class as we know it already
// const kush1 = new TakePhoto("Portrait", "Test")

class Instagram1 extends TakePhoto1{

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Hello ")
    }
}