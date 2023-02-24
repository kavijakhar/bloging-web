import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=" h-full  p-12 text-white   bg-gradient-to-b from-violet-500 via-violet-400 to-violet-700">

      <div className="container px-3 h-full mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="flex flex-col w-full md:w-2/5  justify-center items-start text-center md:text-left">
          <p className="uppercase w-full text-gray-300">welcome to my website </p>
          <h1 className="my-4 text-5xl font-bold leading-tight text-violet-200">THIS IS A MERN STACK WEBSITE </h1>
          <p className="leading-normal text-2xl mb-8 text-gray-300">This is home page and in this website you can create your account and login your account with the email and password and you can logout . for show blog click on this button.</p>



          <Link className="mx-auto lg:mx-0 hover:underline bg-gradient-to-l from-violet-400 to-violet-700 text-gray-300 text-xl font-bold rounded-full my-4 py-3 px-8 shadow-lg" to="/blog">See Blogs </Link>

        </div>

        <div className="w-full md:w-3/5 py-7 items-center">
          <img className="w-full md:w-4/5  " alt='jsx-a11y/alt-text' src="https://www.tailwindtoolbox.com/templates/hero.png" />
        </div>

      </div>

    </div>
  )
}

export default Home
