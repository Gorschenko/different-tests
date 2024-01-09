class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model
        this.price = price
        this.maxSpeed = maxSpeed
    }
}

class BmwFactory {
    create(type) {
        if (type === 'X5') {
            return new Bmw(type, 108000, 300)
        }
        if (type === 'X6') {
            return Bmw(type, 111000, 320)
        }
    }
}

const bmwFactory = new BmwFactory()

const x5 = bmwFactory.create('X5')
const x6 = bmwFactory.create('X6')