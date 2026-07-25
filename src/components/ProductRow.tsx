import QuantityStepper from "./QuantityStepper";
import { productMap } from "../utils/productMap";
import { useBuilder } from "../context/BuilderContext";

type ProductRowProps = {
  id: string;
  image: string;
  name: string;
  variant?: string;
  originalPrice?: number | null;
  price: number;
};

export function ProductRow({
  id,
  image,
  name,
  originalPrice,
  price,
  variant,
}: ProductRowProps) {
  const { getCameraQuantity } = useBuilder();

  const product = productMap[id];
  const isCamera = product.category === "cameras";

  const quantity = getCameraQuantity(id);
  const effectiveQuantity = quantity === 0 ? 1 : quantity;

  const displayPrice = isCamera ? price * effectiveQuantity : price;

  const displayOriginalPrice =
    isCamera && originalPrice
      ? originalPrice * effectiveQuantity
      : originalPrice;

  return (
    <div className="flex items-center justify-between py-3">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-100 bg-white">
          <img src={image} width={41} />
        </div>

        <span className="w-32 text-[14px] leading-4 font-medium text-gray-900">
          {name}
          {variant ? "-" + variant : ""}
        </span>

        <QuantityStepper productId={id} />
      </div>

      {/* Right */}
      <div className="flex flex-col items-end leading-none">
        {displayOriginalPrice && (
          <span className="text-[14px] text-gray-400 line-through">
            ${displayOriginalPrice.toFixed(2)}
          </span>
        )}

        <span className="text-[14px] font-bold text-indigo-600">
          {displayPrice === 0 ? "FREE" : `$${displayPrice.toFixed(2)}`}
        </span>
      </div>
    </div>
  );
}
