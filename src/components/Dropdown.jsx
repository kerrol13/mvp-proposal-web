import { useState } from "react";
import DropdownIcon from "../assets/DropdownIcon";

const Dropdown = ({ currency, handleCurrency }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleSelectedCurrency = (value) => {
    handleCurrency(value);
    setIsDropdownOpen(false);
  };
  return (
    <div>
      <button
        onClick={handleDropdown}
        type="button"
        className="border-[1px] px-2 border-zinc-400 py-1 flex justify-center gap-1 rounded-lg"
      >
        <p>{currency}</p> <DropdownIcon />
      </button>
      {isDropdownOpen && (
        <ul className="absolute bg-white p-2 border-[1px] rounded-lg z-10 mt-1">
          <li
            onClick={() => handleSelectedCurrency("USD")}
            className="p-1 hover:bg-slate-300 cursor-pointer rounded-md"
          >
            USD
          </li>
          <li
            onClick={() => handleSelectedCurrency("AUD")}
            className="p-1  hover:bg-slate-300 cursor-pointer rounded-md"
          >
            AUD
          </li>
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
