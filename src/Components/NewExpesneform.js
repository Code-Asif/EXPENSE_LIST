import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { categories } from "../Assets/CategoriesApi";
import { ADD_EXPENSE } from "../Redux/Actions/Actions";
import sucessanimation from "../Assets/animation.gif";
import { Link } from "react-router-dom";
const NewExpesneform = () => {
  const dispatch = useDispatch();
  let [name, setName] = useState("");
  let [amount, setAmount] = useState(0);
  let [category, setCategory] = useState(false);
  let [catVal, setCatVal] = useState("Select Category");
  const [sucess, setSucess] = useState(false);
  // /---------------------------------------------------
  const categoriesSelected = (e) => {
    console.log(e.target.innerText);
    setCategory(!category);
    setCatVal(e.target.innerText);
  };

  const SubmitForm = () => {
    if (name == "" || amount == "1" || catVal == "Select Category") {
      alert("Some of the field is Empty");
    } else {
      const sendData = {
        name,
        amount,
        catVal,
        createdAt: new Date(),
      };
      dispatch(ADD_EXPENSE(sendData));
      setSucess(true);
    }
  };

  //   --------------------------------------------

  return (
    <>
      {!sucess ? (
        <div className="flex flex-col h-[440px] bg-[#D4B996FF] rounded py-4 px-4">
          <div className="TOP flex-1 w-full">
            <div className="mt-4">
              <label className="mr-12">Name</label>
              <input
                type="text"
                placeholder="Give a name to your expense"
                className="w-[70%] px-4 py-2 focus:outline-none rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label className="mr-8">Amount</label>
              <input
                type="number"
                placeholder="Amount of your expense"
                className="w-[70%] px-4 py-2 focus:outline-none rounded"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex">
              <label className="mr-6">Category</label>
              <div
                className="flex items-center justify-between w-[50%] bg-white cursor-pointer px-2 py-1 rounded"
                onClick={() => setCategory(!category)}
              >
                {catVal} <AiFillCaretDown />
              </div>
            </div>
            {category ? (
              <div className="relative left-24 bg-red-200 mt-2 w-[48%]">
                {categories.map(({ id, title, icon }) => (
                  <div
                    key={id}
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-300 cursor-pointer transition-all "
                    onClick={categoriesSelected}
                  >
                    <div>{title}</div>
                    <div>{icon}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="BOTTOM flex-1 relative ">
            <button
              className="absolute bottom-0 right-0 px-4 py-2 bg-[#a07855ff] text-white rounded-md"
              onClick={SubmitForm}
            >
              ADD
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center  flex flex-col  py-4 px-6 ">
          <div className="grid place-content-center">
            <img
              src={sucessanimation}
              alt="sucessLogo"
              className="h-[150px] "
            />
          </div>
          <h1 className="my-4 text-xl px-2">Form Submitted</h1>
          <div>

            <Link to="/">
              <button className="px-4 py-2 bg-[#a07855ff] border-2  text-white font-bold rounded-md mx-auto mr-3">
                Home
              </button>
            </Link>
            <>
              <button className="px-4 py-2 bg-[#a07855ff] border-2 text-white font-bold rounded-md mx-auto" onClick={() => setSucess(!sucess)}>
                Add More
              </button>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default NewExpesneform;
