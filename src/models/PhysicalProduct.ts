import Product from './Product.js';

class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price)
    this.weight = weight;
  }

  getPriceWithTax(): number {
    return this.price * 1.1;
  }

  get weightKg(): string {
    return `Product is ${this.weight}KG`
  }
}

export default PhysicalProduct;
