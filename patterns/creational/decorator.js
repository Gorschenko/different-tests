// First example
class AbstractCar {
  constructor() {
    this.price = 0;
    this.model = "";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class TeslaCar extends AbstractCar {
  constructor() {
    super();
    this.price = 90000;
    this.model = "Tesla";
  }
}

class AudiCar extends AbstractCar {
  constructor() {
    super();
    this.price = 100000;
    this.model = "Audi";
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
    this.hasParktronic = true;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let teslaCar = new TeslaCar();
teslaCar = new Autopilot(teslaCar);
teslaCar = new Parktronic(teslaCar);

console.log(teslaCar.getPrice(), teslaCar.getDescription());

let audiCar = new AudiCar();
audiCar = new Autopilot(audiCar);

console.log(audiCar.getPrice(), audiCar.getDescription());

// Second example

class Server {
  constructor(ip, port, protocol = "http") {
    this.ip = ip;
    this.port = port;
    this.protocol = protocol;
  }

  get url() {
    return `${this.protocol}://${this.ip}:${this.port}`;
  }
}

class AwsServer {
  constructor(server) {
    this.server = server;
    this.isAws = true;
  }
}

let server = new Server("11.22.33.44", 8080);
server = new AwsServer(server);

console.log(server);
