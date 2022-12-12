import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { categories } from "../Assets/CategoriesApi";
import { useDispatch } from "react-redux";
import { DEL_EXPENSE } from "../Redux/Actions/Actions";
const ExpenseCard = ({ item }) => {
  const [icon, setIcon] = useState();
  const time = moment(item.createdAt).fromNow();
  const iconCheck = () => {
    for (let key of categories) {
      if (item.catVal === key.title) {
        setIcon(key.icon);
      }
    }
  };
  useEffect(() => {
    iconCheck();
  }, [item]);
  //   console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center p-2 mb-2 bg-[#D4B996FF] rounded">
      <div className="LEFT flex">
        <div className="text-5xl">{icon}</div>
        <div className="ml-3">
          <h1 className="font-semibold ">{item.name}</h1>
          <h1 className="text-gray-[400]">{time}</h1>
        </div>
      </div>
      <div className="RIGHT flex items-center">
        <h1 className="mr-3 font-semibold">₹ {item.amount}</h1>
        <AiOutlineDelete
          size={28}
          className="hover:cursor-pointer hover:text-red-600 transition-all"
          onClick={() => dispatch(DEL_EXPENSE(item))}
        />
      </div>
    </div>
  );
};

export default ExpenseCard;
