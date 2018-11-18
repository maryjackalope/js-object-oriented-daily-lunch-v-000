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
  
  deliveries() {
       return store.deliveries.filter(
           function(delivery) {
               return delivery.customerId === this.id;
           }.bind(this)
       );
     }
      customers() {
       return this.deliveries().map(trip => {
                 return trip.customer();
         })
       }
 }
 let customerId = 0;
 class Customer {
    constructor(name) {
        this.id = ++customerId;
        this.name = name;
        store.customers.push(this);
      }
       trips() {
       return store.trips.filter(
           function(trip) {
               return trip.passengerId === this.id;
           }.bind(this)
       );
   }
   drivers() {
    return this.trips().map(trip => {
              return trip.driver();
      })
    }
}
 let tripId = 0;
  class Trip {
    constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
  }
   driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
   passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
 }
}