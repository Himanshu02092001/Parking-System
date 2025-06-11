import Faculty from "./user/Faculty.js"
import Student from "./user/Student.js"
import Cycle from "./Vehicle/cycle.js"
import Bike from "./Vehicle/bike.js"
import Car from "./Vehicle/car.js"
import Daily from "./pass/daily.js"
import Monthly from "./pass/monthly.js" 
import Anually from "./pass/Anually.js"


document.addEventListener("DOMContentLoaded", () => {
    let name = document.getElementById('userName')
    let contact = document.getElementById('userContact')
    let role = document.getElementById('role')
    const userSaveBtn = document.getElementById('userSaveBtn')
    userSaveBtn.addEventListener('click', e => {
        let user = null
        e.preventDefault()
        if(name.value && contact.value  && role.value){
            user = role.value === 'student'
                    ? new Student(name.value, contact.value)
                    : new Faculty(name.value, contact.value)

            console.log(user)
            alert(`Hey ${user.name} You are succesfully registered` )
            document.querySelector('.user').style.display = 'none'
        }else{
            alert('Please fill out the required fields !')
        }

        let vehicleId = document.getElementById('vehicleId')
        let type = document.getElementById('type')
        const vehicleSaveBtn = document.getElementById('vehicleSaveBtn')
        vehicleSaveBtn.addEventListener('click', e => {
            let vehicle = null
            e.preventDefault()

            if(vehicleId.value && type.value){
                switch(type.value){
                    case 'cycle':
                        vehicle = new Cycle(vehicleId.value, user)
                    break
                    case 'bike':
                        vehicle = new Bike(vehicleId.value, user)
                    break
                    case 'car':
                        vehicle = new Car(vehicleId.value, user)
                    break
                }
                console.log(vehicle)
                alert(`Hey ${user.name}! Your  is succesfully registered !`)
                document.querySelector('.vehicle').style.display = 'none'
            }else{
                alert('Please fill out the required fields !')
            }
        const passChoice = document.querySelector('.pass-choice')      
            let dailypass = new Daily(vehicle)
            const dailyPassButton = document.createElement("INPUT")
            dailyPassButton.setAttribute("type","button")
            dailyPassButton.setAttribute("value", `Daily : ${dailypass.price}`)
            dailyPassButton.addEventListener('click', () => {
                passChoice.style.display = "none"
                dailypass.print()
            })
            passChoice.appendChild(dailyPassButton)
        
            let monthlyPass = new Monthly(vehicle)
            const monthlyPassButton = document.createElement("INPUT")
            monthlyPassButton.setAttribute("type","button")
            monthlyPassButton.setAttribute("value", `Monthly : ${monthlyPass.price}`)
            monthlyPassButton.addEventListener('click', () => {
                passChoice.style.display = "none"
                monthlyPass.print()
            })
            passChoice.appendChild(monthlyPassButton)

            let anuallyPass = new Anually(vehicle)
            const anuallyPassButton = document.createElement("INPUT")
            anuallyPassButton.setAttribute("type","button")
            anuallyPassButton.setAttribute("value", `Anually : ${anuallyPass.price}`)
            anuallyPassButton.addEventListener('click', () => {
                passChoice.style.display = "none"
                anuallyPass.print()
            })
            passChoice.appendChild(anuallyPassButton)
        })   
    })
}) 