function handleDOM() {
  if (products && products.length) {
    products.forEach(function (product) {
      document.querySelector('.products').insertAdjacentHTML('beforeend', `
        <div class="p-4 w-full md:w-1/2 lg:w-1/3">
          <div class="border h-full p-4 flex flex-col">
            <h2 class="text-lg font-bold mb-4">${product.name}</h2>
            <div class="mb-4"><img src="${product.image}">
            </div>
            <div class="mb-4 text-gray-900">${product.description}
            </div>
            <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
          </div>
        </div>
      `)
    })
  }

  if (numberOfProducts && numberOfProducts > 0) {
    document.querySelector('.product-count').innerHTML = `
      📦&nbsp;&nbsp;&nbsp;${numberOfProducts} products shown
    `
  }

  if (promotion1) {
    document.querySelector('.promotions').insertAdjacentHTML('beforeend', `
      <div class="md:w-1/3 my-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl">
        ${promotion1}
      </div>
    `)
  }

  if (promotion2) {
    document.querySelector('.promotions').insertAdjacentHTML('beforeend', `
      <div class="md:w-1/3 my-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl">
        ${promotion2}
      </div>
    `)
  }

  if (promotion3) {
    document.querySelector('.promotions').insertAdjacentHTML('beforeend', `
      <div class="md:w-1/3 my-4 p-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-xl">
        ${promotion3}
      </div>
    `)
  }
}