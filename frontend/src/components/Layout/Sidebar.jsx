import React from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { FaSuitcase } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-45 h-screen bg-[#e6a911] flex flex-col">
      
      {/* Header */}
      <div className="py-5 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.45)]">
        <h2 className="text-center font-semibold">JA Tracker</h2>
      </div>

      {/* Menu */}
      <div className="mt-4">
        <button className="flex items-center gap-3 w-48 py-4 px-2 font-sans rounded-r-md transition-all hover:bg-[#FCE597] hover:shadow-[6px_0_12px_-2px_rgba(0,0,0,0.35)]">
          <BiSolidDashboard className="text-xl" />
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-48 font-sans py-4 px-2 rounded-r-md transition-all hover:bg-[#FCE597] hover:shadow-[6px_0_12px_-2px_rgba(0,0,0,0.35)]">
          <FaSuitcase className="text-xl" />
          Jobs
        </button>
      </div>

      {/* Profile*/}
      <div className="mt-auto flex items-center pl-2 pb-4">
        <img src="https://i.pravatar.cc/40" className="rounded-full size-7" />
        <h5 className="pl-2 font-bold font-sans">Doland Trump</h5>
      </div>

    </div>
  );
};

export default Sidebar;
