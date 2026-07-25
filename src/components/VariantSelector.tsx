import { useBuilder } from "../context/BuilderContext";

const variants = [
  { id: "white", name: "White", image: "/images/cam-v4.png" },
  { id: "grey", name: "Grey", image: "/images/cam-v4.png" },
  { id: "black", name: "Black", image: "/images/cam-v4.png" },
];

export default function VariantSelector({ id }: { id: string }) {
  const { selectCameraVariant, selectedCameraVariants } = useBuilder();
  // console.log(selectedCameraVariants);
  return (
    <div className="flex gap-2">
      {variants.map((variant) => {
        const active =
          selectedCameraVariants.find(
            (selectedProduct) => selectedProduct.id === id,
          )?.variant == variant.id;
        return (
          <button
            key={variant.id}
            onClick={() => {
              selectCameraVariant(id, variant.id);
            }}
            className={`mt-1 cursor-pointer flex items-center gap-0.5 rounded-xs border px-1.25 py-px   transition-all duration-200 ${
              active
                ? "border-emerald-400 bg-emerald-50"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          >
            <img src={variant.image} className="w-7" alt="" />
            <span className="text-[10px]">{variant.name}</span>
          </button>
        );
      })}
    </div>
  );
}
