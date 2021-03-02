class BMW {
    constructor(model, price, color, autoTransmission){
        this.model = model;
        this.price = price;
        this.color = color;
        this.autoTransmission = autoTransmission;
    }

    clone(){
        return new BMW(this.model, this.price, this.color, this.autoTransmission);
    }
}

const prototypeCar = new BMW('X6', 80000, 'white', false);

const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();
const car3 = prototypeCar.clone();

car1.color = 'black';
car1.autoTransmission = true;

car2.color = 'white';

car3.color = 'red';
car3.autoTransmission = true;

console.log(car1);
console.log(car2);
console.log(car3);