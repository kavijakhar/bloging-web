import React from 'react'



const About = () => {

  return (
    <div className=" bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500 h-full w-full ">

      <div >
        <div className=" justify-center items-center sm:space-x-24  md:flex block  px-4 h-full    ">
          <div className='md:mt-24  h-max mb-44 ' >
            <h1 className=" my-4 text-5xl font-bold leading-tight text-violet-200">About my website</h1>
            <p className="  max-w-md  font-medium text-gray-200 capitalize" >
             My blogging website is a platform where I shares my thoughts and ideas on a wide range of topics. From personal experiences to tips and advice on various subjects, my website offers valuable information for readers who are looking to learn something new or be inspired. The website is easy to navigate and is well-organized, making it easy for readers to find what they're looking for.my writing style is engaging and relatable, making my website a great resource for anyone looking for a good read. The website also features a contect section where readers can share their own thoughts and ideas with me . Overall, my blogging website is a great platform for readers who are looking for a fresh perspective on different subjects.
            </p >

          </div>
          <div className=" ">
            <img className=' rounded-lg' src="https://w0.peakpx.com/wallpaper/173/503/HD-wallpaper-book-sky-butterfly-abstract.jpg" alt="bgpic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
