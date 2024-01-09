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
            return new Bmw(type, 111000, 320)
        }
    }
}

const bmwFactory = new BmwFactory()

const x5 = bmwFactory.create('X5')
const x6 = bmwFactory.create('X6')

// NEW EXAMPLE

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)

        // можно добавлять любые данные
        member.type = type
        member.define = function() {
            console.log(this.name, this.type, this.cost)
        }

        return member
    }
}

const memberFactory = new MemberFactory()

const members = [
    memberFactory.create('Member 1', 'simple'),
    memberFactory.create('Member 2', 'premium'),
]

members.forEach(m => m.define())