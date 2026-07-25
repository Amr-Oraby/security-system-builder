import { SectionLabel } from "./SectionLabel";
import { ProductRow } from "./ProductRow";
import { useBuilder } from "../context/BuilderContext";
import data from "../data/products.json";
function Cameras() {
  const { cameras } = useBuilder();
  return (
    <>
      <div className="border-t border-[#CED6DE]" />
      <SectionLabel>CAMERAS</SectionLabel>
      <div>
        {cameras.map((camera) => {
          const product = data.steps
            .find((step) => step.category === "cameras")
            ?.products.find((p) => p.id === camera.id);

          if (!product) return null;

          return (
            <ProductRow
              key={`${camera.id}-${camera.variant}`}
              id={camera.id}
              variant={camera.variant}
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

export default Cameras;
