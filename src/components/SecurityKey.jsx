import {  useLayoutEffect, useRef, useState } from "react";

const SecurityKey = ({ setIsAccess }) => {
  const inputRef = useRef();
  const [key, setKey] = useState();

  const accessKey = localStorage.getItem("accessKey");
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === ACCESS_KEY) {
      localStorage.setItem("accessKey", ACCESS_KEY);
      setIsAccess(true);
    } else {
      setKey("Invalid");
    }
  };

  useLayoutEffect(() => {
    if (accessKey && accessKey === ACCESS_KEY) {
      setIsAccess(true);
    }
  }, [accessKey]);

  return (
    <div className="h-screen flex justify-center  items-center ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="ml-1 font-medium">Access Key</label>
        {key === "Invalid" && (
          <p className="ml-1 font-medium text-red-500">Invalid Access Key</p>
        )}
        <div>
          <input
            required
            ref={inputRef}
            className="px-4 py-2 rounded-xl w-[250px] border-2 mr-3"
            placeholder="Access Key"
          />
          <button className=" bg-sky-400 p-2 rounded-xl text-white font-medium font-poppins">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default SecurityKey;
