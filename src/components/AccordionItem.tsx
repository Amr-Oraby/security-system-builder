import type { Step } from "../types/types";
import { FiCamera, FiShield, FiRadio, FiLock } from "react-icons/fi";
import { useBuilder } from "../context/BuilderContext";
import ClosedAccordion from "./ClosedAccordion";
import OpenedAccordion from "./OpenedAccordion";
function AccordionItem({ step }: { step: Step }) {
  const { id, title, category, products } = step;

  const stepIcons = {
    cameras: FiCamera,
    plan: FiShield,
    sensors: FiRadio,
    accessories: FiLock,
  };

  const Icon = stepIcons[category];
  const { openStep } = useBuilder();

  return (
    <div className="mb-1">
      {openStep != id ? (
        <ClosedAccordion id={id} Icon={Icon} title={title} />
      ) : (
        <OpenedAccordion
          id={id}
          Icon={Icon}
          title={title}
          products={products}
        />
      )}
    </div>
  );
}

export default AccordionItem;
