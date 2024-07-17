import Dropdown from "./Dropdown";

const MonthlyFeeAddForm = ({
  handleAdd,
  handleInputs,
  handleCurrency,
  currency,
  inputs,
  GST,
}) => {
  const total = inputs?.cost * inputs?.quantity;

  console.log(total);

  return (
    <form onSubmit={handleAdd} className="flex gap-10 pb-2">
      <div
        className={`flex-1 min-w-[158px]   ${
          currency === "AUD" ? "max-w-[118px]" : " max-w-[270px]"
        } `}
      >
        <input
          required
          name="jobPosition"
          onChange={handleInputs}
          placeholder="Job Position"
          className=" text-xs mt-1 py-[3px] max-w-[118px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>

      <div className="text-xs font-semibold flex-2">
        <div className="text-xs font-semibold  flex max-w-[149px] -ml-16  items-center gap-2">
          <Dropdown handleCurrency={handleCurrency} currency={currency} />
          <input
          step=".01"
            required
            name="cost"
            onChange={handleInputs}
            type="number"
            placeholder="Cost"
            className="mt-1 py-[3px] max-w-[100px] border-b-[1px] border-black/50 bg-transparent"
          />
        </div>
      </div>
      <div className="text-xs font-semibold flex-2 min-w-[67px] max-w-[70px]">
        <input
          required
          name="quantity"
          onChange={handleInputs}
          type="number"
          placeholder="Quantity"
          className="mt-1 py-[3px] min-w-[60px] max-w-[60px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      {currency === "AUD" && (
        <div className="text-xs font-semibold flex-2 item py-2 min-w-[25px] max-w-[25px] justify-center">
          <p>{(total * GST).toFixed(2)}</p>
        </div>
      )}
      <div className="text-xs font-semibold flex-2 py-2 min-w-[58px] max-w-[58px] justify-center">
        <p>{(total).toFixed(2)}</p>
      </div>

      <button className="text-xs font-semibold p-[7px] bg-[#38bbff] min-w-[55px] flex justify-center items-center rounded-lg my-[2px] text-white">
        Add
      </button>
    </form>
  );
};
export default MonthlyFeeAddForm;
