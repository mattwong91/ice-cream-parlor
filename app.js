// SECTION GLOBAL VARIABLES

const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]

// !SECTION


// SECTION FUNCTIONS

function orderIceCream(flavorName) {
  console.log(`ordering ${flavorName}`);
  const foundIceCream = iceCream.find(flavor => flavor.name == flavorName)
  //@ts-ignore
  foundIceCream.quantity++
  console.log(foundIceCream);
  calculateCost()
}

function orderTopping(toppingName) {
  console.log(`ordering ${toppingName}`);
  const foundTopping = toppings.find(topping => topping.name == toppingName)
  //@ts-ignore
  foundTopping.quantity++
  console.log(foundTopping);
  calculateCost()
}

function calculateCost() {
  let totalCost = 0
  iceCream.forEach(flavor => {
    const flavorCost = flavor.price * flavor.quantity
    totalCost += flavorCost
  })

  toppings.forEach(topping => {
    const toppingCost = topping.price * topping.quantity
    totalCost += toppingCost
  })

  console.log('The total cost is:', totalCost);

  drawTotal(totalCost)
  drawCart()
}

function drawTotal(total) {
  const totalElement = document.getElementById('total')
  //@ts-ignore
  totalElement.innerText = total.toFixed(2)
}

function drawCart() {
  let content = ''
  iceCream.forEach(flavor => {
    if (flavor.quantity > 0)
      content += `<p>${flavor.name} | Qty: ${flavor.quantity}</p>`
  })

  toppings.forEach(topping => {
    if (topping.quantity > 0)
      content += `<p>${topping.name} | Qty: ${topping.quantity}</p>`
  })
  const cartElement = document.getElementById('cart')
  //@ts-ignore
  cartElement.innerHTML = content
}


// !SECTION

