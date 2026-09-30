import Product from "../models/Product.js";

function calculateTax(prod: Product) {
  return prod.getPriceWithTax();
}