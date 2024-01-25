class StringIterator {
  constructor(elements) {
    this.elements = elements;
    this.index = 0;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const collection = new StringIterator(["Audi", "BMW", "Tesla", "Mersedes"]);

while (collection.hasNext()) {
  console.log(collection.next());
}

class ObjectIterator {
  constructor(elements) {
    this.index = 0;
    this.keys = Object.keys(elements);
    this.elements = elements;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const autos = {
  audi: {
    model: "Audi",
    color: "black",
    price: 20000,
  },
  bmw: {
    model: "Bmw",
    color: "white",
    price: 30000,
  },
  tesla: {
    model: "Tesla",
    color: "gray",
    price: 40000,
  },
};

const newCollection = new ObjectIterator(autos);

while (newCollection.hasNext()) {
  console.log(newCollection.next());
}
