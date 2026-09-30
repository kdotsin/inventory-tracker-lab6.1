class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails() {
    return `The sku is ${this.sku}, name is ${this.name}, and price is ${this.price}`;
  }
  getPriceWithTax() {
    //calculate tax logic
  }
}

export default Product;