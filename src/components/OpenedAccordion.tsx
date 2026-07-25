import type { IconType } from "react-icons";
import { BiChevronUp } from "react-icons/bi";
import type { Product } from "../types/types";
import ProductCard from "./ProductCard";
import { useBuilder } from "../context/BuilderContext";

function OpenedAccordion({
  id,
  Icon,
  title,
  products,
}: {
  id: number;
  Icon: IconType;
  title: string;
  products: Product[];
}) {
  const { setOpenStep, cameras, NextStep, openStep } = useBuilder();
  function getSelectedProductsCount() {
    return new Set(cameras.map((camera) => camera.id)).size;
  }

  const selected = getSelectedProductsCount();

  return (
    <div className="bg-[#EDF4FF] py-3 rounded-[10px] w-full ">
      <div onClick={() => setOpenStep(0)}>
        <h2 className=" mb-1 pl-3 text-xs sm:text-base">STEP {id} OF 4</h2>
        <div className=" flex items-center justify-between border-y border-gray-300 bg-inherit px-4 py-5">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-gray-500" />

            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-gray-900">
              {title}
            </h2>
          </div>

          <div className="flex gap-1 font-bold items-end">
            {id == 1 && <p className="text-indigo-600">{selected} selected</p>}
            <BiChevronUp className="h-5 w-5 text-indigo-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {products && id == 1 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] xl:grid-cols-[362px_362px] 2xl:grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-3 bg-inherit p-3  ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {openStep !== 4 && (
        <button
          onClick={NextStep}
          className="block border border-indigo-600 px-5 py-1 text-indigo-600 cursor-pointer rounded-[7px] font-bold mx-auto my-5"
        >
          Next Step
        </button>
      )}
    </div>
  );
}

export default OpenedAccordion;
