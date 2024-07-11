import Dropdown from "./Dropdown";

const MonthlyFeeAddForm = ({
  handleAdd,
  handleInputs,
  handleCurrency,
  currency,
}) => {
  return (
    <form onSubmit={handleAdd} className="flex pb-2">
      <div className=" w-[60%]">
        <input
          required
          name="jobPosition"
          onChange={handleInputs}
          placeholder="Job Position"
          className=" text-xs mt-1 py-[3px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      <div className="text-xs font-semibold w-[125px] ">
        <input
          required
          name="quantity"
          onChange={handleInputs}
          type="number"
          placeholder="Quantity"
          className="mt-1 py-[3px] ml-20 w-[35px] border-b-[1px] border-black/50 bg-transparent mr-12"
        />
      </div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <Dropdown handleCurrency={handleCurrency} currency={currency} />
        <input
          required
          name="total"
          onChange={handleInputs}
          type="number"
          placeholder="Total"
          className="mt-1 py-[3px] w-[110px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      <button className="text-xs font-semibold p-[7px] bg-[#38bbff]  flex justify-center items-center rounded-lg my-[2px] text-white">
        Add
      </button>
    </form>
  );
};
export default MonthlyFeeAddForm;
