import { Router } from "../deps.ts";
import { slugify } from "../helpers/slugify.js";
const Products = Router();

Products.get("/products", (req, res) => {
  const productName = "apple is so good in 2020 ?";
  res.json({
    products: "Apple",
    slug: slugify(productName),
  });
});

export default Products;
