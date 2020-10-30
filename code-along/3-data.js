function pageLoad() {
  // so far we have talked about the basic building blocks in JavaScript
  // the primitive types – String, Number, Boolean
  // but just using these types doesn't allow our application to be that sophisticated
  // a typical application usually involves some sort of data
  // so we have to learn about a couple of more advanced types that allow us to hold and manipulate data

  // starting with the Object – the base type of thing in JavaScript – everything else is a type of Object
  // all the types of things we've talked about so far – String, Number, etc. are types of Objects
  // objects have attributes (properties) and they have behaviors (methods)

  let myString = 'brian'
  
  // attributes (properties)
  // we access the properties of an object by using the dot notation and the name of the property
  myString.length
  
  // behaviors (methods)
  // we access the methods of an object by using the dot notation with parentheses
  myString.toUpperCase()

  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

  // you can also create your own objects
  // we'll focus on creating our own object with properties; we'll look at methods later

  // initialize first object... yes, {} has two meanings in JS
  // let profile = {
  //   name: 'Brian',
  //   location: 'Chicago',
  //   status: 'Teaching MBA students how to code in JavaScript!'
  // }

  // name, location, status... these are properties we are giving to this object

  // console.log(profile.name)
  // console.log(profile.location)

  // an Array is a special kind of Object whose job it is to hold a list of stuff
  // initialize first array
  let burger = ['buns', 'ground beef', 'american cheese']
  // getting value - zero-based
  output = burger[1]
  output = burger[3] // undefined
  // changing shit
  
  // can test for this
  if (burger[5] == undefined) {
    console.log('there are only 3 ingredients')
  }

  // array properties
  output = burger.length

  // array methods
  output = burger.sort()
  burger.push('ketchup')

  output = burger

  // output = profile.status

  // let profile = {
  //   name: 'Brian',
  //   location: 'Chicago',
  //   timeline: [
  //     'Teaching MBA students how to code in JavaScript!',
  //     'Eating tacos',
  //     'Riding a unicorn'
  //   ]
  // }

  // console.log(profile.timeline[0])
  // console.log(profile.timeline[1])
  // console.log(profile.timeline[2])

  let profile = {
    name: 'Brian',
    location: { city: 'Chicago', state: 'Illinois' },
    timeline: [
      { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
      { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
      { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
    ]
  }

  let output = profile.timeline[1].icon

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}