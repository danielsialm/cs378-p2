let food_quantity = { 'mac': 0,
                        'pasta': 0,
                        'tacos': 0,
                        'enchiladas': 0
}
const food_price = {  'mac': 5,
                      'pasta': 8,
                      'tacos': 8,
                      'enchiladas': 10
}

function changeQuantity(item, amount) {
  let x = parseInt(document.getElementById(item).innerHTML);
  x += amount;
  // cant decrement below 0
  if (x < 0)
    return;
  document.getElementById(item).innerHTML = x;
  food_quantity[item] = x;
  updateSubtotal();
}

function updateSubtotal() {
  let subtotal = 0;
  for (let food in food_quantity)
    subtotal += food_quantity[food] * food_price[food];
  document.getElementById('subtotal').innerHTML = "Subtotal $" + subtotal;
}

function order() {
  let statement = "";
  for (let food in food_quantity) {
    if (food_quantity[food] > 0) {
      statement += food_quantity[food] + " " + food + " ";
    }
  }
  if (statement === "")
    alert("No items in cart!");
  else
    alert("Order placed!\n" + statement);
}

function clearAll() {
  for (let food in food_quantity) {
    document.getElementById(food).innerHTML = 0;
    food_quantity[food] = 0;
  }
  updateSubtotal();
}