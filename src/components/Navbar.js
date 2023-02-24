import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { HiLogout } from "react-icons/hi";
import { BiUserPlus } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login")
    }
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "home",
            path: "/"
        },
        {
            id: 3,
            link: "about",
            path: "/about"
        },
        {
            id: 4,
            link: "blog",
            path: "/blog"
        },
        {
            id: 5,
            link: "contact",
            path: "/contact"
        }
    ]

    return (
        <div className="flex justify-between  items-center w-full h-20 bg-gradient-to-b from-violet-100 via-violet-200 to-violet-100   shadow-xl px-4 relative">
            <div>
                <Link to="/" className="text-violet-600 font-bold text-3xl cursor-pointer">KAVYABLOG</Link>
            </div>

            <ul className="flex">
                <div className=" md:flex hidden mt-4 mr-5 ">
                    {links.map(({ id, link, path }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize  text-xl text-violet-600 hover:scale-105 hover:text-black duration-200"
                        >
                            <Link to={path} duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </div>

                <div >
                    {!localStorage.getItem('token') ?
                        <div className="mr-4   md:flex hidden  mt-3 text-violet-600  space-x-4">
                            <Link to="/signup" role="button" className='hover:text-black flex mb-3 border-solid border-2 border-violet-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-1 '>SignUp <BiUserPlus className=' mx-1 text-3xl' /></Link>
                            <Link to="/login" role="button" className='hover:text-black flex mb-3 border-solid border-2 border-violet-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-1 '>Login <FiLogIn className=' mx-1 text-2xl' /></Link>
                        </div> : <button onClick={handleLogout} className="hover:text-black  md:flex hidden text-violet-600  mr-2 mt-2 mb-1 border-solid border-2 border-violet-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-2 pb-2 ">Logout <HiLogout className=' mx-1 text-2xl ' /></button>
                    }
                </div>


            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer  pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-violet-600" />}
            </div>

            {nav && (
                <ul className="flex flex-col absolute top-0 left-0  w-full  h-92   bg-violet-600 rounded-br-3xl rounded-bl-3xl  text-white ">
                    <div>
                        {links.map(({ id, link, path }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer hover:text-black  capitalize py-2 text-4xl   "
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={path}
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div> {!localStorage.getItem('token') ?
                        <div onClick={() => setNav(!nav)} className="ml-3  flex  mt-3 text-violet-600  space-x-4">
                            <Link to="/signup" role="button" className='hover:text-black flex mb-3 border-solid  border-violet-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-1 '>SignUp <BiUserPlus className=' mx-1 text-3xl' /></Link>
                            <Link to="/login" role="button" className='hover:text-black flex mb-3 border-solid  border-violet-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-1 '>Login <FiLogIn className=' mx-1 text-3xl' /></Link>
                        </div> : <div  onClick={() => setNav(!nav)} >
                            <button onClick={handleLogout} className="hover:text-black flex ml-4  text-violet-600  mr-2 mt-2 mb-3 border-solid border-2 border-violet-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-2 pb-2 text-xl ">Logout <HiLogout className=' mx-1 mt-1 text-2xl ' /></button>
                        </div>
                    }

                    </div>
                </ul>
            )}
        </div>
    );
}
export default Navbar