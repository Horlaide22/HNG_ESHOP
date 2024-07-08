import React from "react";
import { Link } from "react-router-dom";

const Fallback = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-red-800">
        Error 404
      </h1>
      <p className="text-xl text-[#304065]">
        The page or resource you are requesting is not available.
      </p>
      <Link to="/" className="text-[#0F172A]">
        Go back to home
      </Link>
    </div>
  );
};

export default Fallback;
