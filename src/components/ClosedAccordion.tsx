import type { IconType } from "react-icons";
import { BiChevronDown } from "react-icons/bi";
import { useBuilder } from "../context/BuilderContext";

function ClosedAccordion({
  id,
  Icon,
  title,
}: {
  id: number;
  Icon: IconType;
  title: string;
}) {
  const { setOpenStep } = useBuilder();
  return (
    <div onClick={() => setOpenStep(id)}>
      <h2 className=" mb-1 pl-3 text-xs sm:text-base">STEP {id} OF 4</h2>
      <div className="flex items-center justify-between border-y border-gray-300 bg-white px-4 py-5">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-gray-500" />

          <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-gray-900">
            {title}
          </h2>
        </div>

        <BiChevronDown className="h-5 w-5 text-indigo-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default ClosedAccordion;
