class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) {
      return model;
    }
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    return this.models;
  }
}

const autoFactory = new AutoFactory();

const bmw = autoFactory.create("BMW");
const audi = autoFactory.create("Audi");
const tesla = autoFactory.create("Tesla");
const tesla2 = autoFactory.create("Tesla");

console.log(autoFactory.getModels());
