function phoneProducer(kind){
    return kind === 'android' ? samsung : iPhone;
}

function samsung(){
    return new GalaxyS21();
}

function iPhone(){
    return new X();
}

class GalaxyS21 {
    info(){
        return 'Galaxy S21 is a android!';
    }
}

class X {
    info(){
        return 'X is a ios!';
    }
}

const produce = phoneProducer('android');

const myPhone = new produce();

console.log(myPhone.info());