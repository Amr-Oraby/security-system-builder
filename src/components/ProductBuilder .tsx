import AccordionItem from "./AccordionItem";
import data from "../data/products.json";
import type { Data, Step } from "../types/types";
function ProductBuilder() {
  const { steps } = data as Data;

  return (
    <div>
      {steps.map((step: Step) => (
        <AccordionItem key={step.id} step={step} />
      ))}
    </div>
  );
}

export default ProductBuilder;
