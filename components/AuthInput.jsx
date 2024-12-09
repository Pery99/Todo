import React from "react";

const AuthInput = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm sm:text-base"
    />
  </div>
);

export default AuthInput;
