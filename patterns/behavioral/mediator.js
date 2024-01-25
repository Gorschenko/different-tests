class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name ${name}. Order auto is ${auto}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomersList() {
    return this.customers;
  }
}

const mediator = new OfficialDealer();

const dima = new Customer("Dima", mediator);
const valera = new Customer("Valera", mediator);

dima.makeOrder("Tesla", "With autopilot");

valera.makeOrder("Audi", "With parktronic");

console.log(mediator.getCustomersList());
