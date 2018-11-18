// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
    constructor(name) {
      this.id = ++NeighborhoodId;
        this.name = name;
        store.neighborhoods.push(this);
    }
}