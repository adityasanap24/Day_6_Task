// 4. write a class to calculate uber price
class Uber{
    constructor(km){
        this.km=km,
        this.price=km*5
        // console.log(this.km,this.price)
    }
    getPrice(){
        console.log(`Ride cost is ${this.price}`)
    }
}
let ride=new Uber(10)
ride.getPrice()