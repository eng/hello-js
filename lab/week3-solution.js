let numberOfProducts  // expects a Number 
let products          // expects an Array of product data
let promotion1        // expects an String describing the promotion
let promotion2        // expects an String describing the promotion
let promotion3        // expects an String describing the promotion

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript:
//   Math.floor(Math.random() * x)

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  console.log(database)
  numberOfProducts = database.products.length
  products = database.products
  let index1 = Math.floor(Math.random() * database.promotions.length)
  let index2 = Math.floor(Math.random() * database.promotions.length)
  let index3 = Math.floor(Math.random() * database.promotions.length)
  promotion1 = database.promotions[index1].description
  promotion2 = database.promotions[index2].description
  promotion3 = database.promotions[index3].description

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}