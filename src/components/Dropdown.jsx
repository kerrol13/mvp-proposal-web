import { useState } from "react";
import DropdownIcon from "../assets/DropdownIcon";

const CURRENCIES = ["USD", "AUD", "NZD"];

const Dropdown = ({ currency, handleCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCurrency = (value) => {
    handleCurrency(value);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        type="button"
        className="border-[1px] px-2 border-zinc-400 py-1 flex justify-center gap-1 rounded-lg"
      >
        <p>{currency}</p> <DropdownIcon />
      </button>
      {isOpen && (
        <ul className="absolute bg-white p-2 border-[1px] rounded-lg z-10 mt-1">
          {CURRENCIES.map((c) => (
            <li
              key={c}
              onClick={() => selectCurrency(c)}
              className="p-1 hover:bg-slate-300 cursor-pointer rounded-md"
            >
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
