import React from "react";

const AuthCard = ({ children, title }) => (
  <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-lg p-6 sm:p-8">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      {title}
    </h2>
    <div className="space-y-4">{children}</div> {/* Added spacing */}
  </div>
);

export default AuthCard;
