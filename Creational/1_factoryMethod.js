class IPhone{
    constructor(model, price, memory){
        this.model = model,
        this.price = price,
        this.memory = memory
    }
}

class IPhoneFactory{
    create(type){
        switch(type){
            case 'iPhone X':
                return new IPhone(type, '600', '64');
            case 'iPhone 11':
                return new IPhone(type, '700', '64');
            case 'iPhone 12':
                return new IPhone(type, '900', '64');
            case 'iPhone 12 Pro':
                return new IPhone(type, '1200', '128');
        }
    }
}

const factory = new IPhoneFactory();

const iPhoneX = factory.create('iPhone X');
const iPhone11 = factory.create('iPhone 11');
const iPhone12 = factory.create('iPhone 12');
const iPhone12Pro = factory.create('iPhone 12 Pro');

console.log(iPhoneX);
console.log(iPhone11);
console.log(iPhone12);
console.log(iPhone12Pro);