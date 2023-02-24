import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Card = (props) => {


    let { title, description, ImageUrl, content, author, date, getblogs } = props;
    return (
        <div >
            <div className="max-w-sm mx-6  rounded overflow-hidden shadow-2xl  hover:scale-105  bg-gradient-to-b from-violet-500 via-violet-500 to-violet-700   duration-500   ">
                <img className="w-full" src={ImageUrl} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-violet-200">{title}</div>
                    <p className="text-gray-200 text-base">
                        {description}
                    </p>
                    <p className="text-gray-200 text-base">
                        {content}....
                        <div>
                            <Link getblogs={getblogs} to="/blogpage" className=' w-36 bg-violet-200 flex text-violet-700 rounded-2xl h-7  px-2 my-2  font-semibold  text-lg '>Read More < AiOutlineArrowRight className="mt-1 mx-1 text-xl" />
                            </Link>

                        </div>
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{author} on  {new Date(date).toGMTString()}</span>


                </div>
            </div>

        </div>
    )
}

export default Card
