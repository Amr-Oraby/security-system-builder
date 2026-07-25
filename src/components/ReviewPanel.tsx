import Cameras from "./Cameras";
import Sensors from "./Sensors";
import Accessories from "./Accessories";
import Plan from "./Plan";
import Shipping from "./Shipping";
import Guarantee from "./Guarantee";
import { useBuilder } from "../context/BuilderContext";

const BRAND_PURPLE = "#5433D6";

export default function ReviewPanel() {
  const { getTotals, cameras, selectedCameraVariants } = useBuilder();
  const { savings } = getTotals();
  function saveSystem() {
    localStorage.setItem("cameras", JSON.stringify(cameras));

    localStorage.setItem(
      "selectedCameraVariants",
      JSON.stringify(selectedCameraVariants),
    );
  }
  return (
    <div className="sm:p-14 xl:p-4 2xl:p-14 flex flex-col sm:flex-row md:flex-col xl:flex-col 2xl:flex-row sm:gap-14 xl:gap-0 justify-between w-full  rounded-[10px] p-5 bg-[#EDF1FF]">
      <div className="2xl:w-[551px]">
        <header>
          <div className="text-[10px] font-semibold tracking-widest text-gray-400">
            REVIEW
          </div>
          <h1 className="mt-5 text-[21px] font-bold leading-tight text-gray-900">
            Your security system
          </h1>
          <p className="mt-1.5 text-[12.5px] leading-snug text-gray-500">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
        </header>

        <div className="mt-4 rounded-2xl  ">
          <Cameras />
          <Sensors />
          <Accessories />
          <Plan />
          <Shipping />
        </div>
      </div>

      <div>
        <Guarantee />

        <p className="mt-2 text-center text-[13px] font-medium text-emerald-500">
          Congrats! You're saving ${Math.round(savings)} on your security
          bundle!
        </p>

        <button
          className="mt-1 w-full rounded-sm py-3 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: BRAND_PURPLE }}
        >
          Checkout
        </button>

        <button
          onClick={saveSystem}
          className="cursor-pointer mt-1 w-full text-center text-[13px] font-medium text-gray-500 underline underline-offset-2 hover:text-gray-700"
        >
          Save my system for later
        </button>
      </div>
    </div>
  );
}
