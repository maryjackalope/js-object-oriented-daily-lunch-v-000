// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
    constructor(name) {
      this.id = ++neighborhoodId;
        this.name = name;
        store.neighborhoods.push(this);
    }
}

class Customer {