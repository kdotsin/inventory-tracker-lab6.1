import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";

const dumbbell = new PhysicalProduct('1', 'Dumbbell', 200, 25);
const movie = new DigitalProduct('2', 'Harry Potter', 10, 1000);

const products: (PhysicalProduct | DigitalProduct)[] = []
products.push(dumbbell, movie);

for (let i = 0; i < products.length; i++) {
  console.log(products[i]?.displayDetails());
  console.log(products[i]?.getPriceWithTax());
}

dumbbell.applyDiscount();
