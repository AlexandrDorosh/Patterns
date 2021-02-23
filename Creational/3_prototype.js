class BMW {
    constructor(model, price, color, autoTransmission){
        this.model = model;
        this.price = price;
        this.color = color;
        this.autoTransmission = autoTransmission;
    }

    produce(){
        return new BMW(this.model, this.price, this.color, this.autoTransmission);
    }
}

const prototypeCar = new BMW('X6', 80000, 'white', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.color = 'black';
car1.autoTransmission = true;

console.log(car1);
console.log(car2);
console.log(car3);