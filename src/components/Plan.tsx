import { SectionLabel } from "./SectionLabel";

const BRAND_PURPLE = "#5433D6";
function Plan() {
  return (
    <>
      <div className="border-t border-[#CED6DE]" />
      <SectionLabel>PLAN</SectionLabel>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-1">
          {/* <PiWifiHighBold size={16} style={{ color: BRAND_PURPLE }} /> */}
          <img src="/public/images/armor.png" alt="" width={20} />
          <span className="flex gap-1 font-semibold text-gray-900 ">
            Cam <span style={{ color: BRAND_PURPLE }}>Unlimited</span>
          </span>
        </div>
        <div className="flex flex-col items-end -mb-1">
          <span className="text-[11px] text-gray-400 line-through">
            $12.99/mo
          </span>
          <span
            className="text-[15px] font-bold"
            style={{ color: BRAND_PURPLE }}
          >
            $9.99/mo
          </span>
        </div>
      </div>
      <div className="border-t border-[#CED6DE]" />
    </>
  );
}

export default Plan;
