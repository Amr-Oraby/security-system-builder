import { SectionLabel } from "./SectionLabel";
import { ProductRow } from "./ProductRow";
import { useBuilder } from "../context/BuilderContext";
import data from "../data/products.json";
function Accessories() {
  const { accessories } = useBuilder();
  return (
    <>
      <div className="border-t border-[#CED6DE]" />
      <SectionLabel>ACCESSORIES</SectionLabel>
      <div>
        {accessories.map((accessory) => {
          const product = data.steps
            .find((step) => step.category === "accessories")
            ?.products.find((p) => p.id === accessory.id);

          if (!product) return null;
          return (
            <ProductRow
              key={accessory.id}
              id={accessory.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.comparePrice}
            />
          );
        })}
      </div>
    </>
  );
}

export default Accessories;
