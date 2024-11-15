import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Successfull() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="xl:h-[91vh] xsm:h-[88vh] flex flex-col justify-center items-center bg-gray-200 xl:p-6 xl:w-full xsm:w-[270px] xsm:p-3 xsm:pl-[25px]">
      <div className="bg-white p-8 rounded-lg shadow-xl xl:w-96 xsm:w-[230px]">
        <h1 className="xl:text-3xl xsm:text-lg font-semibold text-green-500 mb-4 text-center">
          Admin Created Successfully!
        </h1>
        <p className="text-black text-center xl:text-xl xsm:text-sm mb-6">
        Check your admin in your admins
        </p>
        <button
          onClick={() => navigate("/admindata")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold xl:py-2 xl:px-4 xsm:py-2 xl:text-lg xsm:text-xs rounded-md transition duration-200 text-center"
        >
          Go to Your Admins
        </button>
      </div>
    </div>
    </>
  );
}

export default Successfull;
