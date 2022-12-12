import React from "react";
import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";
import empty from "../Assets/empty1.gif";
const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.MAIN_REDUCER);
  const filteredList = list.filter(item => item.name.includes(query))
  console.log(list);

  return (
    <div>
      {list.length ? (
        list.map((item) => (
          <div>
            <ExpenseCard item={item} />
          </div>
        ))
      ) : (
        <div className="grid place-content-center mt-36">
          <img src={empty} alt="emptyStore" className="h-[200px] " />
          <h1 className="my-4 text-xl text-gray-400 ">OOPSS!! No Expense</h1>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
