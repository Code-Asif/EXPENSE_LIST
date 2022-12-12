import React from 'react'
import { SlHandbag } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="flex justify-between">
            <Link to="/">
                <h1 className="flex items-center text-2xl font-bold">
                    Xpensr <SlHandbag className="ml-2" />
                </h1>
            </Link>
            <a href='https://github.com/8Apoorv8/REDUX_EXPENSE_LIST' target="__blank" className="flex items-center text-xl border-2 px-2 border-black rounded-md hover:text-zinc-800 cursor-pointer">
                <AiFillGithub className="mr-2" size={24} />
                Github
            </a>
        </div>
    )
}

export default Navbar