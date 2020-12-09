// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should call a function called renderProduct, which accepts an object representing
// a single product as input, and appends HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// define your renderProduct function here

window.addEventListener('DOMContentLoaded', function() {
  fetch('https://kiei451.com/api/products.json')
  .then(function(response) { return response.json() })
  .then(function(json) {
    // writes the returned JSON to the console
    console.log(json)
    
    // start here: write code to loop through the products; each iteration
    // of the loop should call your renderProduct function
    
  })
})

