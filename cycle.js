import vehicle from "./Vehicle.js"
class Cycle extends vehicle {
    constructor(id,owner){
        super(id,owner)    
        this.type='cycle'
    }
}
export default Cycle