class Pass{
    constructor(vehicle){
        this.vehicle = vehicle
    }

    print(){
        let passToBePrint = `
            <label for="">Name</label>
            <label for="">${this.vehicle.owner.name}</label>
            <label for="">Vehicle Id</label>
            <label for="">${this.vehicle.id}</label>
            <label for="">Vehicle Model</label>
            <label for="">${this.vehicle.model}</label>
            <label for="">Expiry</label>
            <label for="">${this.expiry}</label>
        `   
        const pass = document.querySelector('.pass')
        pass.innerHTML = passToBePrint
    }
}

export default Pass