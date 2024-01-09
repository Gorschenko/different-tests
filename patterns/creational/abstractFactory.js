// Abstract factory
const bmwProducer = (kind) => {
    return kind === 'sport' ? sportCarFactory : familyCarFactory
}

const sportCarFactory = () => {
    return new Z4()
}

const familyCarFactory = () => {
    return new I3()
}

class Z4 {
    info() {
        return 'Z4 is sport car'
    }
}

class I3 {
    info() {
        return 'I3 is family car'
    }
}

const produce = bmwProducer('sport')

const myCar = produce()
console.log(myCar.info())