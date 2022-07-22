const bill = document.getElementById('bill_input_field')
const tip = document.getElementById('tip_input_field')
const people = document.getElementById('people_number')
const total = document.getElementById('total_per_person')


let totalPeople = Number(people.innerText)

const calculateBill = () => {
    const billValue = Number(bill.value)
    const tipValue = Number(tip.value) / 100
    const tipAmmount  =  billValue * tipValue

    const totalAmount = (billValue + tipAmmount) / totalPeople
    total.innerText = `₹${totalAmount.toFixed(2)}`
}

const increasePeople = () => {
    totalPeople += 1
    people.innerText = totalPeople
    calculateBill()
}

const decreasePeople = () =>{
    totalPeople -= 1 
    if(totalPeople <= 1){
        totalPeople = 1
    }
    people.innerText = totalPeople
    calculateBill()
}