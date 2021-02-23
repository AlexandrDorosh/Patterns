class IPhone{
    constructor(model, price, memory){
        this.model = model,
        this.price = price,
        this.memory = memory
    }
}

class IPhoneFactory{
    create(type){
        if (type === 'iPhone X'){
            console.log(new IPhone(type, '600', '64'));
        }
        if (type === 'iPhone 11'){
            console.log(new IPhone(type, '700', '64'));
        }
        if (type === 'iPhone 12'){
            console.log(new IPhone(type, '900', '64'));
        }
        if (type === 'iPhone 12 Pro'){
            console.log(new IPhone(type, '1200', '128'));
        }
    }
}

const factory = new IPhoneFactory();

const iPhoneX = factory.create('iPhone X');
const iPhone11 = factory.create('iPhone 11');
const iPhone12 = factory.create('iPhone 12');
const iPhone12Pro = factory.create('iPhone 12 Pro');