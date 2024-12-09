import React from "react";

const AuthButton = ({ text, onClick, isLoading }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className={`mt-4 w-full py-2 px-4 text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition ${
      isLoading && "opacity-50 cursor-not-allowed"
    }`}
  >
    {isLoading ? "Loading..." : text}
  </button>
);

export default AuthButton;
