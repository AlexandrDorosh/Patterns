function bmwProducer(kind){
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory(){
    return new Z4();
}

function familyCarFactory(){
    return new I3();
}

class Z4 extends Car {
    info(){
        return 'Z4 is a Sport car!';
    }
}

class X extends Car {
    info(){
        return 'I3 is a Family car!';
    }
}



const produce = bmwProducer('sport');

const car = new produce();

console.log(car.info());