import { FaGraduationCap } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import { FaShoppingBasket } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { GiDeadlyStrike } from 'react-icons/gi'



export const categories = [
    {
        id: Math.random(),
        title: "EDUCATION",
        icon: <FaGraduationCap />
    },
    {
        id: Math.random(),
        title: "HeathCare",
        icon: <MdHealthAndSafety />
    },
    {
        id: Math.random(),
        title: "Shopping",
        icon: <FaShoppingBasket />
    },
    {
        id: Math.random(),
        title: "Food",
        icon: <MdFastfood />
    },
    {
        id: Math.random(),
        title: "Other",
        icon: <GiDeadlyStrike />
    },
]