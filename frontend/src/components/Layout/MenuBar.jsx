import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

const MenuBar = () => {
  return (
    <>
      <div className="flex bg-[#FEF2CF] py-[8px] shadow-[0_2px_6px_-2px_rgba(0,0,0,0.45)] p-2 w-auto items-center justify-between">
        <div className="relative  ml-5 shadow-[0_-2px_6px_rgba(0,0,0,0.2)]">
          <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            className="bg-[#FCE597] p-2 pl-9 shadow-lg rounded-sm focus:outline-none focus:ring-1 focus:ring-[#e6a911]"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-5 mr-5">
          <button><span><IoNotifications className="text-black text-2xl" /></span></button>
          <button><span><IoSettings  className="text-black text-2xl" /></span></button>
          <button className="bg-[#e6a911] border  text-gray-800 p-[8px]  rounded-lg hover:bg-[#FCE597] transition duration-300 mb-2 font-medium font-sans
}">Log Out</button>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
