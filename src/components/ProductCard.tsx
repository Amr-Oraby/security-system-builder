import { useBuilder } from "../context/BuilderContext";
import type { Product } from "../types/types";
import QuantityStepper from "./QuantityStepper";
import VariantSelector from "./VariantSelector";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    name,
    description,
    image,
    price,
    comparePrice,
    badge,
    learnMore,
    // variants,
  } = product;

  const { cameras, getCameraQuantity } = useBuilder();

  function isCameraActive(productId: string) {
    return cameras.some((camera: any) => camera.id === productId);
  }
  const isActive = isCameraActive(product.id);
  const quantity = getCameraQuantity(id);

  const effectiveQuantity = quantity === 0 ? 1 : quantity;

  const totalPrice = price * effectiveQuantity;
  const totalComparePrice = comparePrice
    ? comparePrice * effectiveQuantity
    : null;

  return (
    <article
      className={`rounded-[10px] border-2 ${isActive ? "border-indigo-500" : "border-none"}  bg-white p-2.5 h-full`}
    >
      <div
        className={` flex flex-col xl:flex-row 2xl:flex-col relative  gap-4 `}
      >
        {badge && (
          <span className="w-fit xl:absolute 2xl:relative inline-block rounded-[10px] bg-indigo-600 px-1.5 py-0.5 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
        {/* Image */}
        <div className="space-y-1.5 w-25.5 mx-auto xl:mt-6 2xl:mt-0">
          <img src={image} alt={name} className="mx-auto h-24 object-contain" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col xl:mt-6 2xl:mt-0">
          <h3 className="text-base font-semibold">{name}</h3>

          <p className="mt-1 text-[12px] text-gray-500">
            {description}
            <a
              href={learnMore}
              className="block text-[12px] font-medium text-blue-600 underline"
            >
              Learn More
            </a>
          </p>

          <VariantSelector id={id} />

          <div className="flex justify-between mt-2">
            <QuantityStepper productId={id} />

            <div className="flex flex-col -space-y-1">
              {totalComparePrice && (
                <p className="text-red-500 line-through">
                  ${totalComparePrice.toFixed(2)}
                </p>
              )}

              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
