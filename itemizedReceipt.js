// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
function logReceipt(...menuItems) {
  let total = 0;

  menuItems.forEach((item) => {
    console.log(`${item.descr} - $${item.price}`);
    total += item.price;
  });

  console.log(`Total - $${total.toFixed(2)}`); // use .toFixed(2) to get 2 decimal places
}

// Check
logReceipt(
  { descr: "Burrito", price: 5.99 },
  { descr: "Chips & Salsa", price: 2.99 },
  { descr: "Sprite", price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97

// Check with my favorite food
console.log("\nLet check my favorite food");
logReceipt(
  { descr: "Pho Noodle Soup", price: 12.99 },
  { descr: "Roasted Duck", price: 32.99 },
  { descr: "Vietnamese Bread ", price: 3.99 }
);