import Pass from "./pass.js"
class Monthly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = this.getPrice(vehicle.type)
        this.expiry = this.getExpiry()
    }
    getPrice(type){
        switch(type){
            case "cycle":
                return 50
            case "bike":
                return 100
            case "car":
                return 500
        }
    }
    getExpiry(){
        let currentDateTime = new Date()
        currentDateTime.setMonth(currentDateTime.getMonth() + 1)
        return currentDateTime
    }
}

export default Monthly