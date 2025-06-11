import vehicle from "./Vehicle.js";
    class Bike extends vehicle{
        constructor(id,owner){
            super(id,owner)
            this.type = 'bike'
        }
    }
    export default Bike