import { useBuilder } from "../context/BuilderContext";

const BRAND_PURPLE = "#5433D6";
function Guarantee() {
  const { getTotals } = useBuilder();
  const { total, compareTotal } = getTotals();
  return (
    <div className="mt-1 2xl:w-[486px] flex items-center justify-between">
      <img
        src="../../public/images/badge.png"
        className="w-[71px] sm:w-[78px] 2xl:w-[131px] "
        alt=""
      />
      <div className="flex gap-2 flex-col items-end">
        <span
          className=" rounded-[3px] px-2 py-.5  text-[10px] font-semibold text-white"
          style={{ backgroundColor: BRAND_PURPLE }}
        >
          as low as $19.19/mo
        </span>
        <div className="flex gap-1 items-baseline">
          <span className="text-xs text-gray-400 line-through text-[18px]">
            ${compareTotal.toFixed(2)}
          </span>
          <span
            className="text-[24px] font-bold leading-none"
            style={{ color: BRAND_PURPLE }}
          >
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
