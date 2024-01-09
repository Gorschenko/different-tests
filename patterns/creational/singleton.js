class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance
        }
        this.counter = 0
        Counter.instance = this
        return this
    }

    getCounter() {
        return this.counter
    }
    
    increaseCounter() {
        return this.counter++
    }
}

const singletonCounterFirst = new Counter()
const singletonCounterSecond = new Counter()

singletonCounterFirst.increaseCounter();
singletonCounterFirst.increaseCounter();
singletonCounterSecond.increaseCounter();

console.log(singletonCounterFirst.getCounter()) // 3
console.log(singletonCounterSecond.getCounter()) // 3
