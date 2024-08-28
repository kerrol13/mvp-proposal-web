import { useState } from "react";
import CostBreakdownAddForm from "./CostBreakdownAddForm";

const CostBreakdown = ({ isEditing }) => {
  const [inputs, setInputs] = useState();
  const [currency, setCurrency] = useState("USD");
  const [array, setArray] = useState([]);

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: name === "amount" ? +value : value,
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

  const totalAmount = array.reduce(
    (value, current) => value + current.amount,
    0
  );
  const AUGST = totalAmount * 0.1;
  const NZGST = totalAmount * 0.15;
  const baseTopClass = isEditing ? "" : "-top-2";

  const handleRemove = (id) => {
    const newArray = array.filter((data) => data.id != id);
    setArray(newArray);
  };

  return (
    <div
      className={`rounded-2xl h-auto overflow-hidden border-2 border-[#88d6ff] mb-9 ${baseTopClass}`}
    >
      <div className="px-5 py-1.5 pt-2 bg-[#38bbff]">
        <h1
          className={`font-semibold text-[1.15rem] text-white uppercase relative ${baseTopClass}`}
        >
          Cost Breakdown
        </h1>
      </div>
      <div className={`px-5 pt-5 ${baseTopClass}`}>
        <div
          className={`flex uppercase text-[.8.1rem] relative ${baseTopClass}`}
        >
          <strong className="w-[493px]">Fee</strong>
          <strong>Amount</strong>
        </div>
        {array.map((data) => (
          <div
            key={data.id}
            className={`mt-1 text-xs flex py-[3px] border-b-[1px] border-[#88d6ff]`}
          >
            <p className={`w-[2250px] font-medium relative ${baseTopClass}`}>
              {data.fee}
            </p>
            <p
              className={`relative font-semibold w-[70%] text-nowrap ${baseTopClass}`}
            >
              {data.currency}{" "}
              {new Intl.NumberFormat("en-NZ", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(data.amount)}
            </p>
            <button
              onClick={() => handleRemove(data.id)}
              className={`text-xs font-semibold   p-[1px] w-20 rounded-lg my-[2px] text-red-500 ${
                isEditing ? "" : "opacity-0"
              }`}
            >
              Remove
            </button>
          </div>
        ))}
        {isEditing && (
          <CostBreakdownAddForm
            handleAdd={handleAdd}
            handleInputs={handleInputs}
            currency={currency}
            handleCurrency={setCurrency}
          />
        )}
        {currency === "AUD" && (
          <div
            className={`mt-1 text-xs flex font-medium py-[3px] relative ${baseTopClass}`}
          >
            <p className="w-[498px]">Goods and Services Tax</p>
            <p className="font-semibold">
              {currency}{" "}
              {new Intl.NumberFormat("en-NZ", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(AUGST)}
            </p>
          </div>
        )}

        <div
          className={`mt-1 text-xs flex py-[6px]  font-bold text-[#38bbff] relative ${baseTopClass}`}
        >
          <p className="w-[498px] uppercase pb-2  ">Total One-Off Cost</p>
          <p>
            {currency}{" "}
            {new Intl.NumberFormat("en-NZ", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(currency === "AUD" ? totalAmount + AUGST : totalAmount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;
