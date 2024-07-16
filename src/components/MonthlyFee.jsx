import { useState } from "react";
import MonthlyFeeAddForm from "./MonthlyFeeAddForm";

const MonthlyFee = ({ isEditing }) => {
  const [inputs, setInputs] = useState();
  const [array, setArray] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const GST = 0.1;
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: name === "total" ? +value : value,
    }));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputs) {
      return;
    }
    setArray((prev) => [
      ...prev,
      { ...inputs, id: Math.floor(Math.random() * 100) + 1, currency },
    ]);
  };
  const handleRemove = (id) => {
    const newArray = array.filter((data) => data.id != id);
    setArray(newArray);
  };

  const baseTopClass = isEditing ? "" : "-top-2";

  return (
    <div className="rounded-2xl h-auto overflow-hidden border-2 border-[#88d6ff]">
      <div className="px-5 py-1.5 pt-2 bg-[#38bbff]">
        <h1
          className={`font-semibold text-[1.15rem] text-white uppercase relative ${baseTopClass}`}
        >
          Monthly Service Fee
        </h1>
      </div>
      <div className="px-5 pt-6">
        <div
          className={`flex uppercase text-[.8.1rem] gap-20 relative ${baseTopClass}`}
        >
          <strong className={`flex-1 relative ${baseTopClass}`}>
            Job Position
          </strong>
          <strong className={`flex-2  relative ${baseTopClass}`}>
            Quantity
          </strong>
          {currency === "AUD" && (
            <strong className={`flex-2  relative ${baseTopClass}`}>GST</strong>
          )}
          <strong
            className={`flex-2 relative ${baseTopClass} whitespace-nowrap`}
          >
            Total Monthly Cost
          </strong>
        </div>
        {array.map((data, index) => (
          <div
            key={index}
            className={`mt-1 text-xs flex relative py-[3px] gap-20 border-b-[1px] border-[#88d6ff] ${baseTopClass} ${
              index === array.length - 1
                ? "border-b-[0px] border-opacity-0"
                : ""
            }`}
          >
            <p
              className={`relative font-medium flex-1 min-w-[163px]  ${
                currency === "AUD" ? "max-w-[160px]" : " max-w-[270px]"
              } ${baseTopClass}`}
            >
              {  console.log(currency)}
              {data.jobPosition}
            </p>
            <p
              className={`relative font-semibold flex-3 min-w-[68px] max-w-[68px] ${baseTopClass}`}
            >
              {data.quantity}
            </p>
            {currency === "AUD" && (
              <p
                className={`relative font-semibold flex-2 min-w-[27px] max-w-[27px] ${baseTopClass}`}
              >
                {new Intl.NumberFormat("en-NZ", {
                  minimumFractionDigits: 0,
                }).format(data?.total * GST)}
              </p>
            )}
            <div className="flex flex-2">
              <p
                className={`relative font-semibold text-nowrap w-[70px] ${baseTopClass}`}
              >
                {data.currency}{" "}
                {new Intl.NumberFormat("en-NZ", {
                  minimumFractionDigits: 0,
                }).format(
                  currency === "AUD"
                    ? data?.total + data?.total * GST
                    : data?.total
                )}
              </p>
              <button
                onClick={() => handleRemove(data.id)}
                className={`text-xs font-semibold  flex justify-end  p-[1px] w-20 rounded-lg my-[2px] text-red-500 ${
                  isEditing ? "" : "opacity-0"
                }`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {isEditing && (
          <MonthlyFeeAddForm
            inputs={inputs}
            GST={GST}
            handleAdd={handleAdd}
            handleInputs={handleInputs}
            currency={currency}
            handleCurrency={setCurrency}
          />
        )}
      </div>
    </div>
  );
};

export default MonthlyFee;
