import User  from "./User.js"

class Student extends User{
    constructor(name,contact){
        super(name,contact)
        this.type="student"
    }
}

export default Student