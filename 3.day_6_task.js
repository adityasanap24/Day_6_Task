//3. Write a “person” class to hold all the details.
class info{
    constructor(name,age,DOB,email,location,education){
        this.name=name,
        this.age=age,
        this.DOB=DOB,
        this.email=email,
        this.location=location,
        this.education=education
    }
}
let user=new info ("Aditya",26,"24/12/1998","adityasanap1122@gmail.com","nashik","BE Computer")
console.log(user)

console.log(`hi i am ${user.name} and my age is ${user.age} and i complete my education in ${user.education} now i am live in ${user.location} thank you.`)