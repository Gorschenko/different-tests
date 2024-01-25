class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super("black");
  }
}

class WhiteColor extends Color {
  constructor() {
    super("white");
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());
