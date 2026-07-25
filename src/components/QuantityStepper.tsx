import { FiMinus, FiPlus } from "react-icons/fi";
import { useBuilder } from "../context/BuilderContext";
import { productMap } from "../utils/productMap";

export default function QuantityStepper({ productId }: { productId: string }) {
  const {
    increaseCameraQuantity,
    decreaseCameraQuantity,
    getCameraQuantity,
    getSelectedCameraVariant,
    sensors,
    accessories,
    cameras,
  } = useBuilder();

  const selectedVariant = getSelectedCameraVariant(productId);
  const product = productMap[productId];
  // console.log(product);
  let quantity = 0;

  if (product.category === "cameras") {
    console.log(cameras);
    quantity = getCameraQuantity(productId);
  } else if (product.category === "sensors") {
    quantity = sensors.find((s) => s.id === productId)?.quantity ?? 0;
  } else if (product.category === "accessories") {
    quantity = accessories.find((a) => a.id === productId)?.quantity ?? 0;
  } else if (product.category === "plan") {
    quantity = 1;
  }

  const isCamera = product.category === "cameras";
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => decreaseCameraQuantity(productId)}
        disabled={!isCamera || quantity === 0}
        className="cursor-pointer flex h-5 w-5 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiMinus size={13} />
      </button>

      <span className=" text-center text-base font-medium">{quantity}</span>

      <button
        disabled={!isCamera || !selectedVariant}
        onClick={() => increaseCameraQuantity(productId)}
        className="cursor-pointer flex h-5 w-5 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-gray-700 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiPlus size={13} />
      </button>
    </div>
  );
}
