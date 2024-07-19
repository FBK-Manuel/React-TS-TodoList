// import React from 'react'

import React, { useState } from "react";
// import { RiSecurePaymentLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { inputModalPropsType } from "./Type";

// import { useState } from "react";

function InputModal({ isOpen, closeModal, bgThemes }: inputModalPropsType) {
  //   const [error, setError] = useState<boolean>(true);
  const [getValue, setGetValue] = useState<string>("");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = event.target.value;
  //     setGetValue(value);
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submited", getValue);
    closeModal();
  };
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed bg-black bg-opacity-70 inset-0 flex items-center justify-center z-50">
        <div
          className="bg-[#252525] border border-gray-300 p-6 rounded shadow-lg w-full max-w-md mx-auto"
          style={{ backgroundColor: bgThemes.bgColor }}>
          <div className="flex justify-center flex-col items-center mb-4">
            <SlNotebook className="text-blue-500 " size={40} />
            <span
              className="text-xl text-white mt-2 font-sans font-bold"
              style={{ color: bgThemes.textColor }}>
              NEW NOTE
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              value={getValue}
              onChange={(e) => setGetValue(e.target.value)}
              className="w-full border border-gray-300 resize-none outline-none bg-[#252525] text-white rounded p-2 mb-4"
              placeholder="Your note here..."
              required
              style={{
                color: bgThemes.textColor,
                backgroundColor: bgThemes.containerColor,
              }}
            />
            <div className="flex justify-between pt-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-transparent border border-[#6C63FF] text-[#6C63FF]  rounded hover:bg-gray-300">
                CANCEL
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#6C63FF] text-white rounded hover:bg-gray-300 hover:text-[#6C63FF]">
                APPLY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
