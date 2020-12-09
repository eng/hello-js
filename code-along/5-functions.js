function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // functions are used to create methods of objects
  // here's the object we created before
  let profile = {
    name: 'Brian',
    location: { city: 'Chicago', state: 'Illinois' },
    timeline: [
      { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
      { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
      { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
    ],
    currentStatus: function() {
      return this.timeline[0].what
    },
    addStatus: function(status) {
      return this.timeline.unshift(status)
    }
  }

  console.log(profile.timeline.length)
  
  profile.addStatus({ icon: '🍳', when: '2020-10-27 08:00:00', what: 'Enjoying breakfast' })
  
  console.log(profile.timeline.length)

  output = profile.currentStatus()
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}