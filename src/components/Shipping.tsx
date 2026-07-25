function Shipping() {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="bg-white p-1 round-sm">
          <img src="/public/images/car.png" width={29} alt="" />
        </div>
        <span className="text-[13px] font-semibold text-gray-900">
          Fast Shipping
        </span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[11px] text-gray-400 line-through">$5.99</span>
        <span className="text-[15px] font-bold text-emerald-500">FREE</span>
      </div>
    </div>
  );
}

export default Shipping;
