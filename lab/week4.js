function pageLoad() {

  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  ridesController = {
    rides: rideData,
    currentRides: [],
    getRidesByService: function (service) {
      // the 'service' parameters contains the service that was clicked
      // i.e. ('Noober X', 'Noober XL', 'Noober Purple', or 'Noober Pool')
      // this function should return a new array containing only rides
      // for that level of service

      let filteredRideList = []
      for (let i = 0; i < this.rides.length; i++) {
        let ride = this.rides[i]
        let levelOfService
        if (ride.length > 1) {
          levelOfService = 'Noober Pool'
        } else if (ride[0].purpleRequested) {
          levelOfService = 'Noober Purple'
        } else if (ride[0].numberOfPassengers > 3) {
          levelOfService = 'Noober XL'
        } else {
          levelOfService = 'Noober X'
        }
        if (levelOfService == service) {
          filteredRideList.push(ride)
        }
      }
      return filteredRideList
    }
  }

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}