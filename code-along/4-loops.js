function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

  // loops allow us to use the power of our computers to process
  // data faster than we can as humans

  let burger = ['buns', 'ground beef', 'cheese', 'onion', 'lettuce', 'tomato', 'ketchup']
  
  console.log(`remember to buy ${burger[0]}`)
  console.log(`remember to buy ${burger[1]}`)
  console.log(`remember to buy ${burger[2]}`)
  console.log(`remember to buy ${burger[3]}`)
  console.log(`remember to buy ${burger[4]}`)
  console.log(`remember to buy ${burger[5]}`)
  console.log(`remember to buy ${burger[6]}`)
  // only works if we already know the number of items
  // only works if there are not a lot of items
  
  // in game development or scientific computing, there may be reasons to generate random
  // data or physics/simulation data, and we'd use a loop to traverse that, but generally,
  // in business programming, the typical use-case for a loop is to iterate through an Array
  let burger = ['buns', 'ground beef', 'cheese', 'onion', 'lettuce', 'tomato', 'ketchup']

  // option 1
  let i = 0
  while (i < burger.length) {
    console.log(`remember to buy ${burger[i]}`)
    i = i + 1
  }

  // option 1, more conventionally written
  for (let i = 0; i < burger.length; i++) {
    console.log(`remember to buy ${burger[i]}`)
  }

  // option 2... maybe intro this later... or never
  for (ingredient of burger) {
    console.log(`remember to buy ${ingredient}`)
  }
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}