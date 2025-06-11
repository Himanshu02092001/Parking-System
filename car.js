import vehicle from "./Vehicle.js";
    class Car extends vehicle{
        constructor(id,owner){
            super(id,owner)
            this.type = 'car'
        }
    }
    export default Car