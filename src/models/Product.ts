class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails():string {
    return `The sku is ${this.sku}, name is ${this.name}, and price is ${this.price}`;
  }
  getPriceWithTax(): number {
    return this.price * 1.08;
  }
}

export default Product;