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
    if (flavor.quantity > 0) {
      content += `
      <div class="col-4 my-3">${flavor.name}</div>
      <div class="col-2 my-3">${flavor.quantity}</div>
      <div class="col-3 my-3">$${flavor.price}</div>
      <div class="col-3 my-3">$${flavor.quantity * flavor.price}</div>
      `
    }
  })

  toppings.forEach(topping => {
    if (topping.quantity > 0)
      content += `
    <div class="col-4 my-3">${topping.name}</div>
    <div class="col-2 my-3">${topping.quantity}</div>
    <div class="col-3 my-3">$${topping.price}</div>
    <div class="col-3 my-3">$${topping.quantity * topping.price}</div>
    `
  })
  if (!content) {
    content = '<span class="my-3">No items are in the cart.</span>'
  }
  // content += `<p>${topping.name} | Qty: ${topping.quantity}</p>`
  const cartElement = document.getElementById('cart')
  //@ts-ignore
  cartElement.innerHTML = content
}

function checkout() {
  const confirmCheckout = window.confirm('Are you sure you want to checkout?')
  if (!confirmCheckout)
    return
  iceCream.forEach(flavor => flavor.quantity = 0)
  toppings.forEach(topping => topping.quantity = 0)
  drawCart()
}

function checkoutSA() {
  Swal.fire({
    title: 'Are you sure you want to checkout?',
    text: "Double check your cart!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, order my ice cream!'
  }).then((result) => {
    if (!result.isConfirmed) {
      return
    }
    Swal.fire(
      'Ordered Successfully!',
      'It should be ready in about 5 minutes',
      'success'
    )
    iceCream.forEach(flavor => flavor.quantity = 0)
    toppings.forEach(topping => topping.quantity = 0)
    calculateCost()
  })
}
// !SECTION

