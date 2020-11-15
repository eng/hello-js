function handleServiceChange() {
  window.ridesController.changeService = function(service) {
    this.currentService = service
    document.querySelector('.level-of-service').innerHTML = service

    this.currentRides = this.getRidesByService(service)

    if (this.currentRides === undefined) {
      throw('ridesController.getRidesByService() does not return a list of rides')
    }

    const passengersDiv = document.querySelector('.passengers')
    passengersDiv.innerHTML = ''
    this.currentRides.forEach(ride => {
      ride.forEach(passenger => {
        passengersDiv.insertAdjacentHTML('beforeend', `
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="clearfix">
                  <div class="float-left">
                    <h2 class="text-2xl py-1">${passenger.passengerDetails.first} ${passenger.passengerDetails.last}</h2>
                    <p class="font-bold text-gray-600">${passenger.passengerDetails.phoneNumber}</p>
                  </div>
                  <div class="float-right mt-2">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                      ${passenger.numberOfPassengers} ${passenger.numberOfPassengers > 1 ? 'passengers' : 'passenger'}
                    </span>
                  </div>
                </div>
                <div class="mt-4 grid grid-cols-2">
                  <div>
                    <div class="my-4 text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${passenger.pickupLocation.address}</p>
                    <p>${passenger.pickupLocation.city}, ${passenger.pickupLocation.state} ${passenger.pickupLocation.zip}</p>
                  </div>
                  <div>
                    <div class="my-4 text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${passenger.dropoffLocation.address}</p>
                    <p>${passenger.dropoffLocation.city}, ${passenger.dropoffLocation.state} ${passenger.dropoffLocation.zip}</p>
                  </div>
                </div>
              </div>
            `)
      })
    })
  }
  document.querySelectorAll('.service-select').forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      ridesController.changeService(event.target.innerHTML)
      console.log(ridesController.currentRides)
    })
  })
}
