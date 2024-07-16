import Dropdown from "./Dropdown";

const MonthlyFeeAddForm = ({
  handleAdd,
  handleInputs,
  handleCurrency,
  currency,
  inputs,
  GST,
}) => {
  return (
    <form onSubmit={handleAdd} className="flex gap-20 pb-2">
      <div
        className={`flex-1 min-w-[163px]   ${
          currency === "AUD" ? "max-w-[163px]" : " max-w-[270px]"
        } `}
      >
        <input
          required
          name="jobPosition"
          onChange={handleInputs}
          placeholder="Job Position"
          className=" text-xs mt-1 py-[3px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>

      <div className="text-xs font-semibold flex-2">
        <input
          required
          name="quantity"
          onChange={handleInputs}
          type="number"
          placeholder="Quantity"
          className="mt-1 py-[3px] min-w-[70px] max-w-[70px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      {currency === "AUD" && (
        <div className="text-xs font-semibold flex-2 min-w-[25px] max-w-[25px] justify-center">
          <p>{(inputs?.total * GST).toFixed(1)}</p>
        </div>
      )}

      <div className="text-xs font-semibold  flex max-w-[60px] -ml-7  items-center gap-2">
        <Dropdown handleCurrency={handleCurrency} currency={currency} />
        <input
          required
          name="total"
          onChange={handleInputs}
          type="number"
          placeholder="Total"
          className="mt-1 py-[3px] max-w-[60px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      <button className="text-xs font-semibold p-[7px] bg-[#38bbff]  flex justify-center items-center rounded-lg my-[2px] text-white">
        Add
      </button>
    </form>
  );
};
export default MonthlyFeeAddForm;
