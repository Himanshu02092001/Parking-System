import  User  from "./User.js";
 class Faculty extends User{
    constructor(name,contact){
        super(name,contact)
        this.type ="faculty"
    }
}
export default Faculty