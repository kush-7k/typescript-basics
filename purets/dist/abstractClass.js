"use strict";
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
//Objects cannot be created for abstract class as we know it already
// const kush1 = new TakePhoto("Portrait", "Test")
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Hello ");
    }
}
