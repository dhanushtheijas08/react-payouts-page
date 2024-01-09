import formatCurrency from "../utils/formatCurrency";

export default function Card() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between gap-6">
      <div className="px-4 w-full py-2 space-y-4 bg-white rounded-[4px] shadow ">
        <p className="text-sm text-gray-600">Online Orders</p>
        <p className="text-2xl sm:text-3xl font-semibold">231</p>
      </div>
      <div className="w-full px-4 py-2 space-y-4 bg-white rounded-[4px] shadow">
        <p className="text-sm text-gray-600">Amount Received</p>
        <p className="text-2xl sm:text-3xl font-semibold">
          {formatCurrency(1234567)}
        </p>
      </div>
    </div>
  );
}
