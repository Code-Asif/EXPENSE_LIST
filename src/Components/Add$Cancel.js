import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import NewExpesneform from "./NewExpesneform";
const Add$Cancel = () => {
  return (
    <div>
      <div className="flex justify-between my-4 ">
        <Link to="/">
          <div className="LEFT flex items-center border-2 rounded-md px-2 py-1 cursor-pointer hover:text-zinc-700 transition-all">
            <IoIosArrowBack /> Back
          </div>
        </Link>
        <Link to="/">
          <div className="RIGHT flex items-center border-2 rounded-md px-2 py-1 cursor-pointer hover:text-zinc-700 transition-all">
            <GiCancel className="mr-1" /> Cancel
          </div>
        </Link>
      </div>
      <div>
        <NewExpesneform />
      </div>
    </div>
  );
};

export default Add$Cancel;
