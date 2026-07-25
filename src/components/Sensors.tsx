import { SectionLabel } from "./SectionLabel";
import { ProductRow } from "./ProductRow";
import { useBuilder } from "../context/BuilderContext";
import data from "../data/products.json";
function Sensors() {
  const { sensors } = useBuilder();
  return (
    <>
      <div className="border-t border-[#CED6DE]" />
      <SectionLabel>SENSORS</SectionLabel>
      <div>
        {sensors.map((sensor) => {
          const product = data.steps
            .find((step) => step.category === "sensors")
            ?.products.find((p) => p.id === sensor.id);

          if (!product) return null;
          return (
            <ProductRow
              key={sensor.id}
              id={sensor.id}
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

export default Sensors;
