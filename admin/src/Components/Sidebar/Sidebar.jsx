import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets.js";
import { FaPlusCircle } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

function Sidebar() {
  return (
    <div className="w-50 md:w-80 min-h-screen border border-black border-t-0 border-l-0 border-b-0">
      <div className="py-10 pl-8 flex flex-col gap-8">
        <NavLink
          to={"/add"}
          className={({ isActive }) =>
            `w-full flex justify-end items-center gap-4 border border-black border-r-0 rounded-md p-6 cursor-pointer ${
              isActive ? "border-[#034620] bg-[#034620] text-white" : ""
            }`
          }
          style={{ height: "80px" }}
        >
          <FaPlusCircle className="text-4xl" />
          <p className="hidden md:flex">Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className={({ isActive }) =>
            `w-full flex justify-end items-center gap-4 border border-black border-r-0 rounded-md p-6 cursor-pointer ${
              isActive ? "border-[#034620] bg-[#034620] text-white" : ""
            }`
          }
          style={{ height: "80px" }}
        >
          <FaListUl className="text-4xl" />
          <p className="hidden md:flex">List Items</p>
        </NavLink>
        <NavLink
          to={"/orders"}
          className={({ isActive }) =>
            `w-full flex justify-end items-center gap-4 border border-black border-r-0 rounded-md p-6 cursor-pointer ${
              isActive ? "border-[#034620] bg-[#034620] text-white" : ""
            }`
          }
          style={{ height: "80px" }}
        >
          <GoPackage className="text-4xl" />
          <p className="hidden md:flex">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
