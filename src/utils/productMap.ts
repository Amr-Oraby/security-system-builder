import data from "../data/products.json";

export const productMap = Object.fromEntries(
  data.steps.flatMap((step) =>
    step.products.map((product) => [
      product.id,
      {
        ...product,
        category: step.category,
      },
    ]),
  ),
);
