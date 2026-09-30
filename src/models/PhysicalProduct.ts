import Product from './Product.js';

interface DiscountableProduct {
  applyDiscount(): void;
}

class PhysicalProduct extends Product implements DiscountableProduct {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  getPriceWithTax(): number {
    return this.price * 1.1;
  }

  applyDiscount(): void {
    let discountedPrice = this.price * 0.8;
    console.log(`Your discounted price is ${discountedPrice}`)
  }

  get weightKg(): string {
    return `Product is ${this.weight}KG`
  }
}

export default PhysicalProduct;
