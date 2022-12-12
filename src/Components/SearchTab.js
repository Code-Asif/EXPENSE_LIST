import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SEARCH_EXPENSE } from "../Redux/Actions/Actions";
const SearchTab = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center my-4 border-2 border-black rounded-lg w-[70%] bg-[#D4B996FF]">
        <BiSearchAlt2 size={24} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search for the Expense"
          className="px-1 py-1 focus:outline-none w-full bg-transparent placeholder:text-black placeholder:font-semibold"
          onClick={(e) => dispatch(SEARCH_EXPENSE(e.target.value))}
        />
      </div>
      <Link to="addandcancel">
        <div className="flex items-center cursor-pointer border-2 rounded-md px-2 py-1">
          <div className="mr-2">
            <AiOutlinePlus size={24} />
          </div>
          <div> Add</div>
        </div>
      </Link>
    </div>
  );
};

export default SearchTab;
